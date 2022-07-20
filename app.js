// Numbers Facts

let favNumber = 7;
let baseURL = 'http://numbersapi.com';

//1
$.getJSON(`${baseURL}/${favNumber}?json`)
	.then(res => {
		console.log(res);
	});

//2 
let favNumbers = [305, 74, 23, 45];
$.getJSON(`${baseURL}/${favNumbers}?json`)
	.then(res => {
		console.log(res);
	});
	
//3
Promise.all(
	Array.from({ length: 4 }, () => {
		return $.getJSON(`${baseURL}/${favNumber}?json`);
	})
).then(facts => {
	facts.forEach(res => $("body").append(`<p>${res.text}</p>`));
});