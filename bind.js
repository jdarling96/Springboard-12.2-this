const blue = {
	name  : 'Blue',
	breed : 'Scottish Fold',
	dance : function(dance) {
		console.log('THIS IS:', this);
		console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);
	},
	play  : function(...toys) {
		for (let toy of toys) {
			console.log(`${this.name} plays with ${toy} `);
		}
	}
};

const rocket = {
	name  : 'Rocket',
	breed : 'Himalayan'
};

const bDance = blue.dance    // this is still set to window
//bDance.bind(blue);        // unlike call bind is not being 'Called' right away -- we need to execute it
const boundDance = bDance.bind(blue);        // we save to a var so we can 'call' bind as many times as we want. it is perma set to this var  
boundDance('tango'); 
boundDance('chicken');                        // calling bind with our argument of dance : function(dance)

const rocketDance = blue.dance.bind(rocket);
rocketDance('the worm')

const dog = {
	name  : 'Tyson',
	breed : 'Mini Aussie',
	dance : rocketDance        // this will still return our rocketDance from above as it is bound to rocketDance
};
dog.dance('waltz') // this will return  dance: rocketDance = blue.dance.bind(rocket) with the dance argument being 'waltz'. rocketDance is allready bound 

const blueDisco = blue.dance.bind(blue, 'disco');
const playsWithSocks = blue.play.bind(blue, 'left sock', 'right sock')  // can take multiple arguments like 'call' method but it is perma to the var we assign it to
playsWithSocks('dirty sock');   // other arguments are allready passed in from bind -- well have 3 arguments now

function applySalesTax(taxRate, price) {
	return price + price * taxRate;
}

const applyCATax = applySalesTax.bind(null, 0.0725) //using bind to change this to undefined and taxRate to 0.0725
applyCATax(9.00)    // calling price argument 
const applyTXTax = applySalesTax.bind(null, 0.0544);
applyTXTax(19.99)


const bobsMembership = {
	name  : 'Bob',
	total : 250
};

const jillsMembership = {
	name  : 'Jill',
	total : 899
};

function collectMonthlyFee(fee) {
	const remaining = this.total - fee;
	this.total = remaining;
	return this.name + ' remaining balance:' + remaining;
}

const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5);
collectBobsFee(); 

const collectJillsFee = collectMonthlyFee.bind(jillsMembership, 50);
collectJillsFee();  // updating original object by binding the this keyword and saveing it in a var that we can call
