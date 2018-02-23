var skyEl = document.getElementById("box");

skyEl.addEventListener('click', function() {
	var animation = document.createElement('a-animation');
	animation.setAttribute('attribute', 'scale');
	animation.setAttribute('to', '2 2 2');
	animation.setAttribute('dur', '500');
	this.appendChild(animation);
	console.log('evt');
});

