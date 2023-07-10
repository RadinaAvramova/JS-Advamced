import Destructable from "./models/Destructable.js";
import Game from "./models/Game.js";
import Player from "./models/Player.js";
import Settings from "./models/Settings.js";

console.log('here');
let playerField = document.getElementById('field');
let domElement = document.getElementById('itemField');
let pauseButton = document.getElementById('pauseButton');
// let audio = new Audio('/sound/whack.mp3');
let audioElement = document.getElementById('whack');
let settings = new Settings();
let player = new Player(40, 40, 0, 0, '/sprites/hammer1.png', '/sprites/hammer2.png','/sprites/hammer3.png');
playerField.appendChild(player._element);
let game = new Game(playerField, domElement, pauseButton, player, createDestructable, settings, audioElement);

game.start();

function createDestructable(width, height, minSize, maxSize) {
    let size = Math.random() * (maxSize - minSize) + minSize;
    let randomX = Math.random() * (width - size);
    let randomY = Math.random() * (height - size);
    let imageNumber = Math.ceil(Math.random() * 2);
    let destructable = new Destructable(size, size, randomX, randomY, `/sprites/barrel${imageNumber}.webp`, 5);
    return destructable;
}