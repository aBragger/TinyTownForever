Building = function(game) {
	console.log("create new person");
};

Building.prototype = Object.create(Phaser.Sprite.prototype);
Building.prototype.constructor = Building;
Building.prototype.update = function(){
}