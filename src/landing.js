import Events from "./events.js";

const load = () => {
	const contentContainer = document.querySelector("#content");

	contentContainer.innerHTML = `
    <header>
				<div class="logo">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M1 22C1 22.54 1.45 23 2 23H15C15.56 23 16 22.54 16 22V21H1V22M8.5 9C4.75 9 1 11 1 15H16C16 11 12.25 9 8.5 9M3.62 13C4.73 11.45 7.09 11 8.5 11S12.27 11.45 13.38 13H3.62M1 17H16V19H1V17M18 5V1H16V5H11L11.23 7H20.79L19.39 21H18V23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5H18Z"
						/>
					</svg>
					<h1>CENTURY BITES</h1>
				</div>
				<nav class="primary-nav">
					<ul>
						<li id="home" class="active">Home</li>
						<li id="about">About</li>
						<li id="menu">Menu</li>
						<li id="contact">Contact</li>
					</ul>
				</nav>
			</header>
			<main class="main">
				<div class="intro-text">
					<h2>We provide the best food for you</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
						adipisci rerum, ad expedita laudantium eaque fuga laboriosam
						veritatis cupiditate exercitationem amet ratione ex. Quis, dolorum.
					</p>
					<div class="intro-buttons">
						<button class="menuBtn">Menu</button>
						<button class="contactBtn">Contact</button>
					</div>
				</div>
				<div class="intro-image">
					<div class="intro-image-container">
						<img
							src="./assets/images/pexels-volkan-vardar-3887985 1.png"
							alt=""
							class="main"
						/>
					</div>
				</div>
			</main>
			<footer><p>Created by @aarontalua</p></footer>
    `;

	Events.loadHandlers();
};

// load(); //Initial Landing
export default { load };
