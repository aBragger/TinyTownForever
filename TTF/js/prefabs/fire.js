
Fire = function(game, key) {
        Phaser.Sprite.call(this, game, getRandomInt(0,worldWidth), -1*getRandomInt(0,game.height), 'fire', 0);
        this.animations.add('burn', ['fireball1','fireball2','fireball3','fireball4','fireball5','fireball6']);
        this.animations.play('burn', 10, true);
        fires.add(this);
        game.physics.enable(this);
        this.body.allowGravity = true;
        this.body.gravity.y = 30;
        this.body.velocity = 100;

        //this.body.angularVelocity = game.rnd.integerInRange(-180,180);
        this.horVel = -1;
        this.angle = 20;
};

Fire.prototype = Object.create(Phaser.Sprite.prototype);
Fire.prototype.constructor = Fire;
Fire.prototype.update = function(){
    this.x = this.x+this.horVel;
    this.y = this.y+2;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}