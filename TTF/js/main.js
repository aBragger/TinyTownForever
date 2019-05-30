/*
TEAM NUMBER:    45
TEAM NAME:      TINY TOWN: FOREVER!
MEMBERS:        AUSTIN BRAGGER, SHUN XU, MARGARET PATRICK, JESSE VILLA

GAME IS A PROTOTYPE

FUNCTIONALITY CURRENTLY IN THE GAME

'A' AND 'D' TO SCROLL THE CAMERA

CLICK TO PLACE BUILDINGS

After a while lava will appear and destroy everything you love
then the game restarts.




TODO: 
1 MAKE THE PEOPLE SPAWN IN AN ORDER!
Make ground art asset
make clouds
make buildings spawn in correct spot.
TODO:
*/











var gameWidth = 800;
var gameHeight = 500;
var worldWidth = gameWidth + 3200;
//var game = new Phaser.Game(windowX, windowY, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO);
var MainMenu = function(game){};
MainMenu.prototype = {
    init: function() {
    },
    preload: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        console.log('mainMenu: preload');
        game.load.image('sky', 'assets/img/sky.png');
        game.load.image('ground', 'assets/img/ground.png');
        game.load.image('black_back', 'assets/img/black_background.png');
        //game.load.image('houseButton', 'assets/img/house_5.png');
        game.load.image('leftArrow', 'assets/img/leftarrow.png');
        game.load.image('rightArrow', 'assets/img/rightarrow.png');
        game.load.image('lava', 'assets/img/lava.png');

        //building assets
        game.load.atlas('buildingButtons', 'assets/img/buildingsheet.png', 'assets/img/buildingsheet.json');
        game.load.atlas('buttons', 'assets/img/buttonsheet.png', 'assets/img/buttonsheet.json')
        //game.load.image('house_5', 'assets/img/house_5.png');

        //people assets
        game.load.atlas('people', 'assets/img/peoplesheet.png', 'assets/img/peoplesheet.json');
        game.load.image('stripeguy', 'assets/img/people/P6_bigger.png');

        game.load.atlas('fire', 'assets/img/firesheet.png', 'assets/img/firesheet.json');

        //testing panic assets
        game.load.atlas('panic_people', 'assets/img/panicsheet.png', 'assets/img/panicsheet.json');




        //ui assets
        game.load.image('aSign', 'assets/img/aSign.png');
        game.load.image('dSign', 'assets/img/dSign.png');

        //main menu assets
        game.load.image('startButton', 'assets/img/buttons/start_button.png');
        game.load.image('controlsButton', 'assets/img/buttons/controls_button.png');
        game.load.image('creditsButton', 'assets/img/buttons/credits_button.png')

        game.load.audio('main_music', ['assets/audio/NormalMainMenu.wav']);
        this.placementSound = game.load.audio('placement_sound', ['assets/audio/Dropitem.wav']);

    },
    create: function() {
        buttonLocationX = gameWidth/2 - 64;
        console.log('MainMenu: create');

        sky = game.add.sprite(0, 0, 'sky');
        ground = game.add.sprite(0, gameHeight-144, 'ground');
        ground.scale.set(100,4);
        startButton = game.add.sprite(buttonLocationX,0,'startButton');
        controlsButton = game.add.sprite(buttonLocationX,32,'controlsButton');
        quitButton = game.add.sprite(buttonLocationX,64,'creditsButton');
        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(startGame);

        //MenuText = game.add.text(16, 16, 'Welcome to game\nPress spacebar to start\nonly have fun with arrow keys', { fontSize: '16px', fill: '#fff' });
    },
    update: function() {
        //Title screen logic
    }
}

var buttons;
var buildings;
var people;
var select = 0;
var currentButton;
var lava;
var timeUntilLava;
var lavaSpeed;
var cameraFollowLavaSpeed;

var timer;

var building_list = ['house1', 'Cafe', 'windmill1', 'House', 'cakeHouse', 'apartment'];

