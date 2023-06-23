//#text: Show More Text - Example
//#text:
//#text:
//BODY
//#text: Welcome to the "Show More Text Example".
//A href="#" id="more" onclick="showText()"
//#text: Read more ...
//#text:
//SPAN id="text" style="display:none"
//#text: Welcome to JavaScript and DOM. Welcome to JavaScript and DOM. Welcome to JavaScript and DOM. Welcome to JavaScript and DOM. Welcome to JavaScript and DOM. Welcome to JavaScript and DOM. Welcome to JavaScript and DOM. Welcome to JavaScript and DOM.
//#text:
//SCRIPT
//#text: function showText() { document.getElementById('text').style.display = 'inline'; document.getElementById('more').style.display = 'none'; }/
//#text:

function showText() {
	let span = document.querySelector('#text');
	let anchor = document.querySelector('#more');

	span.style.display = 'inline';
	anchor.style.display = 'none';

}

function showText() {
	document.getElementById('text')
		.style.display = 'inline';
	document.getElementById('more')
		.style.display = 'none';
}