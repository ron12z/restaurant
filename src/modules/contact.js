const load = () => {
	const mainDiv = document.querySelector("main");
	mainDiv.classList.add("contact");

	const contactDetails = [
		{
			mode: `Address`,
			detail: `0112 Gedli Street, Brgy. Petmalu, Ohabam City, Philippines`,
		},
		{
			mode: `Mobile`,
			detail: `+639123456789`,
		},
		{
			mode: "Facebook",
			detail: "Century Bites",
		},
		{
			mode: `Twitter`,
			detail: `@centurybites`,
		},
		{
			mode: `Instagram`,
			detail: `@centurybites`,
		},
	];

	contactDetails.forEach((item) => {
		const container = document.createElement("div");
		container.classList = "contact-details";

		const h4 = document.createElement("h4");
		h4.textContent = item.mode;

		const p = document.createElement("p");
		p.textContent = item.detail;

		container.append(h4, p);
		mainDiv.append(container);
	});
};

export default { load };