var GamePlay = function(game){};
GamePlay.prototype = {
    preload: function() {
        console.log('GamePlay: preload');

        //game Variables
        groundHeight = 144;
        houseHeight = 128;
        scrollSpeed = 10;
        lavaHeight = 700;
        timeUntilLava = 600;
        lavaSpeed = 100;
        cameraFollowLavaSpeed = .005;
    },
    create: function() {
        currentButton = 0;


        game.physics.startSystem(Phaser.Physics.ARCADE);
        console.log('GamePlay: create');
        sky = game.add.sprite(0, 0, 'sky');
        sky.fixedToCamera = true;
        sky.inputEnabled = true;
        sky.events.onInputDown.add(skyPressed);

        transition = game.add.sprite(0,0, 'black_back');
        transition.fixedToCamera = true;
        transition.alpha = 0;
        //test = game.add.sprite(0,gameHeight-groundHeight-60, 'panic_people', 'Panic1_left1');
        //test.animations.add('idle', ['Panic1_left1', 'Panic1_left2', 'Panic1_left3', 'Panic1_left4', 'Panic1_left5', 'Panic1_left6', 'Panic1_left7', 'Panic1_left8', 'Panic1_right1', 'Panic1_right2', 'Panic1_right3', 'Panic1_right4', 'Panic1_right5', 'Panic1_right6', 'Panic1_right7', 'Panic1_right8',]);
        //test.play('idle', 10, true);
        //ground
        grounds = game.add.group();
        ground = grounds.create(0, gameHeight-groundHeight, 'ground');
        ground.scale.set(100,4);
        ground.inputEnabled = true;

        //buttons/ui
        buttons = game.add.group();
        selectionButton = buttons.create(gameWidth/2 - 32,gameHeight-groundHeight/2, 'buttons', 'person_button');
        leftArrow = buttons.create(gameWidth/2 -32 - 32, gameHeight-groundHeight/2, 'leftArrow');
        rightArrow = buttons.create(gameWidth/2 +32, gameHeight-groundHeight/2, 'rightArrow');
        buttons.fixedToCamera = true;
        selectionButton.inputEnabled = true;
        selectionButton.input.useHandCursor = true;
        leftArrow.inputEnabled = true;
        leftArrow.input.useHandCursor = true;
        rightArrow.inputEnabled = true;
        rightArrow.input.useHandCursor = true;
        //selectionButton.events.onInputDown.add(houseButtonPressed, selectionButton);
        rightArrow.events.onInputDown.add(arrowButtonPressed, {"dir": 1});
        leftArrow.events.onInputDown.add(arrowButtonPressed, {"dir": -1});

        buttons.create(10,(gameHeight-groundHeight)/2-16, 'aSign');
        buttons.create(gameWidth-10-32,(gameHeight-groundHeight)/2-16, 'dSign');
        //test.x = game.camera.x + gameWidth/2; // for some reason this needs to be set in order to change the x later.

        //people
        people = game.add.physicsGroup();

        //fire
        fires = game.add.physicsGroup();

        //buttons.enableBody = true;
        buildings = game.add.physicsGroup();
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

                //create music
        music = game.add.audio('main_music',1,true);

        music.volume = 2;
        music.play();

    },
    update: function() {
        game.world.bringToTop(people);
        game.world.bringToTop(transition);
        //test.frame = currentButton;
        if(game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            game.camera.x -= scrollSpeed;

        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            game.camera.x += scrollSpeed;
        }
        //overlap of lava and building
        game.physics.arcade.overlap(lava, buildings, lavaHitBuilding, null, this);
        game.physics.arcade.overlap(lava, people, lavaHitPeople, null, this);

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

/*function houseButtonPressed(test){
    console.log("building select: " + select);
}*/

function skyPressed(){
    console.log("skyPressed at: X: " + game.input.mousePointer.x);
    var animation = false;
    if (building_list[select] == 'windmill1'){ animation = true;}
    newBuilding = new Building(game, 'buildingButtons', building_list[select], animation);
}

var num_of_buttons = 6;
function arrowButtonPressed(){
    console.log("arrow Button Pressed: " + this.dir);
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

function apocalypseNow(){
    console.log("apocalypse");
    timer.stop();
    for(var i = 0; i < 1000; i++){
        new Fire(game, 'fire'); 
    }

    //correct tweens
    //var tween = game.add.tween(transition).to( { alpha: 1 }, 2000, "Linear", true);
    //tween.yoyo(true, 10);

    
    /*lava.body.velocity.x = -lavaSpeed;
    game.camera.follow(lava, null, cameraFollowLavaSpeed); // make the cmera follow the lava
    game.input.enabled = false; // prevent all player input*/

    //people.forEach();

}

function startGame(){
    game.state.start('GamePlay');
}

function tester(){
    console.log("test fucntion");
}
game.state.add('MainMenu', MainMenu);
game.state.add('GamePlay', GamePlay);
game.state.add('GameOver', GameOver);
game.state.start('MainMenu');


