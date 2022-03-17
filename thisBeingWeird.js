const cat = {
	name  : 'Blue',
	breed : 'Scottish Fold',
	dance : function(dance) {
		console.log('THIS IS:', this);
		console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);  //window.name does exist though so be careful
	}
};

cat.dance('salsa');    // calling the dance method in the object the this keyword is called within the object returning breed: 'Scottish Fold'
const bluesDance = cat.dance; //saving the dance function to a var
bluesDance('salsa');           // when calling the dance function through are var the this keyword is being called on the windwo object or the global object 

function whatIsThis() {                 //this keyword is being called in a function that is in the global object or the window object
	console.log('this =', this);
}

const myObj = {                        // this keyword is now being called inside our myObj object -- no longer in the global object
	func  : whatIsThis,
	color : 'purple'
};

myObj.func();                      // WHATEVER IS TO THE LEFT WILL BE THE VALUE OF THIS -- myObj 
window.whatIsThis();                // being called on the window -- even if u left window. off of function
