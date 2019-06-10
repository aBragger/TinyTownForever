/*
TEAM NUMBER:    45
TEAM NAME:      TINY TOWN: FOREVER!
MEMBERS:        AUSTIN BRAGGER, SHUN XU, MARGARET PATRICK, JESSE VILLA

Final Game

FUNCTIONALITY CURRENTLY IN THE GAME

'A' AND 'D' TO SCROLL THE CAMERA

CLICK TO PLACE BUILDINGS

After a while lava will appear and destroy everything you love
then the game restarts.

*/

var groundHeight = 144;
var gameWidth = 800;
var gameHeight = 500;
var worldWidth = gameWidth + 6400;

var clouds;
var menuClouds;
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO);
var MainMenu = function(game){};
MainMenu.prototype = {
    init: function() {
    },
    preload: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        console.log('mainMenu: preload');
        game.load.image('sky', 'assets/img/sky.png');
        game.load.image('ground', 'assets/img/groundtile.png');
        game.load.image('ground_grey', 'assets/img/groundtilegray.png');
        game.load.image('black_back', 'assets/img/black_background.png');
        game.load.image('sky_apocalypse', 'assets/img/sky_apocalypse.png');

        //game.load.image('houseButton', 'assets/img/house_5.png');
        game.load.image('leftArrow', 'assets/img/buttons/button_left.png');
        game.load.image('rightArrow', 'assets/img/buttons/button_right.png');
        game.load.image('lava', 'assets/img/lava.png');
        game.load.image('instructions', 'assets/img/instructions_page.png');
        game.load.image('credits', 'assets/img/credits_page.png');

        //building assets
        game.load.atlas('buildingButtons', 'assets/img/buildingsheet.png', 'assets/img/buildingsheet.json');
        game.load.atlas('buttons', 'assets/img/buttonsheet.png', 'assets/img/buttonsheet.json');

        game.load.image('house1_black', 'assets/img/building/new_house1_black.png');
        game.load.image('shop2', 'assets/img/building/shop2.png');
        game.load.image('shop3', 'assets/img/building/shop3.png');
        //game.load.image('house_5', 'assets/img/house_5.png');

        //people assets
        game.load.atlas('people', 'assets/img/peoplesheet.png', 'assets/img/peoplesheet.json');
        game.load.atlas('tiny_people', 'assets/img/tinypeoplesheet.png', 'assets/img/tinypeoplesheet.json');
        game.load.image('stripeguy', 'assets/img/people/P6_bigger.png');

        game.load.atlas('fire', 'assets/img/firesheet.png', 'assets/img/firesheet.json');

        game.load.atlas('birds', 'assets/img/birds.png', 'assets/img/birds.json');

        //testing panic assets
        game.load.atlas('panic_people', 'assets/img/panicsheet.png', 'assets/img/panicsheet.json');

        game.load.atlas('greybuildings', 'assets/img/greybuildingsheet.png', 'assets/img/greybuildingsheet.json');
        game.load.atlas('greypeople', 'assets/img/greypeoplesheet.png', 'assets/img/peoplesheet.json');


        //ui assets
        game.load.image('aSign', 'assets/img/aSign.png');
        game.load.image('dSign', 'assets/img/dSign.png');

        //emoji assets
        game.load.image('emoji1','assets/img/emoji/emoji1.png');
        game.load.image('emoji2','assets/img/emoji/emoji2.png');
        game.load.image('emoji3','assets/img/emoji/emoji3.png');
        game.load.image('emoji4','assets/img/emoji/emoji4.png');
        game.load.image('emoji5','assets/img/emoji/emoji5.png');
        game.load.image('emoji6','assets/img/emoji/emoji6.png');
        game.load.image('emoji7','assets/img/emoji/emoji7.png');
        game.load.image('emoji8','assets/img/emoji/emoji8.png');
        //main menu assets
        game.load.image('startButton', 'assets/img/buttons/start_button.png');//W:240H:80 
        game.load.image('controlsButton', 'assets/img/buttons/instructions_button.png');//W:192H:64
        game.load.image('creditsButton', 'assets/img/buttons/credits_button.png')//W:192H:64

        game.load.image('replayButton', 'assets/img/buttons/button_replay.png');

        game.load.image('menu_background', 'assets/img/mainMenuBackground.png');
        game.load.image('clouds', 'assets/img/clouds/clouds.png');
        game.load.image('menuClouds', 'assets/img/menu_clouds.png');

        game.load.audio('main_music', ['assets/audio/GameplayMusic.wav']);
        game.load.audio('mainMenu_music', ['assets/audio/MainMenu_NoHousesPlaced.wav']);
        game.load.audio('selection_music', ['assets/audio/Selection.wav']);
        game.load.audio('apocalypse_music', ['assets/audio/DestroyingTownMusic.wav']);
    
        this.placementSound = game.load.audio('placement_sound', ['assets/audio/Dropitem.wav']);
        game.world.setBounds(0,0,gameWidth,gameHeight*2);

        //people voice
        game.load.audio('old1', ['assets/audio/PeopleVoices/Old1.wav']);
        game.load.audio('old2', ['assets/audio/PeopleVoices/Old2.wav']);
        game.load.audio('woman', ['assets/audio/PeopleVoices/Woman.m4a']);
        game.load.audio('woman1', ['assets/audio/PeopleVoices/Woman1.wav']);
        game.load.audio('woman2', ['assets/audio/PeopleVoices/Woman2.wav']);
        game.load.audio('man', ['assets/audio/PeopleVoices/Man.m4a']);
        game.load.audio('man1', ['assets/audio/PeopleVoices/Man1.wav']);
        game.load.audio('man2', ['assets/audio/PeopleVoices/Man2.wav']);
        game.load.audio('man3', ['assets/audio/PeopleVoices/Man3.wav']);
        //game.load.audio('clown', ['assets/audio/PeopleVoices/Clown.wav']);



    },
    create: function() {
        buttonLocationX = gameWidth/2 - 120;
        console.log('MainMenu: create');

        menuMusic = game.add.audio('mainMenu_music', 1, true);

        menuMusic.volume = 1;
        menuMusic.play();

        menuClouds = game.add.tileSprite(0, 0, worldWidth, 200, 'menuClouds');
        game.add.sprite(0,0,'menu_background');


        buildings = game.add.physicsGroup();
        people = game.add.physicsGroup();

        people.inputEnabled = false;

        mill = new Building(game, 'buildingButtons', 'tinywindmill1', game.world.width/2, 10, false);

        startButton = game.add.sprite(buttonLocationX,410,'startButton');
        instructionsButton = game.add.sprite(70,420,'controlsButton');
        creditsButton = game.add.sprite(540,420,'creditsButton');
        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(startGame);
        instructionsButton.inputEnabled = true;
        instructionsButton.events.onInputDown.add(instructions);
        creditsButton.inputEnabled = true;
        creditsButton.events.onInputDown.add(credits);

    },
    update: function() {
        //Title screen logic
        menuClouds.autoScroll(-7,0);
    }
}

