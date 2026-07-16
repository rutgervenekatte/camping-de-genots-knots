class CampScene extends Phaser.Scene {

    constructor() {
        super("CampScene");
    }

    create() {

        // Achtergrond
        this.cameras.main.setBackgroundColor("#69c56d");

        // Gras
        this.add.rectangle(1000, 1000, 2000, 2000, 0x69c56d);

        // Pad
        this.add.rectangle(1000, 900, 1800, 160, 0xd9b97a);

        // Meer
        this.add.ellipse(1700, 1450, 500, 320, 0x4aa8ff);

        // Kantine
        this.add.rectangle(1350, 700, 260, 180, 0x8b5a2b);

        this.add.text(1280,690,"KANTINE",{
            fontSize:"18px",
            color:"#ffffff"
        });

        // Kampvuur
        this.add.circle(980,920,18,0xff7700);

        // Bomen
        for(let i=0;i<35;i++){

            this.add.circle(
                Phaser.Math.Between(50,1950),
                Phaser.Math.Between(50,1950),
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

    }

    update(){

        const speed=5;

        if(this.cursors.left.isDown) this.player.x-=speed;
        if(this.cursors.right.isDown) this.player.x+=speed;
        if(this.cursors.up.isDown) this.player.y-=speed;
        if(this.cursors.down.isDown) this.player.y+=speed;

    }

}

new Phaser.Game({

    type:Phaser.AUTO,

    width:1920,

    height:1080,

    parent:"game",

    backgroundColor:"#69c56d",

    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH
    },

    scene:[CampScene]

});
