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
    res.render( 'index', { joke: null } );
});

// form submisison route

// start server