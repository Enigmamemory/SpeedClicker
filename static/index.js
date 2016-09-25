var CircleChanged = false; /*tracks if circle color has been changed*/
var TimePass = 0;
var MilliPass = 0;
var Score = 0;
var Firstcheck = false

$(document).ready(function(){
    $("#button1").click(function(){
	var div1 = document.createElement('div'); /*create div*/
	div1.id = "circle_lv1_tl"; /*defines div's class*/
	div1.color = "#FFFFFF"
	document.body.appendChild(div1); /*adds div*/

	var div2 = document.createElement('div'); /*create div*/
	div2.id = "circle_lv1_tr"; /*defines div's class*/
	div2.color = "#FFFFFF"
	document.body.appendChild(div2); /*adds div*/

	var div3 = document.createElement('div'); /*create div*/
	div3.id = "circle_lv1_bl"; /*defines div's class*/
	div3.color = "#FFFFFF"
	document.body.appendChild(div3); /*adds div*/

	var div4 = document.createElement('div'); /*create div*/
	div4.id = "circle_lv1_br"; /*defines div's class*/
	div4.color = "#FFFFFF"
	document.body.appendChild(div4); /*adds div*/
	
	var element = document.getElementById("button1"); /*finds button*/
	element.parentNode.removeChild(element); /*removes button*/
    });
});

$(document).ready(function(){
    $("#circle_lv1_tl").click(function(){
	var check = document.getElementById("circle_lv1_tl");
	checkcolor = check.getAttribute("background-color");
	document.getElementById("demo3").innerHTML = checkcolor;
	if (checkcolor == "#0000FF")
	{
	    check.style.backgroundColor("#FFFFFF");
	    CircleChanged = false;
	}
    });
});

$(document).ready(function(){
    $("#circle_lv1_tr").click(function(){
	var check = document.getElementById("circle_lv1_tr");
	checkcolor = check.getAttribute("background-color");
	document.getElementById("demo3").innerHTML = checkcolor;
	if (checkcolor == "#0000FF")
	{
	    check.style.backgroundColor("#FFFFFF");
	    CircleChanged = false;
	}
    });
});

$(document).ready(function(){
    $("#circle_lv1_bl").click(function(){
	var check = document.getElementById("circle_lv1_bl");
	checkcolor = check.getAttribute("background-color");
	document.getElementById("demo3").innerHTML = checkcolor;
	if (checkcolor == "#0000FF")
	{
	    check.style.backgroundColor("#FFFFFF");
	    CircleChanged = false;
	}
    });
});

$(document).ready(function(){
    $("#circle_lv1_br").click(function(){
	var check = document.getElementById("circle_lv1_br");
	checkcolor = check.getAttribute("background-color");
	document.getElementById("demo3").innerHTML = checkcolor;
	if (checkcolor == "#0000FF")
	{
	    check.style.backgroundColor("#FFFFFF");
	    CircleChanged = false;
	}
    });
});		       

function GameOver() {
    alert("Game Over");
}

function Timer() {
    if(MilliPass % 1000 == 0)
    {
	
	TimePass++;

    }
    if((MilliPass >= 1000) && (Firstcheck == false))
    {
	First();
    }

    choice = TimePass;
    changed = CircleChanged;
    document.getElementById("demo").innerHTML = choice;
    document.getElementById("demo2").innerHTML = changed;
    MilliPass = MilliPass + 20;
    
}
    
function First() {
    var choice = Math.floor(Math.random()*4); /*creates int between 0-3, inclusive */
    if (choice == 0)
    {
	var check = document.getElementById("circle_lv1_tl");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 1)
    {
	var check = document.getElementById("circle_lv1_tr");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 2)
    {
	var check = document.getElementById("circle_lv1_bl");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 3)
    {
	var check = document.getElementById("circle_lv1_br");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else
    {
	alert("Failed to produce int between 0-3"); /*error message*/
    }
    Firstcheck = true;
}
