import Landing from "../modules/landing.js";

// ClickHandler Module
const clickHandlers = (() => {
	// Goes landing page
	const logo = (e) => {
		clearMainContent();
		Landing.loadLanding();
		loadHandlers();
	};

	// Goes to about page
	const about = (e) => {
		clearMainContent();
		console.log("About");
	};

	// Goes to menu page
	const menu = (e) => {
		clearMainContent();
		console.log("Menu");
	};

	// Goes to contact page
	const contact = (e) => {
		clearMainContent();
		console.log("Contact");
	};

	return { logo, about, menu, contact };
})();

const clearMainContent = () => {
	const contentContainer = document.querySelector("main");
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
	const menuBtn = document.querySelector(".menuBtn");
	menu.addEventListener("click", clickHandlers.menu);
	menuBtn.addEventListener("click", clickHandlers.menu);
};

const contact = () => {
	const contact = document.querySelector("#contact");
	const contactBtn = document.querySelector(".contactBtn");
	contact.addEventListener("click", clickHandlers.contact);
	contactBtn.addEventListener("click", clickHandlers.contact);
};

const loadHandlers = () => {
	logo();
	about();
	menu();
	contact();
};
export default { loadHandlers };
