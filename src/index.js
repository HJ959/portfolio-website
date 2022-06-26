// js goes here :)
// import './main.css'
import * as PIXI from 'pixi.js'
import * as UTIL from './usefulFunctions.js'

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application({
    resizeTo: window
});

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
app.loader.add('floaty', 'media/floaty.png').load((loader, resources) => {
    // This creates a texture from a 'floaty.png' image
    const floaty = new PIXI.Sprite(resources.floaty.texture);

    // Setup the position of the floaty
    floaty.x = app.renderer.width / 2;
    floaty.y = app.renderer.height / 2;

    // Rotate around the center
    floaty.anchor.y = 0.5;
    floaty.pivot.set(window.innerWidth * 0.5, window.innerHeight * 0.5);

    // randomly place the sprite around the screen on load
    floaty.rotation = UTIL.getRandomInt(1,360);

    // Add the floaty to the scene we are building
    app.stage.addChild(floaty);

    // Listen for frame updates
    app.ticker.add(() => {
         // each frame we spin the floaty around a bit
        floaty.rotation -= 0.001;
    });
});