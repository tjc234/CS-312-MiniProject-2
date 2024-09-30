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
    res.render( 'index', { jokes: null } );
}); 

// form submisison route (POST)
app.post( '/', async ( req, res ) => {
    const jokes = [];
    const numJokes = parseInt( req.body.numJokes );

    try {
    // fetch requested number of jokes
    for( let i = 0; i < numJokes; i++ ) {
        const response = await axios.get( 'https://official-joke-api.appspot.com/random_joke' ) ;
        jokes.push( response.data );
    }

    // render index.ejs with joke
    res.render( 'index', { jokes: jokes } );
    } catch( error ) {
        // handle error
        console.error( 'Error fetching joke(s):', error );
        res.render( 'index', { jokes: null } );
    }
});

// start server
app.listen( port, () => {
    console.log( `Server started on port: ${port}` );
});