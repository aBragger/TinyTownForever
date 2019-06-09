var idList = [];
var idIndex = 0;
var last_person_index = 20;
var childList = [18 - 1, 19 - 1, 9, 8, 5];
var childIndex = 0;
var person_list = ["INVALID PERSON"];
for(var i = 1; i <= last_person_index; i++){

	var person = 'Person'+i;
	var person_right = ['Person'+i+'_right1', 'Person'+i+'_right2', 'Person'+i+'_right3', 'Person'+i+'_right4', 'Person'+i+'_right5', 'Person'+i+'_right6'];
	var person_left = ['Person'+i+'_left1', 'Person'+i+'_left2', 'Person'+i+'_left3', 'Person'+i+'_left4', 'Person'+i+'_left5', 'Person'+i+'_left6'];
	var person_right_panic = ['Panic'+i+'_right1', 'Panic'+i+'_right2','Panic'+i+'_right3','Panic'+i+'_right4','Panic'+i+'_right5','Panic'+i+'_right6','Panic'+i+'_right7','Panic'+i+'_right8'];
	var person_left_panic = ['Panic'+i+'_left1', 'Panic'+i+'_left2','Panic'+i+'_left3','Panic'+i+'_left4','Panic'+i+'_left5','Panic'+i+'_left6','Panic'+i+'_left7','Panic'+i+'_left8'];
	var person_index = i;
	person_list.push([person, person_right, person_left, person_right_panic, person_left_panic, person_index]);
	idList.push(i>12?i-1:i);
}

//tiny people
var tiny_person_list = [];
var last_tiny_person_index = 6;
var tinyperson1 = 'tinyPerson3_left1';
var tinyperson1_right = ['tinyPerson3_right1', 'tinyPerson3_right2', 'tinyPerson3_right3', 'tinyPerson3_right4', 'tinyPerson3_right5', 'tinyPerson3_right6'];
var tinyperson1_left = ['tinyPerson3_left1', 'tinyPerson3_left2', 'tinyPerson3_left3', 'tinyPerson3_left4', 'tinyPerson3_left5', 'tinyPerson3_left6'];
var tinyperson1_full = [tinyperson1, tinyperson1_right, tinyperson1_left];
tiny_person_list.push(tinyperson1_full);

var tinyperson2 = 'tinyPerson6_left1';
var tinyperson2_right = ['tinyPerson6_right1', 'tinyPerson6_right2', 'tinyPerson6_right3', 'tinyPerson6_right4', 'tinyPerson6_right5', 'tinyPerson6_right6'];
var tinyperson2_left = ['tinyPerson6_left1', 'tinyPerson6_left2', 'tinyPerson6_left3', 'tinyPerson6_left4', 'tinyPerson6_left5', 'tinyPerson6_left6'];
var tinyperson2_full = [tinyperson2, tinyperson2_right, tinyperson2_left];
tiny_person_list.push(tinyperson2_full);

var tinyperson3 = 'tinyPerson7_left1';
var tinyperson3_right = ['tinyPerson7_right1', 'tinyPerson7_right2', 'tinyPerson7_right3', 'tinyPerson7_right4', 'tinyPerson7_right5', 'tinyPerson7_right6'];
var tinyperson3_left = ['tinyPerson7_left1', 'tinyPerson7_left2', 'tinyPerson7_left3', 'tinyPerson7_left4', 'tinyPerson7_left5', 'tinyPerson7_left6'];
var tinyperson3_full = [tinyperson3, tinyperson3_right, tinyperson3_left];
tiny_person_list.push(tinyperson3_full);

var tinyperson4 = 'tinyPerson10_left1';
var tinyperson4_right = ['tinyPerson10_right1', 'tinyPerson10_right2', 'tinyPerson10_right3', 'tinyPerson10_right4', 'tinyPerson10_right5', 'tinyPerson10_right6'];
var tinyperson4_left = ['tinyPerson10_left1', 'tinyPerson10_left2', 'tinyPerson10_left3', 'tinyPerson10_left4', 'tinyPerson10_left5', 'tinyPerson10_left6'];
var tinyperson4_full = [tinyperson4, tinyperson4_right, tinyperson4_left];
tiny_person_list.push(tinyperson4_full);

var tinyperson5 = 'tinyPerson14_left1';
var tinyperson5_right = ['tinyPerson14_right1', 'tinyPerson14_right2', 'tinyPerson14_right3', 'tinyPerson14_right4', 'tinyPerson14_right5', 'tinyPerson14_right6'];
var tinyperson5_left = ['tinyPerson14_left1', 'tinyPerson14_left2', 'tinyPerson14_left3', 'tinyPerson14_left4', 'tinyPerson14_left5', 'tinyPerson14_left6'];
var tinyperson5_full = [tinyperson5, tinyperson5_right, tinyperson5_left];
tiny_person_list.push(tinyperson5_full);

