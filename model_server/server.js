const express = require('express');
const {dbConection} = require('../database/config');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        
        //? server paths 
        this.paths = {
            auth : '/api/auth'
        }

        this.conectDatabase();
        this.middlewares();
        this.routes()
    }

    async conectDatabase() {
        dbConection();
    }

    middlewares() {
        this.app.use(express.json());
        
        this.app.use( express.static('public') );

        this.app.use(cors());
    }

    routes() {
        this.app.use( this.paths.auth  , require('../routes/auth') )

    }

    listen() {
        this.app.listen(this.port , ()=>{
            console.log(`server listening in the port : ${ this.port } `)
        })
    }

}

module.exports = Server