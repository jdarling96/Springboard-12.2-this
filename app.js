const greeter = {
	msg: 'I like chickens',
	sayHi: () => {
		alert(this.msg)
	},
	waitAndGreet: function(delay) {
		setTimeout(function() {
			alert(this.msg)
		},delay) 
	}
 
};
greeter.sayHi();   // arrow functions dont make there own this
greeter.waitAndGreet(1000)     // setTimeout is a window method -- waitAndGreet function this is still set to our object but not setTimeOut
	// waitAndGreet : function(delay) {
	// 	setTimeout(
	// 		function() {
	// 			alert(this.msg);
	// 		}.bind(this),
	// 		delay
	// 	);
	// }
	waitAndGreet : function(delay) {
		setTimeout(() => {
			alert(this.msg);
		}, delay);
	}

