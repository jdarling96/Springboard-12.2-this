const cat = {
	name  : 'Blue',
	breed : 'Scottish Fold',
	dance : function(dance) {
		console.log('THIS IS:', this);
		console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);
	},
	play: function(...toys) {
		for(let toy of toys) {
			console.log(`${this.name} plays with ${toy}`)
		}


	}
	
};

const dog = {
	breed: 'Black lab',
	name: 'Elton'

}
// call takes in the obj were u want to call this keyword
const blueDance = cat.dance
blueDance.call(cat, 'jitterbug')
blueDance.call(dog, 'hip-hop dance') // the call method changes this to the dog object and we det dance arrgument to hip hop
cat.dance.call(window) // the call method can change the value of this and set it to something else
cat.dance('salsa') // this will still be set to cat obj CALL IS A ONE TIME METHOD DOES NOT CHANGE CAT OBJ

cat.play('string', 'my pant leg');
cat.play.call(dog, 'bone', 'my cat');

function printThis() {
	console.log('THIS ====>>>>', this);
}

printThis.call(cat); //setting this to our cat obj
printThis.call(window); // setting this to window obj what a function in the global obj already is
printThis.call('THERE IS NO THIS!!');

const blueDance = cat.dance;
// blueDance('jitterbug');
blueDance.call(cat, 'jitterbug');

blueDance.call(dog, 'hip hop dance');
