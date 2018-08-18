var game = new Phaser.Game(1000, 1000, Phaser.AUTO);

var MainMenu = function(game){};

function node(key) 
{
	this._key = key;
	this.freq = 0;
};

node.prototype.inc = function()
{
	this.freq++;
};

node.prototype.getKey = function()
{
	return this._key;
};

node.prototype.getFreq = function()
{
	return this.freq;
};

var two = new node('i');
two.inc();

var val = ['j', 'i', 'k', 'l', 'k', 'k'];

//j input
var j1 = new node('j');
var i1 = new node('i');
var l1 = new node('l');
var k1 = new node('k');

//i input
var j2 = new node('j');
var i2 = new node('i');
var l2 = new node('l');
var k2 = new node('k');

//l input
var j3 = new node('j');
var i3 = new node('i');
var l3 = new node('l');
var k3 = new node('k');

//k input
var j4 = new node('j');
var i4 = new node('i');
var l4 = new node('l');
var k4 = new node('k');

//values for array outer
var j = [j1, i1, l1, k1];
var i = [j2, i2, l2, k2];
var l = [j3, i3, l3, k3];
var k = [j4, i4, l4, k4];

var bttnsHist = [j,i,k,l];

function readInput(input)
{
	for(var z = 0; z<=input.length; z++)
	{
		switch(input[z])
		{
			case 'j':
				if(input[z+1] == 'j')
				{
					j[0].inc();
				}
				else if(input[z+1] == 'i')
				{
					j[1].inc();
				}
				else if(input[z+1] == 'l')
				{
					j[2].inc();
				}
				else if(input[z+1] == 'k')
				{
					j[3].inc();
				}
				break;
			case 'i':
				if(input[z+1] == 'j')
				{
					i[0].inc();
				}
				else if(input[z+1] == 'i')
				{
					i[1].inc();
				}
				else if(input[z+1] == 'l')
				{
					i[2].inc();
				}
				else if(input[z+1] == 'k')
				{
					i[3].inc();
				}
				break;
			case 'l':
				if(input[z+1] == 'j')
				{
					l[0].inc();
				}
				else if(input[z+1] == 'i')
				{
					l[1].inc();
				}
				else if(input[z+1] == 'l')
				{
					l[2].inc();
				}
				else if(input[z+1] == 'k')
				{
					l[3].inc();
				}
				break;
			case 'k':
				if(input[z+1] == 'j')
				{
					k[0].inc();
				}
				else if(input[z+1] == 'i')
				{
					k[1].inc();
				}
				else if(input[z+1] == 'l')
				{
					k[2].inc();
				}
				else if(input[z+1] == 'k')
				{
					k[3].inc();
				}
				break;
		}
	}
}

function determineProbability(input)
{
	var output;
	var start = Math.floor((Math.random() * 4) + 1);
	switch(start)
	{
		case 1:
			var all = j[0].getFreq() + j[1].getFreq() + j[2].getFreq() + j[3].getFreq();
			var pick = (Math.floor() * all) + 1;
			if(pick >= 0  && pick < j[0].getFreq())
			{
				return j[0].getKey();
			}
			else if(j[0].getFreq <= pick && pick < j[0].getFreq() + j[1].getFreq)
			{
				return j[1].getKey();
			}
			else if(j[0].getFreq() + j[1].getFreq <= pick && pick < j[0].getFreq() + j[1].getFreq + j[2].getFreq())
			{
				return j[2].getKey();
			}
			else if(j[0].getFreq() + j[1].getFreq + j[2].getFreq() <= pick && pick <= j[0].getFreq() + j[1].getFreq + j[2].getFreq() + j[3].getFreq())
			{
				return j[3].getKey();
			}
			break;
		case 2:
			var all = i[0].getFreq() + i[1].getFreq() + i[2].getFreq() + i[3].getFreq();
			var pick = (Math.floor() * all) + 1;
			if(pick >= 0  && pick < i[0].getFreq())
			{
				return i[0].getKey();
			}
			else if(i[0].getFreq <= pick && pick < i[0].getFreq() + i[1].getFreq)
			{
				return i[1].getKey();
			}
			else if(i[0].getFreq() + i[1].getFreq <= pick && pick < i[0].getFreq() + i[1].getFreq + i[2].getFreq())
			{
				return i[2].getKey();
			}
			else if(i[0].getFreq() + i[1].getFreq + i[2].getFreq() <= pick && pick <= i[0].getFreq() + i[1].getFreq + i[2].getFreq() + i[3].getFreq())
			{
				return i[3].getKey();
			}
			break;
		case 3:
			var all = l[0].getFreq() + l[1].getFreq() + l[2].getFreq() + l[3].getFreq();
			var pick = (Math.floor() * all) + 1;
			if(pick >= 0  && pick < j[0].getFreq())
			{
				return l[0].getKey();
			}
			else if(l[0].getFreq <= pick && pick < l[0].getFreq() + l[1].getFreq)
			{
				return l[1].getKey();
			}
			else if(l[0].getFreq() + l[1].getFreq <= pick && pick < l[0].getFreq() + l[1].getFreq + l[2].getFreq())
			{
				return l[2].getKey();
			}
			else if(l[0].getFreq() + l[1].getFreq + l[2].getFreq() <= pick && pick <= l[0].getFreq() + l[1].getFreq + l[2].getFreq() + l[3].getFreq())
			{
				return l[3].getKey();
			}
			break;
		case 4:
			var all = k[0].getFreq() + k[1].getFreq() + k[2].getFreq() + k[3].getFreq();
			var pick = (Math.floor() * all) + 1;
			if(pick >= 0  && pick < j[0].getFreq())
			{
				return k[0].getKey();
			}
			else if(k[0].getFreq <= pick && pick < k[0].getFreq() + k[1].getFreq)
			{
				return k[1].getKey();
			}
			else if(k[0].getFreq() + k[1].getFreq <= pick && pick < k[0].getFreq() + k[1].getFreq + k[2].getFreq())
			{
				return k[2].getKey();
			}
			else if(k[0].getFreq() + k[1].getFreq + k[2].getFreq() <= pick && pick <= k[0].getFreq() + k[1].getFreq + k[2].getFreq() + k[3].getFreq())
			{
				return k[3].getKey();
			}
			break;
	}
}

