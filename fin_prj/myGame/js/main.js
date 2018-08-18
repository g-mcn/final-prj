var game = new Phaser.Game(800, 1000, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	// preload assets
	game.load.image('sky', 'assets/img/sky.png');
	game.load.image('ground', 'assets/img/platform.png');
	game.load.image('star', 'assets/img/star.png');
	game.load.image('diamond', 'assets/img/diamond.png');
	game.load.spritesheet('dude', 'assets/img/dude.png', 32,48);
	game.load.spritesheet('baddie', 'assets/img/baddie.png', 32,32);


	//Player score

}
	var platforms;
	var cursors;
	var player;
	var score = 0;
	var scoreText;

var platforms;

function create() {
	//Arcade physics system
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	//Add the background
	game.add.sprite(0,0,'sky');

	//Player score text for collecting stars
	scoreText = game.add.text(16,16,'score: 0', {fontSize: '32px', fill: '#000'});

	//Create the star group
	stars = game.add.group();
	stars.enableBody = true;

	//Creates the diamond group and gives them bodies for collision detection
	diamonds = game.add.group();
	diamonds.enableBody = true;

	for(var i = 0; i < 12; i++)
	{
		//Will spawn 4 diamonds in random places across the screen
		if(i%3 == 0)
		{
			//The random number method was found on w3schools
			var diamond = diamonds.create(Math.floor(Math.random()*10)*60, (Math.floor(Math.random()*10)*80), 'diamond');
		}
		//Create the star sprite
		var star = stars.create(i*70,0,'star');
		
		//Star bounce physics
		star.body.gravity.y = 6;
		star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}




	//ground and floating platforms
	platforms = game.add.group();

	platforms.enableBody = true;

	//ground variable
	var ground = platforms.create(0,game.world.height - 64, 'ground');

	//ground scaled to fit game window
	ground.scale.setTo(2,2);

	//keeps the ground in the window
	ground.body.immovable = true;

	//ledge creation and status regarding player collision
	//organized to correspond to order of ledges from top to bottom
	var ledge = platforms.create(-300,150,'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(200,200,'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150,350,'ground');
	ledge.body.immovable = true;
	//fake ledge
	ledge = platforms.create(200,400,'ground');
	ledge.body.immovable = false;
	ledge = platforms.create(700,450,'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(400,650,'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-300,760,'ground');
	ledge.body.immovable = true;


	//player definition and its placement
	player = game.add.sprite(32,game.world.height - 150, 'baddie');
	game.physics.arcade.enable(player);

	//player physics
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	//player animations for left and right
	player.animations.add('left', [0,1],10,true);
	player.animations.add('right', [2,3],10, true);

	cursors = game.input.keyboard.createCursorKeys();


}

function update() {
	//Collision test for platforms and non-platform items
	var hitPlatform = game.physics.arcade.collide(player, platforms);	


	//diamond collision with platform
	game.physics.arcade.collide(diamonds, platforms);

	//diamond collision with player
	game.physics.arcade.overlap(player, diamonds, collectDiamond, null, this);

	//star collision with platform
	game.physics.arcade.collide(stars, platforms);

	//star collision with player
	game.physics.arcade.overlap(player, stars, collectStar, null, this);

	//Reset the player velocity after each update
	player.body.velocity.x = 0;

	if(cursors.left.isDown)
	{
		//Move left
		player.body.velocity.x = -150;
		player.animations.play('left');
	}
	else if(cursors.right.isDown)
	{
		//Move right
		player.body.velocity.x = 150;
		player.animations.play('right');
	}
	else
	{
		//Stand still frame
		player.animations.stop();
		player.frame = 2;
	}

	//Player's jump ability
	if(cursors.up.isDown && player.body.touching.down && hitPlatform)
	{
		player.body.velocity.y = -350;
	}


}

	//Increases player score for star collection and removes stars from game
	function collectStar(player, star)
	{
		//Actually removes the star
		star.kill();

		//Updates the score 
		score += 10;
		scoreText.text = 'Score: ' + score;
	}

	//Increases player score for diamond collection and removes diamonds from game
	function collectDiamond(player, diamond)
	{
		//Actually removes the diamond
		diamond.kill();

		//Updates the score 
		score += 25;
		scoreText.text = 'Score: ' + score;
	}