class CampScene extends Phaser.Scene{

    constructor(){
        super("CampScene");
    }

    preload(){

    }

    create(){
this.cameras.main.startFollow(this.player);
this.cameras.main.setZoom(1.4);
this.cameras.main.setBounds(0,0,2000,2000);
        
        this.cameras.main.setBackgroundColor("#63c76a");
// Wereld vergroten
this.physics.world.setBounds(0, 0, 2000, 2000);

// Gras
const grass = this.add.graphics();

grass.fillStyle(0x63c76a, 1);
grass.fillRect(0, 0, 2000, 2000);

// Pad
grass.fillStyle(0xc9b07b, 1);
grass.fillRect(250, 820, 1500, 180);

// Meer
grass.fillStyle(0x4ea8de, 1);
grass.fillEllipse(1650, 1450, 500, 350);

// Kampvuur
grass.fillStyle(0xff7b00, 1);
grass.fillCircle(980, 940, 18);

// Kantine
grass.fillStyle(0x6b4f2a, 1);
grass.fillRect(1180, 640, 240, 170);

// Tenten
grass.fillStyle(0xd9d9d9, 1);

grass.fillTriangle(
300,350,
380,430,
220,430
);

grass.fillTriangle(
650,300,
730,380,
570,380
);

grass.fillTriangle(
980,340,
1060,420,
900,420
);
        this.add.text(
            20,
            20,
            "Camping de Genots Knots",
            {
                font:"32px Arial",
                color:"#ffffff"
            }
        );

        this.player = this.physics.add.image(
400,
900,
null
);

this.player.setCircle(18);

this.player.setTint(0x3498db);
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
