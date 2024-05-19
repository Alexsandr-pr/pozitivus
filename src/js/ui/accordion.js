

//  data-spoller-trigger дата атрибут блоку на котором должен идти клик
// data-spollers родительский блок, оболочка меню аккордеон
// data-spollers-content  контент спойлера


const accordion = () => {
	const trigger = document.querySelectorAll("[data-spoller-trigger]");   
	trigger.forEach(item => {
		item.addEventListener("click", (e)=> {
				const icon = item.children[1];
				const parent = item.parentElement;
				const content = item.nextElementSibling;
				parent.classList.toggle("active");
				if(parent.classList.contains("active")) {
					icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="58" height="59" viewBox="0 0 58 59" fill="none"><circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/><path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black"/></svg>';
					content.style.maxHeight = content.scrollHeight + "px";
				} else {
					content.style.maxHeight = 0;
					icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><circle cx="15" cy="15" r="14.5" fill="#F3F3F3" stroke="#191A23"/><path d="M13.2429 21.2478V16.2202H8.27734V13.303H13.2429V8.27539H16.2842V13.303H21.2498V16.2202H16.2842V21.2478H13.2429Z" fill="#191A23"/></svg>';
				}
		});
	});
};
export default accordion;