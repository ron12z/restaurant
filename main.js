(()=>{"use strict";const t=()=>{document.querySelector("#content").innerHTML='\n    <header>\n\t\t\t\t<div class="logo">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\n\t\t\t\t\t\t<path\n\t\t\t\t\t\t\tfill="currentColor"\n\t\t\t\t\t\t\td="M1 22C1 22.54 1.45 23 2 23H15C15.56 23 16 22.54 16 22V21H1V22M8.5 9C4.75 9 1 11 1 15H16C16 11 12.25 9 8.5 9M3.62 13C4.73 11.45 7.09 11 8.5 11S12.27 11.45 13.38 13H3.62M1 17H16V19H1V17M18 5V1H16V5H11L11.23 7H20.79L19.39 21H18V23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5H18Z"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<h1>CENTURY BITES</h1>\n\t\t\t\t</div>\n\t\t\t\t<nav class="primary-nav">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li id="about">About</li>\n\t\t\t\t\t\t<li id="menu">Menu</li>\n\t\t\t\t\t\t<li id="contact">Contact</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</header>\n\t\t\t<main>\n\t\t\t\t<div class="intro-text">\n\t\t\t\t\t<h2>We provide the best food for you</h2>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tLorem ipsum, dolor sit amet consectetur adipisicing elit. In\n\t\t\t\t\t\tadipisci rerum, ad expedita laudantium eaque fuga laboriosam\n\t\t\t\t\t\tveritatis cupiditate exercitationem amet ratione ex. Quis, dolorum.\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class="intro-buttons">\n\t\t\t\t\t\t<button class="menuBtn">Menu</button>\n\t\t\t\t\t\t<button class="contactBtn">Contact</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="intro-image">\n\t\t\t\t\t<div class="intro-image-container">\n\t\t\t\t\t\t<img\n\t\t\t\t\t\t\tsrc="../assets/images/pexels-volkan-vardar-3887985 1.png"\n\t\t\t\t\t\t\talt=""\n\t\t\t\t\t\t\tclass="main"\n\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</main>\n\t\t\t<footer><p>Created by @aarontalua</p></footer>\n    '},n=n=>{a(),t(),c()},e=t=>{a(),console.log("About")},o=t=>{a(),console.log("Menu")},i=t=>{a(),console.log("Contact")},a=()=>{document.querySelector("main").innerHTML=""},c=()=>{document.querySelector(".logo").addEventListener("click",n),document.querySelector("#about").addEventListener("click",e),(()=>{const t=document.querySelector("#menu"),n=document.querySelector(".menuBtn");t.addEventListener("click",o),n.addEventListener("click",o)})(),(()=>{const t=document.querySelector("#contact"),n=document.querySelector(".contactBtn");t.addEventListener("click",i),n.addEventListener("click",i)})()},r={loadHandlers:c};t(),r.loadHandlers()})();