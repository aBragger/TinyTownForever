
var last_person_index = 20;
var person_list = ["INVALID PERSON"];
for(var i = 1; i <= last_person_index; i++){
	var person = 'Person'+i;
	var person_right = ['Person'+i+'_right1', 'Person'+i+'_right2', 'Person'+i+'_right3', 'Person'+i+'_right4', 'Person'+i+'_right5', 'Person'+i+'_right6'];
	var person_left = ['Person'+i+'_left1', 'Person'+i+'_left2', 'Person'+i+'_left3', 'Person'+i+'_left4', 'Person'+i+'_left5', 'Person'+i+'_left6'];
	var person_right_panic = ['Panic'+i+'_right1', 'Panic'+i+'_right2','Panic'+i+'_right3','Panic'+i+'_right4','Panic'+i+'_right5','Panic'+i+'_right6','Panic'+i+'_right7','Panic'+i+'_right8'];
	var person_left_panic = ['Panic'+i+'_left1', 'Panic'+i+'_left2','Panic'+i+'_left3','Panic'+i+'_left4','Panic'+i+'_left5','Panic'+i+'_left6','Panic'+i+'_left7','Panic'+i+'_left8'];
	person_list.push([person, person_right, person_left, person_right_panic, person_left_panic]);
}

//tiny people
var tiny_person_list = [];
var last_tiny_person_index = 0;
var tinyperson1 = 'tinyPerson3_left1';
var tinyperson1_right = ['tinyPerson3_right1', 'tinyPerson3_right2', 'tinyPerson3_right3', 'tinyPerson3_right4', 'tinyPerson3_right5', 'tinyPerson3_right6'];
var tinyperson1_left = ['tinyPerson3_left1', 'tinyPerson3_left2', 'tinyPerson3_left3', 'tinyPerson3_left4', 'tinyPerson3_left5', 'tinyPerson3_left6'];
var tinyperson1_full = [tinyperson1, tinyperson1_right, tinyperson1_left];
tiny_person_list.push(tinyperson1_full);

var tinyperson1 = 'tinyPerson3_left1';
var tinyperson1_right = ['tinyPerson3_right1', 'tinyPerson3_right2', 'tinyPerson3_right3', 'tinyPerson3_right4', 'tinyPerson3_right5', 'tinyPerson3_right6'];
var tinyperson1_left = ['tinyPerson3_left1', 'tinyPerson3_left2', 'tinyPerson3_left3', 'tinyPerson3_left4', 'tinyPerson3_left5', 'tinyPerson3_left6'];
var tinyperson1_full = [tinyperson1, tinyperson1_right, tinyperson1_left];



Person = function(game, xStart, yStart, isTiny, speed) {
	this.speed = speed;
	console.log("make person now!");
	this.panic = false;

	if(isTiny){
		var person_id = game.rnd.between(0,last_tiny_person_index);
		console.log(person_id);
		this.typeOfPerson = tiny_person_list[person_id];
		this.key = 'tiny_people';
	}
	else{
		// this.typeOfPerson;
		var person_id = game.rnd.between(1,last_person_index);
		while (person_id == 12){
			var person_id = game.rnd.between(1,last_person_index);
		}
		this.typeOfPerson = person_list[person_id];
		this.key = 'people';
	}

	Phaser.Sprite.call(this, game, xStart, yStart, this.key, this.typeOfPerson[0]);
	this.animations.add('right', this.typeOfPerson[1]);
	this.animations.add('left', this.typeOfPerson[2]);
	this.animations.add('right_panic', this.typeOfPerson[3]);
	this.animations.add('left_panic', this.typeOfPerson[4]);
	this.movement_dir = 0;
	people.add(this);
	people_living.push(this);
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
	console.log(person.panic);
	//if(person.typeOfPerson.length > 3){
		//person.panic = true;		
	//}


}

