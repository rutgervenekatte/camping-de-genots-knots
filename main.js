class CampScene extends Phaser.Scene{

    constructor(){
        super("CampScene");
    }

    preload(){

    }

    create(){

        this.cameras.main.setBackgroundColor("#63c76a");

        this.add.text(
            20,
            20,
            "Camping de Genots Knots",
            {
                font:"32px Arial",
                color:"#ffffff"
            }
        );

        this.player=this.add.circle(
            400,
            300,
            18,
            0x3498db
        );

        this.cursors=this.input.keyboard.createCursorKeys();

    }

    update(){

        const speed=4;

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

    type:Phaser.AUTO,

    width:800,

    height:600,

    backgroundColor:"#63c76a",

    parent:"game",

    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH
    },

    scene:[CampScene]

});
