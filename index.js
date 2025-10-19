const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');
let currentIndex = 0;

const cardWidth = 500 + 32; // card + gap
const totalCards = document.querySelectorAll('.experience-card').length;
const maxIndex = Math.ceil(totalCards / 2) - 1;

nextBtn.addEventListener('click', () => {
	if (currentIndex < maxIndex) {
		currentIndex++;
		track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
	}
});

prevBtn.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--;
		track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
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