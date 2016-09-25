var CircleChanged = false; /*tracks if circle color has been changed*/
var TimePass = 0;
var MilliPass = 0;
var Score = 0;
var Delay = 1000;
var Firstcheck = false
var IntervalSet

$(document).ready(function(){
    $("#button1").click(function(){
	var div1 = document.createElement('div'); /*create div*/
	div1.id = "circle_lv1_tl"; /*defines div's class*/
	div1.style.backgroundColor = "#FFFFFF";
	div1.onclick = Clicktl;
	document.body.appendChild(div1); /*adds div*/

	var div2 = document.createElement('div'); /*create div*/
	div2.id = "circle_lv1_tr"; /*defines div's class*/
	div2.style.backgroundColor = "#FFFFFF";
	div2.onclick = Clicktr;
	document.body.appendChild(div2); /*adds div*/

	var div3 = document.createElement('div'); /*create div*/
	div3.id = "circle_lv1_bl"; /*defines div's class*/
	div3.style.backgroundColor = "#FFFFFF";
	div3.onclick = Clickbl;
	document.body.appendChild(div3); /*adds div*/

	var div4 = document.createElement('div'); /*create div*/
	div4.id = "circle_lv1_br"; /*defines div's class*/
	div4.style.backgroundColor = "#FFFFFF";
	div4.onclick = Clickbr;
	document.body.appendChild(div4); /*adds div*/

	var p1 = document.createElement('p');
	p1.id = "demo3";
	document.body.appendChild(p1);
	
	var element = document.getElementById("button1"); /*finds button*/
	element.parentNode.removeChild(element); /*removes button*/
    });
});

function Clicktl(){
    var check = document.getElementById("circle_lv1_tl");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	Score++;
	Delay = MilliPass;
    }
}

function Clicktr(){
    var check = document.getElementById("circle_lv1_tr");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	Score++;
	Delay = MilliPass;
    }
}

function Clickbl(){
    var check = document.getElementById("circle_lv1_bl");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	Score++;
	Delay = MilliPass;
    }
}

function Clickbr(){
    var check = document.getElementById("circle_lv1_br");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	Score++;
	Delay = MilliPass;
    }
}

function GameOver() {
    clearInterval(IntervalSet);
    var div1 = document.getElementById("circle_lv1_tl");
    var div2 = document.getElementById("circle_lv1_tr");
    var div3 = document.getElementById("circle_lv1_bl");
    var div4 = document.getElementById("circle_lv1_br");
    div1.parentNode.removeChild(div1);
    div2.parentNode.removeChild(div2);
    div3.parentNode.removeChild(div3);
    div4.parentNode.removeChild(div4);
    
    var head1 = document.createElement('h1');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');

    head1.id = "gg";
    p1.id = "gg";
    p2.id = "gg";
    
}

function Start() {
    IntervalSet = setInterval(Timer,20);
}

function Timer() {
    if(MilliPass >= 3000)
    {
	GameOver();
    }
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
    score = Score
    wait = Delay
    document.getElementById("demo").innerHTML = choice;
    document.getElementById("demo2").innerHTML = changed;
    document.getElementById("demo3").innerHTML = score;
    MilliPass = MilliPass + 20;

    if((MilliPass >= 1000) && (Firstcheck == true))
    {
	if((CircleChanged == false) && (MilliPass >= wait + 100))
	{
	    First();
	}
    }
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
