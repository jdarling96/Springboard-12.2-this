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
	},
	greet() {
		alert(`${this.name} SAYS MEOW!`);
	}
};
document
.querySelector('#btn-1')
.addEventListener('click', blue.greet.bind(blue)) // need to bind otherwise its set to global object

const btnA = document.querySelector('#a');
const btnB = document.querySelector('#b');
const btnC = document.querySelector('#c');

function popUp(msg) {
	alert('Secret message is ' + msg);
}

btnA.addEventListener('click', popUp.bind(null, 'BUTTON A SAYS HI')) // dont forget to set the value of this when using bind in this case null
btnB.addEventListener('click', popUp.bind(null, 'BUTTON B SAYS HI')) // dont forget to set the value of this when using bind in this case null
btnC.addEventListener('click', popUp.bind(null, 'BUTTON C SAYS HI')) // dont forget to set the value of this when using bind in this case null

btnA.addEventListener('click', function(){
	popUp('BUTTON A SAYS HI!')
});
btnB.addEventListener('click', function(){
	popUp('BUTTON B SAYS HI!')
});
btnC.addEventListener('click', function(){
	popUp('BUTTON C SAYS HI!')
});
