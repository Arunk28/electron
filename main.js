const electron = require('electron');
const url = require('url');
const path = require('path');

const {app,BrowserWindow}  = electron;

let mainWindow ;

//Listen to tjhe app at ready
app.on('ready',function(){

//create new window
mainWindow = new BrowserWindow({});

//load the html to the window
mainWindow.loadURL(url.format({
    pathname: path.join(__dirname,'welcome.html'),
    protocol : 'file:',
    slashes : true
}));

});