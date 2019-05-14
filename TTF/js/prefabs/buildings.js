var releaseFrequency = 1000;
Building = function(game, key, frame) {
        //creating the new building
        this.placementSound = game.add.audio('placement_sound',10,false);
        console.log("new building created");
        Phaser.Sprite.call(this, game, game.input.mousePointer.x + game.camera.x, gameHeight-groundHeight-houseHeight, key, select);
        game.physics.arcade.enable(this);
        if(game.physics.arcade.overlap(this, buildings)){
            console.log("overlapping building")
            this.kill();
        }
        else{
            console.log("new building added to group");
            buildings.add(this);
            this.placementSound.play();
        }

        //controlling people!
        this.population = 1;

        //timed release of people inside
        //  Create our Timer
        releaseTimer = game.time.create(false);
        //  Set a TimerEvent to occur;
        releaseTimer.loop(releaseFrequency, personRelease, this);

        //  Start the timer running
        releaseTimer.start();


};

Building.prototype = Object.create(Phaser.Sprite.prototype);
Building.prototype.constructor = Building;
Building.prototype.update = function(){
}

function personRelease(){
    if (this.population > 0){
        console.log("release person from building");
        this.population -= 1;
    }
}