readInput(val);


var iBttn;
var jBttn;
var kBttn;
var lBttn;
var cpuHp;
var playerHp;
var playerInput = [];
var blk;
var cpuBrain = [];

MainMenu.prototype = 
{
	init: function()  
	{
		this.level = 0;
		//playerInput = [];
	},
	preload: function()
	{
		console.log('MainMenu: preload');
	},
	create: function()
	{
		console.log('MainMenu: create');
		game.stage.backgroundColor = "#facade";
		console.log('level: ' + this.level);
	},
	update: function()
	{
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
		{
			game.state.start('GamePlay', true, false, this.level);
		}
	}
}

var GamePlay = function(game){};
GamePlay.prototype = 
{
	init: function()  
	{
		this.level = 1;
		cpuHp = 10;
		playerHp = 10;
		blk = 0;
	},
	preload: function()
	{
		console.log('GamePlay: preload');
	},
	create: function()
	{
		console.log('GamePlay: create');
		game.stage.backgroundColor = "#ccddaa";
		console.log('level: ' + this.level);
	},
	update: function()
	{
		if(game.input.keyboard.justPressed(Phaser.Keyboard.J))
		{
			console.log("J pressed");
			if(blk == 1)
			{
				playerHp--;
				console.log(playerHp+", CPU blocked!!");
			}
			else
			{
				cpuHp--;
				console.log(cpuHp);
				playerInput.push(1);
			}
		}
		else if(game.input.keyboard.justPressed(Phaser.Keyboard.I))
		{
			console.log("I pressed");
			if(blk == 2)
			{
				playerHp--;
				console.log(playerHp+", CPU blocked!!");

			}
			else
			{
				cpuHp--;
				console.log(cpuHp);
				playerInput.push(2);
			}
		}
		else if(game.input.keyboard.justPressed(Phaser.Keyboard.L))
		{
			console.log("L pressed");
			if(blk == 3)
			{
				playerHp--;
				console.log(playerHp+", CPU blocked!!");
			}
			else
			{
				cpuHp--;
				console.log(cpuHp);
				playerInput.push(3);
			}
		}
		else if(game.input.keyboard.justPressed(Phaser.Keyboard.K))
		{
				if(blk == 4)
				{
					playerHp--;
					console.log(playerHp+", CPU blocked!!");
				}
				else
				{
					console.log("K pressed");
					cpuHp--;
					console.log(cpuHp);
					playerInput.push(4);
				for(i = 0; i<playerInput.length; i++)
				{
					//console.log(playerInput[i]);
				}
			}
		}

		if(cpuHp == 0 || cpuHp < 0)
		{
			for(i = 0; i<playerInput.length; i++)
			{
				cpuBrain.push(playerInput[i]);
			}
			playerInput = [];
			cpuHp = 20;
			this.level+1;
			readInput(cpuBrain);
			console.log(this.level++ +" TRY THAT AGAIN!!!");
			
			//game.state.start('GamePlay', true, false, this.level+1);
			
		}
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
		{
			game.state.start('GameOver', true, false, this.level);
		}
	}
}

var GameOver = function(game){};
GameOver.prototype = 
{
	init: function()  
	{
		this.level = 1;
	},
	preload: function()
	{
		console.log('GameOver: preload');
	},
	create: function()
	{
		console.log('GameOver: create');
		game.stage.backgroundColor = "#bb11ee";
		console.log('level: ' + this.level);
	},
	update: function()
	{
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
		{
			game.state.start('MainMenu', true, false, this.level);
			playerInput = [];
			cpuBrain = [];
		}
	}
}


game.state.add('MainMenu', MainMenu);
game.state.add('GamePlay', GamePlay);
game.state.add('GameOver', GameOver);
game.state.start('MainMenu');
