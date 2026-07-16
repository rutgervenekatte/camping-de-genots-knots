class CampScene extends Phaser.Scene {

    constructor() {
        super("CampScene");
    }

    create() {

        // Achtergrond
        this.cameras.main.setBackgroundColor("#69c56d");

        // Grote wereld
        this.world = this.add.graphics();

        // Gras
        this.world.fillStyle(0x69c56d,1);
        this.world.fillRect(0,0,2500,2500);

        // Pad
        this.world.fillStyle(0xd7bf8a,1);
        this.world.fillRect(0,850,2500,180);

        // Meer
        this.world.fillStyle(0x4aa8ff,1);
        this.world.fillEllipse(1950,1750,650,450);

        // Kantine
        this.world.fillStyle(0x8a5a2b,1);
        this.world.fillRect(1450,650,300,220);

        // Kampvuur
        this.world.fillStyle(0xff7700,1);
        this.world.fillCircle(1100,940,22);

        // Bomen
        for(let i=0;i<30;i++){

            this.add.circle(
                Phaser.Math.Between(50,2450),
                Phaser.Math.Between(50,2450),
                28,
                0x2f8d3d
            );

        }

        // Hendrik
        this.player=this.add.circle(
            500,
            900,
            18,
            0x3498db
        );

        this.cursors=this.input.keyboard.createCursorKeys();

        this.cameras.main.startFollow(this.player);

        this.cameras.main.setZoom(1.3);

    }

    update(){

        let speed=4;

        if(this.cursors.left.isDown){
            this.player.x-=speed;
        }

        if(this.cursors.right.isDown){
            this.player.x+=speed;
        }

        if(this.cursors.up.isDown){
            this.player.y-=speed;
        }

        if(this.cursors.down.isDown){
            this.player.y+=speed;
        }

    }

}

new Phaser.Game({

    type: Phaser.AUTO,

    width: 1280,

    height: 720,

    parent:"game",

    backgroundColor:"#69c56d",

    scale:{
        mode:
