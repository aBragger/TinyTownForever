
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

/*
var person1 = 'Person1';
var person1_right = ['Person1_right1', 'Person1_right2', 'Person1_right3', 'Person1_right4', 'Person1_right5', 'Person1_right6'];
var person1_left = ['Person1_left1', 'Person1_left2', 'Person1_left3', 'Person1_left4', 'Person1_left5', 'Person1_left6'];
var person1_right_panic = ['Panic1_right1', 'Panic1_right2','Panic1_right3','Panic1_right4','Panic1_right5','Panic1_right6','Panic1_right7','Panic1_right8',];
var person1_left_panic = ['Panic1_left1', 'Panic1_left2','Panic1_left3','Panic1_left4','Panic1_left5','Panic1_left6','Panic1_left7','Panic1_left8',];
var grey_guy = [person1, person1_right, person1_left, person1_right_panic, person1_left_panic];

var person2 = 'Person2';
var person2_right = ['Person2_right1', 'Person2_right2', 'Person2_right3', 'Person2_right4', 'Person2_right5', 'Person2_right6'];
var person2_left = ['Person2_left1', 'Person2_left2', 'Person2_left3', 'Person2_left4', 'Person2_left5', 'Person2_left6'];
var person2_right_panic = ['Panic2_right1', 'Panic2_right2','Panic2_right3','Panic2_right4','Panic2_right5','Panic2_right6','Panic2_right7','Panic2_right8',];
var person2_left_panic = ['Panic2_left1', 'Panic2_left2','Panic2_left3','Panic2_left4','Panic2_left5','Panic2_left6','Panic2_left7','Panic2_left8',];
var chin_guy = [person2, person2_right, person2_left, person2_right_panic, person2_left_panic];

var person3 = 'Person1'; //todo: there is no forward frame for this gal, AND some of the ones below
var person3_right = ['Person3_right1', 'Person3_right2', 'Person3_right3', 'Person3_right4', 'Person3_right5', 'Person3_right6'];
var person3_left = ['Person3_left1', 'Person3_left2', 'Person3_left3', 'Person3_left4', 'Person3_left5', 'Person3_left6'];
var person3_right_panic = ['Panic3_right1', 'Panic3_right2','Panic3_right3','Panic3_right4','Panic3_right5','Panic3_right6','Panic3_right7','Panic3_right8',];
var person3_left_panic = ['Panic3_left1', 'Panic3_left2','Panic3_left3','Panic3_left4','Panic3_left5','Panic3_left6','Panic3_left7','Panic3_left8',];
var marge = [person3, person3_right, person3_left, person3_right_panic, person3_left_panic];

var person4 = 'Person1';
var person4_right = ['Person4_right1', 'Person4_right2', 'Person4_right3', 'Person4_right4', 'Person4_right5', 'Person4_right6'];
var person4_left = ['Person4_left1', 'Person4_left2', 'Person4_left3', 'Person4_left4', 'Person4_left5', 'Person4_left6'];
var person4_right_panic = ['Panic4_right1', 'Panic4_right2','Panic4_right3','Panic4_right4','Panic4_right5','Panic4_right6','Panic4_right7','Panic4_right8',];
var person4_left_panic = ['Panic4_left1', 'Panic4_left2','Panic4_left3','Panic4_left4','Panic4_left5','Panic4_left6','Panic4_left7','Panic4_left8',];
var yellow_dress = [person4, person4_right, person4_left, person4_right_panic, person4_left_panic];

var person5 = 'Person1';
var person5_right = ['Person5_right1', 'Person5_right2', 'Person5_right3', 'Person5_right4', 'Person5_right5', 'Person5_right6'];
var person5_left = ['Person5_left1', 'Person5_left2', 'Person5_left3', 'Person5_left4', 'Person5_left5', 'Person5_left6'];
var person5_right_panic = ['Panic5_right1', 'Panic5_right2','Panic5_right3','Panic5_right4','Panic5_right5','Panic5_right6','Panic5_right7','Panic5_right8',];
var person5_left_panic = ['Panic5_left1', 'Panic5_left2','Panic5_left3','Panic5_left4','Panic5_left5','Panic5_left6','Panic5_left7','Panic5_left8',];
var boy = [person5, person5_right, person5_left, person5_right_panic, person5_left_panic];

var person6 = 'Person6';
var person6_right = ['Person6_right1', 'Person6_right2', 'Person6_right3', 'Person6_right4', 'Person6_right5', 'Person6_right6'];
var person6_left = ['Person6_left1', 'Person6_left2', 'Person6_left3', 'Person6_left4', 'Person6_left5', 'Person6_left6'];
var person6_right_panic = ['Panic6_right1', 'Panic6_right2','Panic6_right3','Panic6_right4','Panic6_right5','Panic6_right6','Panic6_right7','Panic6_right8',];
var person6_left_panic = ['Panic6_left1', 'Panic6_left2','Panic6_left3','Panic6_left4','Panic6_left5','Panic6_left6','Panic6_left7','Panic6_left8',];
var linnell = [person6, person6_right, person6_left, person6_right_panic, person6_left_panic];

var person7 = 'Person7';
var person7_right = ['Person7_right1', 'Person7_right2', 'Person7_right3', 'Person7_right4', 'Person7_right5', 'Person7_right6'];
var person7_left = ['Person7_left1', 'Person7_left2', 'Person7_left3', 'Person7_left4', 'Person7_left5', 'Person7_left6'];
var person7_right_panic = ['Panic7_right1', 'Panic7_right2','Panic7_right3','Panic7_right4','Panic7_right5','Panic7_right6','Panic7_right7','Panic7_right8',];
var person7_left_panic = ['Panic7_left1', 'Panic7_left2','Panic7_left3','Panic7_left4','Panic7_left5','Panic7_left6','Panic7_left7','Panic7_left8',];
var bobbey_fresh = [person7, person7_right, person7_left, person7_right_panic, person7_left_panic];

var person8 = 'Person8';
var person8_right = ['Person8_right1', 'Person8_right2', 'Person8_right3', 'Person8_right4', 'Person8_right5', 'Person8_right6'];
var person8_left = ['Person8_left1', 'Person8_left2', 'Person8_left3', 'Person8_left4', 'Person8_left5', 'Person8_left6'];
var linnell_boy = [person8, person8_right, person8_left, person7_right_panic, person7_left_panic];

var person9 = 'Person9';
var person9_right = ['Person9_right1', 'Person9_right2', 'Person9_right3', 'Person9_right4', 'Person9_right5', 'Person9_right6'];
var person9_left = ['Person9_left1', 'Person9_left2', 'Person9_left3', 'Person9_left4', 'Person9_left5', 'Person9_left6'];
var girl = [person9, person9_right, person9_left, person7_right_panic, person7_left_panic];

var person10 = 'Person10';
var person10_right = ['Person10_right1', 'Person10_right2', 'Person10_right3', 'Person10_right4', 'Person10_right5', 'Person10_right6'];
var person10_left = ['Person10_left1', 'Person10_left2', 'Person10_left3', 'Person10_left4', 'Person10_left5', 'Person10_left6'];
var deb = [person10, person10_right, person10_left, person7_right_panic, person7_left_panic];

var person11 = 'Person11';
var person11_right = ['Person11_right1', 'Person11_right2', 'Person11_right3', 'Person11_right4', 'Person11_right5', 'Person11_right6'];
var person11_left = ['Person11_left1', 'Person11_left2', 'Person11_left3', 'Person11_left4', 'Person11_left5', 'Person11_left6'];
var chad = [person11, person11_right, person11_left, person7_right_panic, person7_left_panic];

var dog = 'Person1';
var person1_right = ['Person1_right1', 'Person1_right2', 'Person1_right3', 'Person1_right4', 'Person1_right5', 'Person1_right6'];
var person1_left = ['Person1_left1', 'Person1_left2', 'Person1_left3', 'Person1_left4', 'Person1_left5', 'Person1_left6'];
var NAME = [person1, person1_right, person1_left];

var dog1 = 'Person1';
var dog1_right = ['dog1_right1', 'dog1_right2', 'dog1_right3', 'dog1_right4', 'dog1_right5', 'dog1_right6'];
var dog1_left = ['dog1_left1', 'dog1_left2', 'dog1_left3', 'dog1_left4', 'dog1_left5', 'dog1_left6'];
var dog= [dog1, dog1_right, dog1_left, person7_right_panic, person7_left_panic];
var numOfPeople = 12;
*/


Person = function(game, xStart, yStart) {
	console.log("make person now!");
	this.panic = false;
	console.log(xStart);
	// this.typeOfPerson;
	var person_id = game.rnd.between(1,last_person_index);
	while (person_id == 12){
		var person_id = game.rnd.between(1,last_person_index);
	}
	console.log(person_id);
	this.typeOfPerson = person_list[person_id];
	/*
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
 	*/

 	console.log(this.typeOfPerson);

	Phaser.Sprite.call(this, game, xStart, yStart, 'people', this.typeOfPerson[0]);
	this.animations.add('right', this.typeOfPerson[1]);
	this.animations.add('left', this.typeOfPerson[2]);
	console.log(this.typeOfPerson[3][0])
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

