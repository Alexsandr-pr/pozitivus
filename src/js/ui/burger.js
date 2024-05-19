function burgerMenu(){
	const header = document.querySelector(".header");
	const buttonBurger = document.querySelector(".icon-menu");

	buttonBurger.addEventListener("click", ()=> {
		if(header.classList.contains("active")) {
			header.classList.remove("active");
			document.body.style.overflow = "";
		} else {
			header.classList.add("active");
			document.body.style.overflow = "hidden";
		}
	});
}
export default burgerMenu;