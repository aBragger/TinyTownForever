

var person1 = 'Person1';
var person1_right = ['Person1_right1', 'Person1_right2', 'Person1_right3', 'Person1_right4', 'Person1_right5', 'Person1_right6'];
var person1_left = ['Person1_left1', 'Person1_left2', 'Person1_left3', 'Person1_left4', 'Person1_left5', 'Person1_left6'];
var grey_guy = [person1, person1_right, person1_left];

var person2 = 'Person2';
var person2_right = ['Person2_right1', 'Person2_right2', 'Person2_right3', 'Person2_right4', 'Person2_right5', 'Person2_right6'];
var person2_left = ['Person2_left1', 'Person2_left2', 'Person2_left3', 'Person2_left4', 'Person2_left5', 'Person2_left6'];
var chin_guy = [person2, person2_right, person2_left];

var person3 = 'Person1'; //todo: there is no forward frame for this gal, AND some of the ones below
var person3_right = ['Person3_right1', 'Person3_right2', 'Person3_right3', 'Person3_right4', 'Person3_right5', 'Person3_right6'];
var person3_left = ['Person3_left1', 'Person3_left2', 'Person3_left3', 'Person3_left4', 'Person3_left5', 'Person3_left6'];
var marge = [person3, person3_right, person3_left];

var person4 = 'Person1';
var person4_right = ['Person4_right1', 'Person4_right2', 'Person4_right3', 'Person4_right4', 'Person4_right5', 'Person4_right6'];
var person4_left = ['Person4_left1', 'Person4_left2', 'Person4_left3', 'Person4_left4', 'Person4_left5', 'Person4_left6'];
var yellow_dress = [person4, person4_right, person4_left];

var person5 = 'Person1';
var person5_right = ['Person5_right1', 'Person5_right2', 'Person5_right3', 'Person5_right4', 'Person5_right5', 'Person5_right6'];
var person5_left = ['Person5_left1', 'Person5_left2', 'Person5_left3', 'Person5_left4', 'Person5_left5', 'Person5_left6'];
var boy = [person5, person5_right, person5_left];

var person6 = 'Person6';
var person6_right = ['Person6_right1', 'Person6_right2', 'Person6_right3', 'Person6_right4', 'Person6_right5', 'Person6_right6'];
var person6_left = ['Person6_left1', 'Person6_left2', 'Person6_left3', 'Person6_left4', 'Person6_left5', 'Person6_left6'];
var linnell = [person6, person6_right, person6_left];

var person7 = 'Person7';
var person7_right = ['Person7_right1', 'Person7_right2', 'Person7_right3', 'Person7_right4', 'Person7_right5', 'Person7_right6'];
var person7_left = ['Person7_left1', 'Person7_left2', 'Person7_left3', 'Person7_left4', 'Person7_left5', 'Person7_left6'];
var bobbey_fresh = [person7, person7_right, person7_left];

var person8 = 'Person8';
var person8_right = ['Person8_right1', 'Person8_right2', 'Person8_right3', 'Person8_right4', 'Person8_right5', 'Person8_right6'];
var person8_left = ['Person8_left1', 'Person8_left2', 'Person8_left3', 'Person8_left4', 'Person8_left5', 'Person8_left6'];
var linnell_boy = [person8, person8_right, person8_left];

var person9 = 'Person9';
var person9_right = ['Person9_right1', 'Person9_right2', 'Person9_right3', 'Person9_right4', 'Person9_right5', 'Person9_right6'];
var person9_left = ['Person9_left1', 'Person9_left2', 'Person9_left3', 'Person9_left4', 'Person9_left5', 'Person9_left6'];
var girl = [person9, person9_right, person9_left];

var person10 = 'Person10';
var person10_right = ['Person10_right1', 'Person10_right2', 'Person10_right3', 'Person10_right4', 'Person10_right5', 'Person10_right6'];
var person10_left = ['Person10_left1', 'Person10_left2', 'Person10_left3', 'Person10_left4', 'Person10_left5', 'Person10_left6'];
var deb = [person10, person10_right, person10_left];

var person11 = 'Person11';
var person11_right = ['Person11_right1', 'Person11_right2', 'Person11_right3', 'Person11_right4', 'Person11_right5', 'Person11_right6'];
var person11_left = ['Person11_left1', 'Person11_left2', 'Person11_left3', 'Person11_left4', 'Person11_left5', 'Person11_left6'];
var chad = [person11, person11_right, person11_left];
/*
var dog = 'Person1';
var person1_right = ['Person1_right1', 'Person1_right2', 'Person1_right3', 'Person1_right4', 'Person1_right5', 'Person1_right6'];
var person1_left = ['Person1_left1', 'Person1_left2', 'Person1_left3', 'Person1_left4', 'Person1_left5', 'Person1_left6'];
var NAME = [person1, person1_right, person1_left];*/

var dog1 = 'Person1';
var dog1_right = ['dog1_right1', 'dog1_right2', 'dog1_right3', 'dog1_right4', 'dog1_right5', 'dog1_right6'];
var dog1_left = ['dog1_left1', 'dog1_left2', 'dog1_left3', 'dog1_left4', 'dog1_left5', 'dog1_left6'];
var dog= [dog1, dog1_right, dog1_left];
var numOfPeople = 12;



Person = function(game, xStart, yStart) {
	console.log(xStart);
	this.typeOfPerson;
	var personType = Math.floor(Math.random()*numOfPeople);
	switch (personType) {
		case 0:
			this.typeOfPerson = grey_guy;
			break;
		case 1:
			this.typeOfPerson = chin_guy;
			break;
		case 2:
			this.typeOfPerson = marge;
			break;
		case 3:
			this.typeOfPerson = yellow_dress;
			break;
		case 4:
			this.typeOfPerson = boy;
			break;
		case 5:
			this.typeOfPerson = linnell;
			break;
		case 6:
			this.typeOfPerson = bobbey_fresh;
			break;
 		case 7:
			this.typeOfPerson = linnell_boy;
			break;
 		case 8:
			this.typeOfPerson = girl;
			break;
 		case 9:
			this.typeOfPerson = deb;
			break;
 		case 10:
			this.typeOfPerson = chad;
			break;
  		case 11:
			this.typeOfPerson = dog;
			break;
 
	}


	Phaser.Sprite.call(this, game, xStart, yStart, 'people', this.typeOfPerson[0]);
	this.animations.add('right', this.typeOfPerson[1]);
	this.animations.add('left', this.typeOfPerson[2]);
	this.movement_dir = 0;
	people.add(this);
};

Person.prototype = Object.create(Phaser.Sprite.prototype);
Person.prototype.constructor = Person;
Person.prototype.update = function(){
	this.body.velocity.x += game.rnd.integerInRange(-.5,.5);
	if(this.body.velocity.x > 0){this.animations.play('right', 3, true);}
	if(this.body.velocity.x < 0){this.animations.play('left', 3, true);}
}

