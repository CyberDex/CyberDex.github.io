import Game from './Game';
import utils from './utils.js';
import Text from './view/Text';

utils.loadJSON('../config.json').then(config => {

    const loader = new PIXI.loaders.Loader();

    let game = new Game(config);

    let loadingText = new Text(config.views.texts.loading,
        config.views.texts.loading.text,
        config.views.texts.loading.x,
        config.views.texts.loading.y - 30);
    game.stage.addChild(loadingText);

    let loadingProgress = new Text(config.views.texts.loading,
        '0 %',
        config.views.texts.loading.x,
        config.views.texts.loading.y + 30);
    game.stage.addChild(loadingProgress);

    let assets = [config.views.background.src,
        config.views.sound.imageSrc,
        config.views.spinButton.enabledSRC,
        config.views.spinButton.disabledSRC
    ];
    for (let sound in config.views.sound.sounds) {
        assets.push(config.views.sound.sounds[sound]);
    }
    for (let i = 1; i < config.views.slot.slotsCount + 1; i++) {
        assets.push(config.views.slot.slotsSrc + i + config.views.slot.slotsImgFormat);
    }

    loader.add(assets);
    loader.on('progress', loader =>
        loadingProgress.setText = Math.round(loader.progress) + ' %'
    );
    loader.on('complete', () => {
        game.stage.removeChild(loadingText);
        game.stage.removeChild(loadingProgress);
        game.startGame();
    });
    loader.load();
    game.start();
}).catch(error => console.log('Error:', error));