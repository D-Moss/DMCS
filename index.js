const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');
let currentIndex = 0;

const cardWidth = 480 + 32; // card + gap
const totalCards = document.querySelectorAll('.experience-card').length;
const maxIndex = totalCards - 2; // 4 - 2 = 2

nextBtn.addEventListener('click', () => {
	if (currentIndex < maxIndex) {
		currentIndex++;
		track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

		// Disable next button if we've reached the end
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

		// Re-enable next button when moving back
		nextBtn.disabled = false;
		nextBtn.style.opacity = 1;
		nextBtn.style.cursor = 'pointer';
	}
});

//FORM CONTACT SECTION
const form = document.querySelector("form");
const success = document.getElementById("form-success");
form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const data = new FormData(form);
	const response = await fetch(form.action, {
		method: "POST",
		body: data,
		headers: { Accept: "application/json" },
	});

	if (response.ok) {
		form.reset();
		success.style.display = "block";
	} else {
		alert("Oops! Something went wrong.");
	}
});