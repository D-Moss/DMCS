const triggers = document.querySelectorAll('.lightbox-trigger');
const overlay = document.createElement('div');
overlay.className = 'lightbox-overlay';
document.body.appendChild(overlay);

triggers.forEach(trigger => {
	trigger.addEventListener('click', function(e) {
		e.preventDefault();
		const img = document.createElement('img');
		img.src = this.href;
		overlay.innerHTML = '';
		overlay.appendChild(img);
		overlay.style.display = 'flex';
	});
});

overlay.addEventListener('click', function() {
	overlay.style.display = 'none';
});