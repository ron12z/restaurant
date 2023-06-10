const load = () => {
	const mainDiv = document.querySelector("main");
	mainDiv.classList.add("about");

	const wrapper = document.createElement("div");
	wrapper.classList = "wrapper";

	const title = document.createElement("h2");
	title.textContent = "Who are we?";

	const aboutUs = document.createElement("p");
	aboutUs.textContent = `From the leading company Century Knights, we present to you our best
	in town restaurant, Century Bites. Lorem ipsum dolor sit, amet
	consectetur adipisicing elit. Impedit doloribus ut cum tempora.
	Assumenda, enim? Lorem ipsum dolor, sit amet consectetur adipisicing
	elit. Animi, esse debitis repudiandae blanditiis voluptas eius.`;

	mainDiv.append(wrapper);
	wrapper.append(title, aboutUs);
};

export default { load };
