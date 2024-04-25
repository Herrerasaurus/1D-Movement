class Movement extends Phaser.Scene {
    constructor(){
        super("movementScene");
        this.my = {sprite: {}};

        this.posX = 400;
        this.posY = 300;
        this.keyD;
        this.keyA;
        this.keySpace;
    }

    preload(){
        this.load.setPath("./assets/");
        this.load.image("character", "platformChar_walk2.png");
        this.load.image("item", "platformPack_item010.png");
    }
    
    create(){
        let my = this.my;   // create an alias to this.my for readability

        my.sprite.body = this.add.sprite(this.posX, this.posY, "character");
        my.sprite.diamond = this.add.sprite(this.posX, this.posY, "item");
        my.sprite.diamond.visible = false;
        my.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        my.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Space);   
        this.input.keyboard.on('keydown-SPACE', (event)=> {
            my.sprite.diamond.x = my.sprite.body.x;
            my.sprite.diamond.y = my.sprite.body.y;
            my.sprite.diamond.visible = true;
        });
    }

    update(){
        let my = this.my;
        if(my.keyA.isDown){
            if(my.sprite.body.x > 0){
                my.sprite.body.x -= 1;
                if(my.sprite.diamond.visible == false){
                    my.sprite.diamond.x -= 1;
                }
            }
        }else if(my.keyD.isDown){
            if(my.sprite.body.x < 800){
                my.sprite.body.x += 1;
                if(my.sprite.diamond.visible == false){
                    my.sprite.diamond.x += 1;
                }
            }
        }
        if(my.sprite.diamond.visible == true){
            console.log("yes")
            my.sprite.diamond.y -= 1;
            if(my.sprite.diamond.y < -10){
                my.sprite.diamond.visible = false;
            }
        }
    }
}