var buttons;
var buildings;
var people;
var birds;
var select = 0;
var currentButton;
var lava;
var timeUntilLava;
var lavaSpeed;
var cameraFollowLavaSpeed;
var fadeInTime = 12000;
var endgameTime = 2000;

var apocalypse = false;
var grey = false;
var shakeIntensity = .0001;

var birdTimer;
var timeHop = 1000;

var timer;

var people_living = [];
var buildings_built = [];

var building_list = [['cafe'], ['cakeHouse'], ['new_house1', 'new_house1_black'], ['windmill1'], ['schoolHouse_v2'], ['shop1', 'shop2', 'shop3'], ['tree1'], ['tree2'], ['tree4'], ['venue']];

//var bird_list = ['bird1', 'bird2', 'bird3', 'bird4', 'bird5'];

var GamePlay = function(game){};
GamePlay.prototype = {
    preload: function() {
        console.log('GamePlay: preload');

        //game Variables
        groundHeight = 144;
        houseHeight = 128;
        scrollSpeed = 10;
        lavaHeight = 700;
        timeUntilLava = 30000;
        lavaSpeed = 100;
        cameraFollowLavaSpeed = .005;

        people_living = [];
        buildings_built = [];


    },
    create: function() {
        currentButton = 0;

        apocalypse = false;
		grey = false;
		shakeIntensity = .0001;
		select = 0;


        game.physics.startSystem(Phaser.Physics.ARCADE);
        console.log('GamePlay: create');
        sky = game.add.sprite(0, 0, 'sky');
        sky.anchor.set(0.5, 0.5);
        sky.fixedToCamera = true;
        sky.inputEnabled = true;
        sky.events.onInputDown.add(skyPressed);

        transition = game.add.sprite(0,0, 'black_back');
        transition.anchor.set(0.5, 0.5);
        transition.fixedToCamera = true;
        transition.alpha = 0;
        //ground
        ground = game.add.group();
        var grounds = ground.create(0, gameHeight-groundHeight, 'ground');

        ground.inputEnabled = true;
        
        for (i = 1; i <= 8; i++)
        {
            grounds = ground.create(i*800, gameHeight-groundHeight, 'ground');  
            i += 1;
        }

        //buttons/ui
        buttons = game.add.group();
        selectionButton = buttons.create(gameWidth/2 - 32,gameHeight-groundHeight/2, 'buttons', 0);
        leftArrow = buttons.create(gameWidth/2 -32 - 64, gameHeight-groundHeight/2, 'leftArrow');
        rightArrow = buttons.create(gameWidth/2 + 32, gameHeight-groundHeight/2, 'rightArrow');
        buttons.fixedToCamera = true;
        selectionButton.inputEnabled = true;
        selectionButton.input.useHandCursor = true;
        leftArrow.inputEnabled = true;
        leftArrow.input.useHandCursor = true;
        rightArrow.inputEnabled = true;
        rightArrow.input.useHandCursor = true;
        rightArrow.events.onInputDown.add(arrowButtonPressed, {"dir": 1});
        leftArrow.events.onInputDown.add(arrowButtonPressed, {"dir": -1});
        buttons.create(10,(gameHeight-groundHeight)/2-16, 'aSign');
        buttons.create(gameWidth-74,(gameHeight-groundHeight)/2-16, 'dSign');
        //test.x = game.camera.x + gameWidth/2; // for some reason this needs to be set in order to change the x later.

        

        //BIRDS
		birds = game.add.group();
		birds.enableBody = true;


		console.log('bird'+game.rnd.between(1, 5));
		for(i = 0; i < 20; i++)
        {
        	let num = game.rnd.between(1,5);
 			let bird = birds.create(game.rnd.between(0, worldWidth),game.rnd.between(gameHeight - 100, gameHeight - 175), 'birds', 'bird'+num);
    		bird.anchor.set(0.5,0.5);

    		bird.animations.add('fly', Phaser.Animation.generateFrameNames('bird'+num+'_left', 1, 6, '', 1), 6, true);
        }
		


        //CLOUDS
        clouds = game.add.tileSprite(0, 0, worldWidth, 200, 'clouds');

        //people
        buildings = game.add.physicsGroup();
        people = game.add.physicsGroup();

        //add emoji
        people.inputEnableChildren = true;
        people.onChildInputDown.add(face,this);

        //fire
        fires = game.add.physicsGroup();

        //set Bounds
        game.world.setBounds(0,0,worldWidth,gameHeight);

        //  Create our Timer that destroys itself after running.
        timer = game.time.create(true);

        //  Set a TimerEvent to occur;
        timer.loop(timeUntilLava, apocalypseNow, this);

        //  Start the timer running
        timer.start();

        //create lava
        lava = game.add.sprite(worldWidth, 0, 'lava');
        game.physics.arcade.enable(lava);


        //stop main menu music create play music
        game.sound.stopAll();
        music = game.add.audio('main_music',1,true);


        //music.volume = 2;
        //music.play();

        //bring asign and dsign to top
        game.world.bringToTop(buttons);


    },
    update: function() {
        game.world.bringToTop(people);
        game.world.bringToTop(buttons);
        game.world.bringToTop(transition);

        //test.frame = currentButton;

        clouds.autoScroll(-5,0);

        if(game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            game.camera.x -= scrollSpeed;

            if(game.camera.x != 0){
            clouds.autoScroll(-300,0);
            }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            game.camera.x += scrollSpeed;

            if(game.camera.x != 6400){
            clouds.autoScroll(300,0);
            }

        }


        //overlap of lava and building
        //game.physics.arcade.overlap(lava, buildings, lavaHitBuilding, null, this);
        //game.physics.arcade.overlap(lava, people, lavaHitPeople, null, this);

        if(lava.body.x < -100){
            lava.destroy();
            lava = game.add.sprite(worldWidth, gameHeight-groundHeight-lavaHeight, 'lava');
            game.physics.arcade.enable(lava);
            game.input.enabled = true;
            timer = game.time.create(true);

            //  Set a TimerEvent to occur;
            timer.loop(timeUntilLava, apocalypseNow, this);

            //  Start the timer running
            timer.start();
            console.log('lava gone');

            game.camera.unfollow();
        }

        if(apocalypse == true && grey == false){
            shake(shakeIntensity);
        }

        if(apocalypse == true && grey == true && shakeIntensity > 0)
        {   
        	shiver(shakeIntensity - .0003);
        }

		//birds.forEach(function(bird)
		//{
		//	bird.body.velocity.x = game.rnd.between(-10, 10); //set speed
		//	bird.anchor.set(0.5,0.5);
        //	bird.body.velocity.x += game.rnd.integerInRange(-.5,.5);

        //	if(bird.body.velocity > 0)
        //	{
        //		bird.body.scale.x = -1;
        //	}
		//}, this);
    }
}

