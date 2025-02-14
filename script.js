//your JS code here. If required.
let select=document.getElementById("colorSelect");

select.addEventListener("click",()=>{
	const index = select.selectedIndex;
	select.remove(index);
});