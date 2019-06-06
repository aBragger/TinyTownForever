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










var groundHeight = 144;
var gameWidth = 800;
var gameHeight = 500;
var worldWidth = gameWidth + 6400;

var clouds;
var menuClouds;
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
        game.load.image('ground', 'assets/img/groundtile.png');
        game.load.image('black_back', 'assets/img/black_background.png');

        //game.load.image('houseButton', 'assets/img/house_5.png');
        game.load.image('leftArrow', 'assets/img/buttons/button_left.png');
        game.load.image('rightArrow', 'assets/img/buttons/button_right.png');
        game.load.image('lava', 'assets/img/lava.png');
        game.load.image('instructions', 'assets/img/instructions_page.png');
        game.load.image('credits', 'assets/img/credits_page.png');

        //building assets
        game.load.atlas('buildingButtons', 'assets/img/buildingsheet.png', 'assets/img/buildingsheet.json');
        game.load.atlas('buttons', 'assets/img/buttonsheet.png', 'assets/img/buttonsheet.json')
        //game.load.image('house_5', 'assets/img/house_5.png');

        //people assets
        game.load.atlas('people', 'assets/img/peoplesheet.png', 'assets/img/peoplesheet.json');
        game.load.atlas('tiny_people', 'assets/img/tinypeoplesheet.png', 'assets/img/tinypeoplesheet.json');
        game.load.image('stripeguy', 'assets/img/people/P6_bigger.png');

        //game.load.atlas('fire', 'assets/img/firesheet.png', 'assets/img/firesheet.json');

        //testing panic assets
        game.load.atlas('panic_people', 'assets/img/panicsheet.png', 'assets/img/panicsheet.json');

        game.load.atlas('greybuildings', 'assets/img/greybuildingsheet.png', 'assets/img/greybuildingsheet.json');


        //ui assets
        game.load.image('aSign', 'assets/img/aSign.png');
        game.load.image('dSign', 'assets/img/dSign.png');

        //main menu assets
        game.load.image('startButton', 'assets/img/buttons/start_button.png');//W:240H:80 
        game.load.image('controlsButton', 'assets/img/buttons/instructions_button.png');//W:192H:64
        game.load.image('creditsButton', 'assets/img/buttons/credits_button.png')//W:192H:64

        game.load.image('menu_background', 'assets/img/mainMenuBackground.png');
        game.load.image('clouds', 'assets/img/clouds/clouds.png');
        game.load.image('menuClouds', 'assets/img/menu_clouds.png');

        game.load.audio('main_music', ['assets/audio/GameplayMusic.wav']);
        this.placementSound = game.load.audio('placement_sound', ['assets/audio/Dropitem.wav']);
        game.world.setBounds(0,0,gameWidth,gameHeight*2);

    },
    create: function() {
        buttonLocationX = gameWidth/2 - 120;
        console.log('MainMenu: create');

        //sky = game.add.sprite(0, 0, 'sky');
        //ground = game.add.sprite(0, gameHeight-144, 'ground');
        //ground.scale.set(100,4);

        menuClouds = game.add.tileSprite(0, 0, worldWidth, 200, 'menuClouds');
        game.add.sprite(0,0,'menu_background');


        buildings = game.add.physicsGroup();
        people = game.add.physicsGroup();
        mill = new Building(game, 'buildingButtons', 'tinywindmill1', 366, 10);

        startButton = game.add.sprite(buttonLocationX,410,'startButton');
        instructionsButton = game.add.sprite(70,420,'controlsButton');
        creditsButton = game.add.sprite(540,420,'creditsButton');
        startButton.inputEnabled = true;
        startButton.events.onInputDown.add(startGame);
        instructionsButton.inputEnabled = true;
        instructionsButton.events.onInputDown.add(instructions);
        creditsButton.inputEnabled = true;
        creditsButton.events.onInputDown.add(credits);

        //MenuText = game.add.text(16, 16, 'Welcome to game\nPress spacebar to start\nonly have fun with arrow keys', { fontSize: '16px', fill: '#fff' });
    },
    update: function() {
        //Title screen logic
        menuClouds.autoScroll(-7,0);
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

var people_living = [];
var buildings_built = [];

var building_list = ['cafe', 'cakeHouse', 'new_house1', 'windmill1', 'schoolHouse_v2', 'shop1', 'tree1', 'tree2', 'tree4', 'venue', 'venue'];

var GamePlay = function(game){};
GamePlay.prototype = {
    preload: function() {
        console.log('GamePlay: preload');

        //game Variables
        groundHeight = 144;
        houseHeight = 128;
        scrollSpeed = 10;
        lavaHeight = 700;
        timeUntilLava = 6000;
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
        //ground
        ground = game.add.group();
        var grounds = ground.create(0, gameHeight-groundHeight, 'ground');
        //ground.scale.set(100,4);
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
        //selectionButton.events.onInputDown.add(houseButtonPressed, selectionButton);
        rightArrow.events.onInputDown.add(arrowButtonPressed, {"dir": 1});
        leftArrow.events.onInputDown.add(arrowButtonPressed, {"dir": -1});
        buttons.create(10,(gameHeight-groundHeight)/2-16, 'aSign');
        buttons.create(gameWidth-74,(gameHeight-groundHeight)/2-16, 'dSign');
        //test.x = game.camera.x + gameWidth/2; // for some reason this needs to be set in order to change the x later.

        


        //CLOUDS
        clouds = game.add.tileSprite(0, 0, worldWidth, 200, 'clouds');
        //game.add.sprite(0, 0, 'clouds');


        //people
        buildings = game.add.physicsGroup();
        people = game.add.physicsGroup();

        //fire
        fires = game.add.physicsGroup();

        //buttons.enableBody = true;
        
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


        game.world.bringToTop(buttons);


    },
    update: function() {
        game.world.bringToTop(people);
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
    var frame = building_list[select];
    var num_peo = 1;
    if (frame == 'schoolHouse_v2') num_peo = 3;
    newBuilding = new Building(game, 'buildingButtons', frame, game.input.mousePointer.x + game.camera.x, num_peo);

}

var num_of_buttons = 10;
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
    game.load.atlas('buildings_grey', 'assets/img/buildingsheet_grey.png', 'assets/img/buildingsheet.json');
    /*game.world.forEach(function(people){
        panic(people);
    });*/

    //eventually make the fire rain down
    /*
    for(var i = 0; i < 100; i++){
        new Fire(game, 'fire'); 
    }
    */

    //correct tweens
    var tween = game.add.tween(transition).to( { alpha: 1 }, 20000, "Linear", true);
    tween.yoyo(true, 10);

    
    /*lava.body.velocity.x = -lavaSpeed;
    game.camera.follow(lava, null, cameraFollowLavaSpeed); // make the cmera follow the lava*/
    //game.input.enabled = false; // prevent all player input
    for (var i = 0; i < people_living.length; i++) {
        panic(people_living[i]);
    }

    for (var i = 0; i < buildings_built.length; i++){
        turn_grey(buildings_built[i]);
    }

}

function startGame(){
    game.state.start('GamePlay');
}

function instructions(){
    console.log('instructions Button Pressed');
    //this takes the game to the instructions state
    //we could also just make it pop up a menu
    //game.state.start('Instructions');
    instructionsButton.inputEnabled = false;
    creditsButton.inputEnabled = false;
    instructions = game.add.sprite(100,100,'instructions');
    instructions.inputEnabled = true;
    instructions.events.onInputDown.add(remove_button, {param1: instructions});

    //game.camera.y += 300;
}

function remove_button(){
    this.param1.kill();
    instructionsButton.inputEnabled = true;
    creditsButton.inputEnabled = true;
}

function credits(){
    console.log('credits button pressed');
    credits = game.add.sprite(100,100,'credits');
    credits.inputEnabled = true;
    instructionsButton.inputEnabled = false;
    creditsButton.inputEnabled = false;
    credits.events.onInputDown.add(remove_button, {param1: credits});
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


