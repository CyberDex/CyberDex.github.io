import PIXI from 'pixi.js';

export default class SpinButton extends PIXI.Sprite {
    constructor(config) {
        super(PIXI.Texture.fromImage(config.enabledSRC));

        this.enabledTexture = PIXI.Texture.fromImage(config.enabledSRC);
        this.disabledTexture = PIXI.Texture.fromImage(config.disabledSRC);

        this.anchor.set(config.anchor);
        this.x = config.x;
        this.y = config.y;
        this.interactive = true;
        this.buttonMode = true;
        this.isActive = true;
        this.count = 0;
    }

    set active(active) {
        this.isActive = active;
        if (!active) {
            this.scale.x = 0.96;
            this.scale.y = 0.96;
            this.texture = this.disabledTexture;
            this.interactive = false;
        } else {
            this.scale.x = 1;
            this.scale.y = 1;
            this.texture = this.enabledTexture;
            this.interactive = true;
        }
    }

    get active() {
        return this.isActive;
    }
}