var GameOver = function(game){};
GameOver.prototype = {
    preload: function() {
        console.log('GameOver: preload');
    },
    create: function() {
        console.log('GameOver: create');
        MenuText = game.add.text();

    },
    update: function() {
            if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR)) {
            game.state.start('GamePlay');
        }
    }
}

function skyPressed(){
    console.log("skyPressed at: X: " + game.input.mousePointer.x);
    var type_list = building_list[select];
    var frame = type_list[game.rnd.between(0, type_list.length - 1)];
    var num_peo = 1;
    if (frame == 'schoolHouse_v2') num_peo = 5;
    newBuilding = new Building(game, 'buildingButtons', frame, game.input.mousePointer.x + game.camera.x, num_peo);

}

var num_of_buttons = 10;
function arrowButtonPressed(){
    console.log("arrow Button Pressed: " + this.dir);
    arrowbuttonMusic = game.add.audio('selection_music', 1, false);
    arrowbuttonMusic.volume = 3;
    arrowbuttonMusic.play();
    currentButton += this.dir;
    console.log(currentButton);
    if(currentButton >= num_of_buttons) currentButton = 0;
    if(currentButton < 0) currentButton = num_of_buttons-1;
    selectionButton.frame = currentButton;
    select = selectionButton.frame;

}

