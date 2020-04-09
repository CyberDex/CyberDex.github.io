import PIXI from 'pixi.js';
import utils from '../utils.js';

export default class Slot extends PIXI.Sprite {
    constructor(columnNumber, rowNumber, slot, config) {
        super(PIXI.Texture.fromImage(
            config.slotsSrc + slot + config.slotsImgFormat));

        this.config = config;
        this.anchor.set(0.5, 0);
        this.x = config.linesXPositions[columnNumber];
        this.y = rowNumber * config.slotHeight;
        this.columnNumber = columnNumber;
        this.rowNumber = rowNumber;
        this.rollsCount = 0;
        this.isSliding = false;
        this.slotID = slot;
        this.finalSlot = undefined;
        this.updated = false;
        this.count = 0;
    }

    set slot(slot) {
        this.slotID = slot;
        this.texture = PIXI.Texture.fromImage(
            this.config.slotsSrc + slot + this.config.slotsImgFormat);
    }

    update() {
        if (this.isSliding) {
            this.y -= this.config.rollingSpeed[this.columnNumber];

            if (this.y <= -this.config.slotHeight) {
                this.rollsCount++;
                this.y = this.config.slotHeight * 3;

                if (this.finalSlot &&
                    this.rollsCount >= this.config.rollsCount[this.columnNumber]) {

                    this.slot = this.finalSlot;
                    this.updated = true;
                    this.rollsCount = 0;
                } else if (!this.updated) {
                    this.slot = utils.getRandomSlot(this.config.slotsCount);
                }
            }

            if (this.updated && (this.y == this.rowNumber * this.config.slotHeight)) {
                this.isSliding = false;
            }
        } else {
            this.scale.x = 1 + Math.sin(this.count) * 0.01;
            this.scale.y = 1 + Math.sin(this.count) * 0.01;
            this.count += 0.1;
        }
    }
}
