var idList = [];
var idIndex = 0;
var last_person_index = 20;
var childList = [18 - 1, 19 - 1, 9, 8, 5];
var childIndex = 0;
var person_list = ["INVALID PERSON"];
var directionSet = [undefined,
    {pre:'Person', post:'_right',max:6},
    {pre:'Person', post:'_left', max:6},
    {pre:'Panic', post:'_right', max:8},
    {pre:'Panic', post:'_left', max:8}];
for(var i = 1; i <= last_person_index; i++){

  let frameNames = directionSet.map(params =>{
    if(!params) return 0;
    return Phaser.Animation.generateFrameNames(params.pre+i+params.post, 1, params.max, '', 0);
  });
  //TODO move this info out of the array
	var person = 'Person'+i;
  let person_id = i;
  frameNames[0] = person;
  frameNames.push(person_id);
	person_list.push({ID: person_id, frames: frameNames});
	idList.push(i);

}

//tiny people
var last_tiny_person_index = 6;
let tiny_indexes = [3, 6, 7, 10, 14, 15, 16];
let tiny_frames = [
  {pre:'tinyPerson', post:'_left', max:1},
  {pre:'tinyPerson', post:'_right',max:6},
  {pre:'tinyPerson', post:'_left', max:6}
]
var tiny_person_list = tiny_indexes.map(
  index => tiny_frames.map(
    params => Phaser.Animation.generateFrameNames(
      params.pre + index + params.post,
      1, params.max,
      '', 0
    )
  )
);
tiny_person_list = tiny_person_list.map(frame => {frame[0] = frame[0][0]; return frame});

Person = function(game, xStart, yStart, isTiny, speed, adult = true) {
	this.speed = speed;
	this.acc = .5;
	this.panic = false;

	if(isTiny){
		var person_id = game.rnd.between(0,last_tiny_person_index);
		console.log(person_id);
		this.typeOfPerson = tiny_person_list[person_id];
		this.key = 'tiny_people';
	}
	else{
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
    let info = person_list[person_id];
		this.typeOfPerson = info.frames;
    this.ID = info.ID;
		this.key = 'people';
	}
  let myID = this.ID;
	this.child = (myID == 5 || myID == 8 || myID == 9 || myID == 18 || myID == 19);
	this.clown = (myID == 12);
	this.dog = (myID == 21 || myID == 22);
	Phaser.Sprite.call(this, game, xStart, yStart, this.key, null);
	this.animations.add('right', this.typeOfPerson[1]);
	this.animations.add('left', this.typeOfPerson[2]);
	this.animations.add('right_panic', this.typeOfPerson[3]);
	this.animations.add('left_panic', this.typeOfPerson[4]);
	this.movement_dir = 0;

	if(myID == 21){this.typeOfPerson[1] = this.typeOfPerson[2][0];}
	if(myID == 22){this.typeOfPerson[1] = this.typeOfPerson[2][0];}

	people.add(this);
	people_living.push(this);
	if(myID == 12){this.speed = 0;}
};

Person.prototype = Object.create(Phaser.Sprite.prototype);
Person.prototype.constructor = Person;
Person.prototype.update = function(){
	this.body.velocity.x += game.rnd.integerInRange(-this.acc,this.acc);
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

//===========================panic Function========================
function panic(person){
	person.inputEnabled = false;
	person.acc = 20;
	if(person.clown){
		person.animations.play('right', 3, true);
	}
	if(!person.child && !person.clown && !person.dog){
		person.speed = 50;
		person.panic = true;
	} 		
}

//==========================turnPersonGrey Function=======================
function turnPersonGrey(person){
	person.speed = 0;
	person.animations.stop();
	game.add.sprite(person.x,person.y, 'greypeople', person.frame);
	person.kill();
}

//=======================shuffle Function===========================
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