function lavaHitBuilding(lava, building){
    console.log("lavaHitBuilding");
    //building.kill();
}

function lavaHitPeople(lava, person){
    console.log("lavaHitPeople")
    //person.kill();
    
}
var apocalypseMusic
var timer2;
function apocalypseNow(){
    console.log("apocalypse");
    timer.stop();
    menuMusic.stop();

    apocalypseMusic = game.add.audio('apocalypse_music', 1, false);
    apocalypseMusic.volume = 2;
    apocalypseMusic.play();
    


    game.load.atlas('buildings_grey', 'assets/img/buildingsheet_grey.png', 'assets/img/buildingsheet.json');
    for(var i = 0; i < 100; i++){
        new Fire(game, 'fire');
    }
    /*game.world.forEach(function(people){
        panic(people);
    });*/

    //correct tweens
    var tween = game.add.tween(transition).to( { alpha: 1 }, fadeInTime, "Linear", true);
    tween.yoyo(true, 100);


    timer2 = game.time.create(true);

    timer2.loop(fadeInTime, DOOM, this);

    timer2.start();
    sky.inputEnabled = false;
    /*lava.body.velocity.x = -lavaSpeed;
    game.camera.follow(lava, null, cameraFollowLavaSpeed); // make the cmera follow the lava*/
    //game.input.enabled = false; // prevent all player input
    for (var i = 0; i < people_living.length; i++) {
        panic(people_living[i]);
    }

    //birds
    birds.forEach(function(bird)
	{
		bird.body.velocity.y = game.rnd.between (-300, -400);
		bird.body.velocity.x = game.rnd.between (-600, -200);
		bird.animations.play('fly');
	}, this);

    apocalypse = true;
}

