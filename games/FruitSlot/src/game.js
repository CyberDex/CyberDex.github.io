import PIXI from 'pixi.js';
import AnimationLoop from 'pixi-animationloop';
import utils from './utils.js';
import Text from './view/Text.js';
import Background from './view/Background';
import SpinButton from './view/SpinButton';
import Sound from './view/Sound';
import Slot from './view/Slot';

export default class Game {
    constructor(config) {
        const Renderer = (config.pixiConfig.webgl) ? PIXI.autoDetectRenderer : PIXI.CanvasRenderer;
        this.renderer = new Renderer(config.pixiConfig.width || 960,
            config.pixiConfig.height || 540,
            config.pixiConfig.rendererOptions);
        document.body.appendChild(this.renderer.view);

        this.animationLoop = new PIXI.AnimationLoop(this.renderer);
        this.animationLoop.on('prerender', this.update.bind(this));

        this.config = config;

        this.slots = [];
        this.credit = config.game.credit;
        this.bet = config.game.bet;
        this.rewarded = false;
        this.reward = 0;

        this.autoSpin = false;

        this.moneyUpdated = false;
        this.tmpCredit = 0;
        this.newCredit = 0;
        this.tmpreward = 0;
        this.lastDing = false;

        this.isSpinning = false;

        this.background = new Background(config.views.background);
        this.spinButton = new SpinButton(config.views.spinButton);
        this.sound = new Sound(config.views.sound);

        this.resultText = new Text(config.views.texts.result);
        this.creditText = new Text(config.views.texts.money,
            config.views.texts.money.text + this.credit);
        this.rewardText = new Text(config.views.texts.win,
            config.views.texts.win.text + this.reward);
        this.betText = new Text(config.views.texts.bet,
            config.views.texts.bet.text + this.bet);

        this.betButton1 = new Text(config.views.texts.bet1);
        this.betButton2 = new Text(config.views.texts.bet2);
        this.betButton3 = new Text(config.views.texts.bet3);

        this.autoSpinButton = new Text(config.views.texts.autoSpin);

        this.timeout = 0;

        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 3; x++) {
                let newSlot = new Slot(x, y,
                    utils.getRandomSlot(this.config.views.slot.slotsCount),
                    config.views.slot);
                this.slots.push(newSlot);
            }
        }
    }

    startGame() {
        this.stage.addChild(this.background);
        this.stage.addChild(this.spinButton);
        this.stage.addChild(this.sound);
        this.stage.addChild(this.creditText);
        this.stage.addChild(this.rewardText);
        this.stage.addChild(this.betText);

        this.stage.addChild(this.betButton1);
        this.betButton1.on("click", () => this.setBet(this.config.views.texts.bet1.bet));
        this.betButton1.on("tap", () => this.setBet(this.config.views.texts.bet1.bet));

        this.stage.addChild(this.betButton2);
        this.betButton2.on("click", () => this.setBet(this.config.views.texts.bet2.bet));
        this.betButton2.on("tap", () => this.setBet(this.config.views.texts.bet2.bet));

        this.stage.addChild(this.betButton3);
        this.betButton3.on("click", () => this.setBet(this.config.views.texts.bet3.bet));
        this.betButton3.on("tap", () => this.setBet(this.config.views.texts.bet3.bet));

        this.stage.addChild(this.autoSpinButton);
        this.autoSpinButton.on("click", () => {
            this.autoSpin = !this.autoSpin;
            if (this.autoSpin) this.goSpin();
        });
        this.autoSpinButton.on("tap", () => {
            this.autoSpin = !this.autoSpin;
            if (this.autoSpin) this.goSpin();
        });

        this.slots.forEach(slot => this.stage.addChild(slot));

        if (this.config.game.playMusic) this.sound.loopSound('music');

        this.spinButton.on("click", () => this.goSpin());
        this.spinButton.on("tap", () => this.goSpin());
    }

    setBet(bet) {
        this.bet = bet;
        this.betText.setText = this.config.views.texts.bet.text + this.bet;
    }

    goSpin() {
        if (this.isSpinning || !this.credit) return;

        this.spinButton.active = false;
        this.isSpinning = true;
        this.rewarded = false;
        this.moneyUpdated = false;

        this.reward = 0;
        this.rewardText.setText = this.config.views.texts.win.text + this.reward;

        this.credit -= this.bet;
        this.creditText.setText = this.config.views.texts.money.text + this.credit;

        this.slots.forEach(slot => {
            slot.isSliding = true;
        });

        utils.loadJSON('../data.json').then(JSONData => {
            this.resultReels = JSONData;
            this.updateSlotsData(this.resultReels);
        }).catch(error => console.log('Error:', error));
    }

    updateSlotsData(data) {
        this.slots.forEach((slot, id) => {
            if (id < 9) {
                slot.finalSlot = data[slot.rowNumber][slot.columnNumber];
            } else {
                slot.finalSlot = utils.getRandomSlot(this.config.views.slot.slotsCount);
            }
        });
    }

    updateCounters() {
        if (this.tmpCredit < this.newCredit) {
            this.tmpCredit += 10;
            this.creditText.setText = this.config.views.texts.money.text + this.tmpCredit;
            this.tmpreward += 10;
            this.rewardText.setText = this.config.views.texts.win.text + this.tmpreward;
        } else if (!this.moneyUpdated) {
            this.moneyUpdated = true;
            this.creditText.setText = this.config.views.texts.money.text + this.credit;
            this.rewardText.setText = this.config.views.texts.win.text + this.reward;
            this.tmpCredit = 0;
            this.newCredit = 0;
        }
    }

    checkResults() {
        if (this.isSpinning && this.resultReels) {

            this.sound.playSound('slide');

            let slotsUpdatedCount = 0;
            this.slots.forEach(slot => {
                if (!slot.isSliding) slotsUpdatedCount++;
            });


            if (slotsUpdatedCount == 12) {
                this.isSpinning = false;

                if (this.credit > 0) this.spinButton.active = true;

                this.slots.forEach(slot => {
                    slot.updated = false;
                });

                if ((this.resultReels[1][0] == this.resultReels[1][1]) &&
                    (this.resultReels[1][1] == this.resultReels[1][2])) {

                    if (!this.rewarded) {
                        this.rewarded = true;
                        this.tmpreward = this.reward;
                        this.reward += this.bet * 10;
                        this.tmpCredit = this.credit;
                        this.newCredit = this.credit + this.bet * 10;
                        this.credit += this.bet * 10;

                        this.resultText.setText = this.config.views.texts.result.text + this.bet * 10;
                        this.stage.addChild(this.resultText);
                        this.sound.playSound('win');

                        this.autoSpin = false;

                        setTimeout(() =>
                            this.stage.removeChild(this.resultText),
                            this.config.game.resultDelay);
                    }
                }
            }

            if (this.autoSpin) this.goSpin();
        }
    }

    update() {
        for (let i = 0; i < this.stage.children.length; i++) {
            if (this.stage.children[i].update) {
                this.stage.children[i].update(this.animationLoop.delta);
            }
        }

        this.updateCounters();
        this.checkResults();
    }

    start() {
        this.animationLoop.start();
    }

    stop() {
        this.animationLoop.stop();
    }

    get stage() {
        return this.animationLoop.stage;
    }

    set stage(stage) {
        this.animationLoop.stage = stage;
    }
}