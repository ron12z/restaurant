import Landing from "../modules/landing.js";
import About from "../modules/about.js";
import Menu from "../modules/menu.js";
import Contact from "../modules/contact.js";

// ClickHandler Module for Tab-Switching
const clickHandlers = (() => {
	// Goes landing page
	const logo = (e) => {
		clearMainContent();
		console.log("logo");
		Landing.load();
	};

	// Goes to about page
	const about = (e) => {
		clearMainContent();
		About.load();
		console.log("About");
	};

	// Goes to menu page
	const menu = (e) => {
		clearMainContent();
		Menu.load();
		console.log("Menu");
	};

	// Goes to contact page
	const contact = (e) => {
		clearMainContent();
		Contact.load();
		console.log("Contact");
	};

	return { logo, about, menu, contact };
})();

const clearMainContent = () => {
	const contentContainer = document.querySelector("main");
	contentContainer.classList = "";
	contentContainer.innerHTML = "";
};

const logo = () => {
	const logo = document.querySelector(".logo");
	logo.addEventListener("click", clickHandlers.logo);
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
