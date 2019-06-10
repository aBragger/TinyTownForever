var releaseFrequency = 1000;
Building = function(game, key, frame, xPos, peo_num, audio = true) {

        //creating the new building
        this.name = frame;
        this.placementSound = game.add.audio('placement_sound',10,false);
        console.log("new building created" + frame);
        Phaser.Sprite.call(this, game, 0, 0, key, frame);
        //this.anchor.set(0.5,0);

        console.log(peo_num);


        if(frame == 'windmill1'){
            this.animations.add('idle', ['windmill1', 'windmill2', 'windmill3', 'windmill4', 'windmill5', 'windmill6', 'windmill7', 'windmill8', 'windmill9', 'windmill10', 'windmill11', 'windmill12', 'windmill13', 'windmill14', 'windmill15', 'windmill16']);
            this.animations.play('idle', 10, true);
        }
        if(frame == 'tinywindmill1'){
            this.animations.add('idle', ['tinywindmill1', 'tinywindmill2', 'tinywindmill3', 'tinywindmill4', 'tinywindmill5', 'tinywindmill6', 'tinywindmill7', 'tinywindmill8', 'tinywindmill9', 'tinywindmill10', 'tinywindmill11', 'tinywindmill12', 'tinywindmill13', 'tinywindmill14', 'tinywindmill15', 'tinywindmill16']);
            this.animations.play('idle', 10, true);
        }

        this.x = xPos - this.width / 2;
        this.y = gameHeight-groundHeight-this.height + 20;
        game.physics.arcade.enable(this);
        if(game.physics.arcade.overlap(this, buildings)){
            console.log("overlapping building")
            this.destroy();
        }
        else{
            console.log("new building added to group");
            buildings.add(this);

            if(audio == true){
                this.placementSound.play();
            }

            //controlling people!
            this.population = peo_num;

            //timed release of people inside
            //  Create our Timer
            releaseTimer = game.time.create(false);
            //  Set a TimerEvent to occur;
            releaseTimer.loop(releaseFrequency, personRelease, this);

            //  Start the timer running
            releaseTimer.start();
            if(this.name != 'tinywindmill1') buildings_built.push(this);
            
        }



};

Building.prototype = Object.create(Phaser.Sprite.prototype);
Building.prototype.constructor = Building;
Building.prototype.update = function(){

}

function personRelease(){
    if (this.population > 0){
        if (this.name == 'tinywindmill1'){
            console.log('making a tiny windmill');
            this.owner = new Person(game, this.x + this.width/2 + game.rnd.integerInRange(-220, 220), this.y + this.height-10, true, 10);
        }
        else if (this.name == 'tree1' || this.name == 'tree2' || this.name == 'tree4')
        {
            console.log('this is a tree');
            for(i = 0; i < 5; i++)
            {
                var bird = birds.create(game.rnd.between(0, worldWidth),game.rnd.between(gameHeight - 100, gameHeight - 175), 'birds', 'bird'+game.rnd.between(1, 5));
                bird.anchor.set(0.5,0.5);
            }
        }
        else {
            console.log('not a tiny building');
            if(this.name == 'schoolHouse_v2')
            {
                this.owner = new Person(game, this.x + this.width/2, this.y + this.height-32, false, 30, false);
            }
            else
            {
                this.owner = new Person(game, this.x + this.width/2, this.y + this.height-32, false, 30);
            }
        }
        this.population -= 1;
    }
}

function turn_grey(building){
    console.log("turning grey");
    var greyBuildingName = building.name;
    console.log(greyBuildingName);
    var grayBuilding = game.add.sprite(building.x + 150,building.y,'greybuildings', greyBuildingName);
    grayBuilding.anchor.set(0.5, 0);
    building.population = 0;
    building.kill();
}