const express = require('express');
const cors  = require('cors');
const { customer, appEvent } = require('./api');
const HandleErrors = require('./utils/error-handler')


module.exports = async (app, channel) => {

    app.use(express.json());
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    //Listen events

    appEvent(app);
    //api
    customer(app, channel);

    // error handling
    app.use(HandleErrors);
    
}