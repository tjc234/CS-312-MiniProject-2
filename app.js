// import libraries
import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

// initialze app
const app = express();
const port = 3000;

// set static folder and body parser
app.use( express.static( 'public') );
app.use( bodyParser.urlencoded( { extended: true } ) );

// set view engine
app.set( 'view engine', 'ejs' );

// routing to homepage (GET)
app.get( '/', ( req, res ) => {
    // render index.ejs with joke as null
    res.render( 'index', { joke: null } );
}); 

// form submisison route (POST)
app.post( '/', async ( req, res ) => {
    // get joke from API
    const response = await axios.get( 'https://official-joke-api.appspot.com/random_joke' );
    joke = response.data;

    // render index.ejs with joke
    res.render( 'index', { joke: joke } );
});

// start server
app.listen( port, () => {
    console.log( 'Server started on port: ${port}' );
});