let bg;
let player;
let title;
let goBackText;

export default class Credits extends Phaser.Scene {
    constructor() {
        super('credits');
    }

    preload() {

        this.load.image('bg', 'Assets/UI/bg.png');
        this.load.spritesheet('run', 'Assets/Player/Run.png', {
            frameWidth: 126,
            frameHeight: 126
        });

    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        bg = this.add.image(screenCenterX, screenCenterY, 'bg');

        this.add.ellipse(screenCenterX, screenCenterY - 65, 50, 10, 0x000);

        player = this.physics.add.sprite(screenCenterX, screenCenterY - 90, 'player').setScale(0.6);

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('run', {
                start: 0,
                end: 12
            }),
            frameRate: 30,
            repeat: -1
        });

        player.play('run');

        title = this.add.text(screenCenterX, screenCenterY, 'CREDITS', {
            fontFamily: 'dogicaPixel',
            fontSize: '40px',
            align: 'center'
        }).setOrigin(0.5);

        goBackText = this.add.text(screenCenterX, screenCenterY + 300, 'Back', {
            fontFamily: 'dogicaPixel',
            fontSize: '20px',
            align: 'center'
        }).setOrigin(0.5).setInteractive();

        goBackText.on('pointerdown', () => {
            this.scene.start('startScene');
        });

    }

    update() {

        goBackText.on('pointerover', function (pointer) {
            goBackText.setScale(1.5);
        })

        goBackText.on('pointerout', function (pointer) {
            goBackText.setScale(1);
        })

    }
}