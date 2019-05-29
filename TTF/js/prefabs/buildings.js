var releaseFrequency = 1000;
Building = function(game, key, frame, animation) {
        //creating the new building
        this.placementSound = game.add.audio('placement_sound',10,false);
        console.log("new building created" + frame);
        Phaser.Sprite.call(this, game, 0, 0, key, frame);
        //this.y = -10;
        //game.physics.enable(this, Phaser.Physics.ARCADE);
        if (animation){
            this.animations.add('idle', ['windmill1', 'windmill2', 'windmill3', 'windmill4', 'windmill5', 'windmill6', 'windmill7', 'windmill8', 'windmill9', 'windmill10', 'windmill11', 'windmill12', 'windmill13', 'windmill14', 'windmill15', 'windmill16']);
            this.animations.play('idle', 10, true);
        }

        this.x = game.input.mousePointer.x + game.camera.x;
        this.y = gameHeight-groundHeight-this.height + 20;
        game.physics.arcade.enable(this);
        if(game.physics.arcade.overlap(this, buildings)){
            console.log("overlapping building")
            this.destroy();
        }
        else{
            console.log("new building added to group");
            buildings.add(this);
            this.placementSound.play();

            //controlling people!
            this.population = 1;

            //timed release of people inside
            //  Create our Timer
            releaseTimer = game.time.create(false);
            //  Set a TimerEvent to occur;
            releaseTimer.loop(releaseFrequency, personRelease, this);

            //  Start the timer running
            releaseTimer.start();
        }



};

Building.prototype = Object.create(Phaser.Sprite.prototype);
Building.prototype.constructor = Building;
Building.prototype.update = function(){

}

function personRelease(){
    if (this.population > 0){
        //console.log(this.x);
        this.owner = new Person(game, this.x + houseHeight/2, this.y + this.height-32);
        this.population -= 1;
    }
}