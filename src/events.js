import Landing from "./landing.js";
import About from "./about.js";
import Menu from "./menu.js";
import Contact from "./contact.js";

// ClickHandler Module for Tab-Switching
const clickHandlers = (() => {
	// Goes landing page
	const logo = (e) => {
		removeActive();
		clearMainContent();
		Landing.load();

		const home = document.querySelector("#home");
		home.classList = "active";
	};

	// Goes to about page
	const about = (e) => {
		removeActive();
		clearMainContent();
		About.load();

		const about = document.querySelector("#about");
		about.classList = "active";
	};

	// Goes to menu page
	const menu = (e) => {
		removeActive();
		clearMainContent();
		Menu.load();

		const menu = document.querySelector("#menu");
		menu.classList = "active";
	};

	// Goes to contact page
	const contact = (e) => {
		removeActive();
		clearMainContent();
		Contact.load();

		const contact = document.querySelector("#contact");
		contact.classList = "active";
	};

	return { logo, about, menu, contact };
})();

// Helper functions
const clearMainContent = () => {
	const contentContainer = document.querySelector("main");
	contentContainer.classList = "";
	contentContainer.innerHTML = "";
};

const removeActive = () => {
	const home = document.querySelector("#home");
	const about = document.querySelector("#about");
	const menu = document.querySelector("#menu");
	const contact = document.querySelector("#contact");

	[home, about, menu, contact].forEach((nav) => {
		nav.classList = "";
	});
};

const logo = () => {
	const logo = document.querySelector(".logo");
	const home = document.querySelector("#home");
	logo.addEventListener("click", clickHandlers.logo);
	home.addEventListener("click", clickHandlers.logo);
};

const about = () => {
	const about = document.querySelector("#about");
	about.addEventListener("click", clickHandlers.about);
};

const menu = () => {
	const menu = document.querySelector("#menu");
	menu.addEventListener("click", clickHandlers.menu);

	const menuBtn = document.querySelector(".menuBtn");
	if (menuBtn) menuBtn.addEventListener("click", clickHandlers.menu);
};

const contact = () => {
	const contact = document.querySelector("#contact");
	contact.addEventListener("click", clickHandlers.contact);

	const contactBtn = document.querySelector(".contactBtn");
	if (contactBtn) contactBtn.addEventListener("click", clickHandlers.contact);
};

const loadHandlers = () => {
	logo();
	about();
	menu();
	contact();
};
export default { loadHandlers };