var tinyperson6 = 'tinyPerson15_left1';
var tinyperson6_right = ['tinyPerson15_right1', 'tinyPerson15_right2', 'tinyPerson15_right3', 'tinyPerson15_right4', 'tinyPerson15_right5', 'tinyPerson15_right6'];
var tinyperson6_left = ['tinyPerson15_left1', 'tinyPerson15_left2', 'tinyPerson15_left3', 'tinyPerson15_left4', 'tinyPerson15_left5', 'tinyPerson15_left6'];
var tinyperson6_full = [tinyperson6, tinyperson6_right, tinyperson6_left];
tiny_person_list.push(tinyperson6_full);


var tinyperson7 = 'tinyPerson16_left1';
var tinyperson7_right = ['tinyPerson16_right1', 'tinyPerson16_right2', 'tinyPerson16_right3', 'tinyPerson16_right4', 'tinyPerson16_right5', 'tinyPerson16_right6'];
var tinyperson7_left = ['tinyPerson16_left1', 'tinyPerson16_left2', 'tinyPerson16_left3', 'tinyPerson16_left4', 'tinyPerson16_left5', 'tinyPerson16_left6'];
var tinyperson7_full = [tinyperson7, tinyperson7_right, tinyperson7_left];
tiny_person_list.push(tinyperson7_full);




Person = function(game, xStart, yStart, isTiny, speed, adult = true) {
	this.speed = speed;
	console.log("make person now!");
	this.panic = false;
	//this.child = (this.typeOfPerson[0] == 'Person5_right1' || this.typeOfPerson[0] == 'Person8_right1' || this.typeOfPerson[0] == 'Person9_right1' || this.typeOfPerson[0] == 'Person18_right1' || this.typeOfPerson[0] == 'Person19_right1');
	
  
	
	if(isTiny){
		var person_id = game.rnd.between(0,last_tiny_person_index);
		console.log(person_id);
		this.typeOfPerson = tiny_person_list[person_id];
		this.key = 'tiny_people';
	}
	else{
		// this.typeOfPerson;
		if(idIndex++ % idList.length == 0)
		{
			shuffle(idList);
		}
		if(adult)
		{
			var person_id = idList[idIndex % idList.length];
		}
		else
		{
			if(childIndex++ % childList.length == 0)
			{
				shuffle(childList);
			}

			person_id = childList[childIndex % childList.length];
		}
		this.typeOfPerson = person_list[person_id];
		this.key = 'people';
	}
	this.child = (this.typeOfPerson[5] == 5 || this.typeOfPerson[5] == 8 || this.typeOfPerson[5] == 9 || this.typeOfPerson[5] == 18 || this.typeOfPerson[5] == 19);
	this.clown = (this.typeOfPerson[5] == 12);
	Phaser.Sprite.call(this, game, xStart, yStart, this.key, this.typeOfPerson[0]);
	this.animations.add('right', this.typeOfPerson[1]);
	this.animations.add('left', this.typeOfPerson[2]);
	this.animations.add('right_panic', this.typeOfPerson[3]);
	this.animations.add('left_panic', this.typeOfPerson[4]);
	this.movement_dir = 0;



	people.add(this);
	people_living.push(this);
	if(this.typeOfPerson[5] == 12){this.speed = 0;}
};




Person.prototype = Object.create(Phaser.Sprite.prototype);
Person.prototype.constructor = Person;
Person.prototype.update = function(){
	this.body.velocity.x += game.rnd.integerInRange(-.5,.5);
	if(this.body.velocity.x > this.speed) this.body.velocity.x = this.speed;
	else if(this.body.velocity.x < -(this.speed)) this.body.velocity.x = -(this.speed);
		if(this.body.velocity.x > 0 ){
			if(!this.panic)this.animations.play('right', 3, true);
			else this.animations.play('right_panic', 3, true);
		}
		if(this.body.velocity.x < 0){
			if(!this.panic)this.animations.play('left', 3, true);
			else this.animations.play('left_panic', 3, true);
		}
}

function panic(person){
	
	if(!person.child && !person.clown){
		person.speed = 25;
		person.panic = true;
	} 		
	
}

function turnPersonGrey(person){
	person.speed = 0;
	person.animations.stop();
	game.add.sprite(person.x,person.y, 'greypeople', person.frame);
	person.kill();
}

function shuffle(list)
{
	var currentIndex = list.length, tempVal, randomIndex;

	while(0 !== currentIndex)
	{
		randomIndex = game.rnd.between(0, currentIndex - 1);
		currentIndex--;

		tempVal = list[currentIndex];
		list[currentIndex] = list[randomIndex];
		list[randomIndex] = tempVal;
	}

	return list;
}

