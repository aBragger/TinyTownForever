Birds = function (game, key, speed)
{
	phaser.sprite.call(this, game, game.rnd.between (game.world.width, game.world.width + 6400), game.world.height - 100, key);

	this.speed = speed;

	this.enableBody = true;

	game.physics.enable(this);

	this.xVelocity = speed;
};

Birds.prototype = Object.create(Phaser.Sprite.prototype);
Birds.prototype.constructor = Birds;
Birds.prototype.update = function()
{
    //this.x = this.x+this.horVel;
    //this.y = this.y+2;
}