function shake(n){
    game.camera.shake(n, 50);

    n += 0.0001;
    shakeIntensity = n;
    return(shakeIntensity);
}

function shiver(n)
{
	game.camera.shake(n, 50);

	n -= 0.0001;
	shakeIntensity = n;
	return (shakeIntensity);
}

var timer3;
function DOOM(){
        timer2.stop();
        for (var i = 0; i < buildings_built.length; i++){
        turn_grey(buildings_built[i]);
        }
        for(var i = 0; i < people_living.length; i++){
            turnPersonGrey(people_living[i]);
        }

        sky.destroy();
        sky = game.add.tileSprite(0, 0, worldWidth, gameHeight, 'sky_apocalypse');

        game.world.sendToBack(sky);

        clouds.tint = 0xde874e;
        for (i = 0; i <= 8; i++)
        {
            grounds = ground.create(i*800, gameHeight-groundHeight, 'ground_grey');  
            i += 1;
        }


        grey = true;
        console.log(grey);

        timer3 = game.time.create(true);

        timer3.loop(endgameTime, endgame, this);

        timer3.start();


        return(grey);
}

function endgame(){
    timer3.stop();
    console.log("endgame");
    var replay = game.add.sprite(game.camera.width/2, game.camera.y + 50, 'replayButton');
    replay.anchor.set(0.5, 0);
    replay.inputEnabled = true;
    replay.events.onInputDown.add(startGame);
    replay.fixedToCamera = true;
}
function startGame(){

    startMusic = game.add.audio('selection_music', 1, false);
    startMusic.volume = 3;
    startMusic.play();

    game.state.start('GamePlay');
}

function instructions(){
    console.log('instructions Button Pressed');

    instructionsButton.inputEnabled = false;
    creditsButton.inputEnabled = false;

    instructionMusic = game.add.audio('selection_music', 1, false);
    instructionMusic.volume = 3;
    instructionMusic.play();

    instructions = game.add.sprite(248,78,'instructions');
    instructions.inputEnabled = true;
    instructions.events.onInputDown.add(remove_button, {param1: instructions});

    //game.camera.y += 300;
}

function remove_button(){
    this.param1.kill();

    removeMusic = game.add.audio('selection_music', 1, false);
    removeMusic.volume = 3;
    removeMusic.play();

    instructionsButton.inputEnabled = true;
    creditsButton.inputEnabled = true;
}

