import PIXI from 'pixi.js';

export default class Sound extends PIXI.extras.TilingSprite {
    constructor(config) {
        let texture = PIXI.Texture.fromImage(config.imageSrc);
        super(texture, config.w, config.h);
        this.config = config;
        this.x = config.x;
        this.y = config.y;
        this.tilePosition.y -= config.h * 2;
        this.anchor.set(1, 0);
        this.interactive = true;
        this.buttonMode = true;

        this.sounds = [];
        for (let sound in config.sounds) {
            this[sound] = new Audio(config.sounds[sound]);
            this[sound].volume = config.volume;
            this.sounds.push(sound);
        }

        this.on("click", this.changeVolume);
        this.on("tap", this.changeVolume);
    }

    changeVolume() {
        if (this.volume == 1) this.volume = 0.5;
        else if (this.volume == 0.5) this.volume = 0.25;
        else if (this.volume == 0.25) this.volume = 0;
        else if (this.volume == 0) this.volume = 1;
    }

    loopSound(sound) {
        this[sound].play();
        this[sound].addEventListener('ended', function () {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    stopSound(sound) {
        if (!this[sound].paused) this[sound].pause();
    }

    playSound(sound) {
        this[sound].play();
    }

    set volume(volume) {
        this.sounds.forEach(sound => {
            this[sound].volume = volume;
        });
        this.tilePosition.y -= this.config.h;
    }

    get volume() {
        return this.music.volume;
    }
}