import PIXI from 'pixi.js';

export default class Text extends PIXI.Text {
    constructor(config, text, x, y, anchor) {
        super(text || config.text, config.style);
        this.x = x || config.x;
        this.y = y || config.y;
        this.anchor.set(anchor || config.anchor);
        this.animation = undefined;
        this.defaultWidth = this.width;
        this.defaultHeight = this.height;
        this.count = 0;
        this.animation = config.animation;
        if (config.isLink) {
            this.interactive = true;
            this.buttonMode = true;
        }
    }

    set setText(text) {
        this.text = text;
    }

    animate(animation) {
        switch (animation) {
            case 'zoom':
                this.scale.x = 1 + Math.sin(this.count) * 0.04;
                this.scale.y = 1 + Math.sin(this.count) * 0.04;
                this.count += 0.1;
                break;
        }
    }

    update() {
        if (this.animation) this.animate(this.animation);
    }
}