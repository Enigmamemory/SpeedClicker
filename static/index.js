$(document).ready(function(){
    $("#button1").click(function(){
	var div = document.createElement('div'); /*create div*/
	div.id = "circle_lv1_tl"; /*defines div's class*/
	document.body.appendChild(div); /*adds div*/
	var element = document.getElementById("button1"); /*finds button*/
	element.parentNode.removeChild(element); /*removes button*/
    });
});
