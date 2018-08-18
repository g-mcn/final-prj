
var game = new Phaser.Game(800, 1000, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function node(key) 
{
	this._key = key;
	this.freq = 0;
};

node.prototype.inc = function()
{
	this.freq = this.freq+1	
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
			if(pick >= 0  && < j[0].getFreq())
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
			if(pick >= 0  && < i[0].getFreq())
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
			if(pick >= 0  && < j[0].getFreq())
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
			if(pick >= 0  && < j[0].getFreq())
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


function preload() 
{
	//game.load.json('markov', 'markov-chains-master/package.json');
}

function create() 
{
	
}

function update() 
{
	if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
	{
		console.log(markov.generate());
	}

}
