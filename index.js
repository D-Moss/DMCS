document.addEventListener('DOMContentLoaded', () => {
/* ---------- EXPERIENCE CAROUSEL (guarded) ---------- */
	const track = document.querySelector('.carousel-track');
	const prevBtn = document.querySelector('.carousel-button.prev');
	const nextBtn = document.querySelector('.carousel-button.next');

	if (track && prevBtn && nextBtn) {
		let currentIndex = 0;
		const cardWidth  = 480 + 32; // TODO: consider computing from getBoundingClientRect for true responsive
		const totalCards = document.querySelectorAll('.experience-card').length;
		const maxIndex   = Math.max(0, totalCards - 2); // safe if totalCards < 2

		nextBtn.addEventListener('click', () => {
			if (currentIndex < maxIndex) {
				currentIndex++;
				track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
				if (currentIndex === maxIndex) {
					nextBtn.disabled = true;
					nextBtn.style.opacity = 0.5;
					nextBtn.style.cursor = 'not-allowed';
				}
			}
		});

		prevBtn.addEventListener('click', () => {
			if (currentIndex > 0) {
				currentIndex--;
				track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
				nextBtn.disabled = false;
				nextBtn.style.opacity = 1;
				nextBtn.style.cursor = 'pointer';
			}
		});
	}

	/* ---------- CONTACT FORM (guarded) ---------- */
	const form = document.querySelector('form');
	const success = document.getElementById('form-success');

	if (form) {
		form.addEventListener('submit', async (e) => {
			e.preventDefault();
			const data = new FormData(form);
			try {
				const response = await fetch(form.action, {
					method: 'POST',
					body: data,
					headers: { Accept: 'application/json' },
				});
				if (response.ok) {
					form.reset();
					if (success) success.style.display = 'block';
				} else {
					alert('Oops! Something went wrong.');
				}
			} catch {
				alert('Network error. Please try again.');
			}
		});
	}

	/* ---------- EM SLIDESHOWS (Bookable + Reviews) ---------- */
	const sliders = document.querySelectorAll('.em-slider');

	sliders.forEach((slider) => {
		const slides = Array.from(slider.querySelectorAll('.em-slide'));
		if (!slides.length) return;

		let idx = 0;
		slides[0].style.opacity = 1;

		const intervalMs = Number(slider.dataset.interval || 4500);
		let timer = setInterval(next, intervalMs);

		function next() {
			slides[idx].style.opacity = 0;
			idx = (idx + 1) % slides.length;
			slides[idx].style.opacity = 1;
		}

		// Optional: pause on hover
		slider.addEventListener('mouseenter', () => clearInterval(timer));
		slider.addEventListener('mouseleave', () => (timer = setInterval(next, intervalMs)));
	});
});