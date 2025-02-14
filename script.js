//your JS code here. If required.
let btn=document.querySelector("input");

btn.addEventListener("click",()=>{
	const index = colorSelect.selectedIndex;
	colorSelect.remove(index);
});