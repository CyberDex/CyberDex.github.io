import PIXI from 'pixi.js';

export default class Background extends PIXI.Sprite {
    constructor(config) {
        super(PIXI.Texture.fromImage(config.src));
    }
}