function credits(){
    console.log('credits button pressed');

    creditsMusic = game.add.audio('selection_music', 1, false);
    creditsMusic.volume = 3;
    creditsMusic.play();

    credits = game.add.sprite(248,78,'credits');
    credits.inputEnabled = true;
    instructionsButton.inputEnabled = false;
    creditsButton.inputEnabled = false;
    credits.events.onInputDown.add(remove_button, {param1: credits});
}

function face(sprite){
    //add voice to different people

    if(sprite.typeOfPerson[5] == 7){
        old1Music = game.add.audio('old1', 1, false);
        old1Music.volume = 7;
        old1Music.play();
    }

    if(sprite.typeOfPerson[5] == 17){
        old2Music = game.add.audio('old2', 1, false);
        old2Music.volume = 7;
        old2Music.play();
    }
    if(sprite.typeOfPerson[5] == 10){
        womanMusic = game.add.audio('woman', 1, false);
        womanMusic.volume = 7;
        womanMusic.play();
    }
    if((sprite.typeOfPerson[5] == 15) || (sprite.typeOfPerson[5] == 4)){
        woman1Music = game.add.audio('woman1', 1, false);
        woman1Music.volume = 7;
        woman1Music.play();
    }
    if((sprite.typeOfPerson[5] == 16)||(sprite.typeOfPerson[5] == 13)){
        woman2Music = game.add.audio('woman2', 1, false);
        woman2Music.volume = 7;
        woman2Music.play();
    }
    if(sprite.typeOfPerson[5] == 1){
        manMusic = game.add.audio('man', 1, false);
        manMusic.volume = 7;
        manMusic.play();
    }
    if((sprite.typeOfPerson[5] == 2)|| (sprite.typeOfPerson[5] == 3)){
        man1Music = game.add.audio('man1', 1, false);
        man1Music.volume = 7;
        man1Music.play();
    }
    if((sprite.typeOfPerson[5] == 6) ||(sprite.typeOfPerson[5] == 14)){
        man2Music = game.add.audio('man2', 1, false);
        man2Music.volume = 7;
        man2Music.play();
    }
    if((sprite.typeOfPerson[5] == 11) ||(sprite.typeOfPerson[5] == 20)){
        man3Music = game.add.audio('man3', 1, false);
        man3Music.volume = 7;
        man3Music.play();
    }

    // if(sprite.clown == 12){
    //     clownMusic = game.add.audio('clown', 1, false);
    //     clownMusic.volume = 7;
    //     clownMusic.play();
    // }


    //make the clown juggle
    if(sprite.clown){

        console.log("this is a clown.");

        // clownMusic = game.add.audio('clown', 1, false);
        // clownMusic.volume = 7;
        // clownMusic.play();

        sprite.animations.play('right', 3, true);
        game.time.events.add(5000,function(sprite){
            sprite.animations.stop();
            sprite.frameName = 'Person12';
        }, this, sprite);
    }
    else{
        //make a face for other people
        console.log('make a face');
        var faceselect, numberselect;
        numberselect = game.rnd.between(1,8);
        faceselect = 'emoji' + numberselect;
        emoji = sprite.addChild(game.add.sprite(1, 1,faceselect));
        emoji.fixedToCamera = false;

        game.time.events.add(500,function(){emoji.kill();}, this);
    }

}

var Instructions = function(game){};
Instructions.prototype = {
    init: function() {
    },
    preload: function() {
    },
    create: function() {
    },
    update: function() {
    }
}

var Credits = function(game){};
Credits.prototype = {
    init: function() {
    },
    preload: function() {
    },
    create: function() {
    },
    update: function() {
    }
}

game.state.add('MainMenu', MainMenu);
game.state.add('GamePlay', GamePlay);
game.state.add('GameOver', GameOver);
game.state.add('Instructions', Instructions);
game.state.add('Credits', Credits);
game.state.start('MainMenu');


