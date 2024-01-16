function toggleMenu() {
	const navLinks = document.querySelector(".nav-links");
	if (navLinks.classList.contains("active")) {
		navLinks.classList.remove("active");
	} else {
		navLinks.classList.add("active");
	}
}
