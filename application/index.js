let BaseApplication = require('../lib/application/index.js');
let config = require('../config.js');
let _ = require('../lib/_.js');

let fs = require('fs');

class Application extends BaseApplication
{
    constructor()
    {
        super(config);
    }

    getRouteMap()
    {
        return [
            {
                path: '/',
                handler: this.processHome,
            },
        ];
    }

    processHome(req, res)
    {
        res.end('Arrows from the sky!');
    }
}

module.exports = Application;
