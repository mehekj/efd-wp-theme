function toggleMenu() {
	const navLinks = document.querySelector("#nav-links");
	const openMenu = document.querySelector("#open-menu");
	const closeMenu = document.querySelector("#close-menu");

	if (navLinks.classList.contains("hidden")) {
		navLinks.classList.remove("hidden");
		openMenu.classList.add("hidden");
		closeMenu.classList.remove("hidden");
	} else {
		navLinks.classList.add("hidden");
		openMenu.classList.remove("hidden");
		closeMenu.classList.add("hidden");
	}
}
