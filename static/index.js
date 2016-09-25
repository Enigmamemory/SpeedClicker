var CircleChanged = false; /*tracks if circle color has been changed*/
var TimePass = 0;
var MilliPass = 0;
var ScoreNow = 0;
var Delay = 1000;
var Firstcheck = false;
var IntervalSet
var HighScore = 0;

$(document).ready(function(){
    $("#button1").click(function(){
	var div0 = document.getElementById("game-bg");
	
	var div1 = document.createElement('div'); /*create div*/
	div1.id = "circle_00"; /*defines div's class*/
	div1.style.backgroundColor = "#FFFFFF";
	div1.onclick = Click00;
	div0.appendChild(div1); /*adds div*/

	var div2 = document.createElement('div'); /*create div*/
	div2.id = "circle_01"; /*defines div's class*/
	div2.style.backgroundColor = "#FFFFFF";
	div2.onclick = Click01;
	div0.appendChild(div2); /*adds div*/

	var div3 = document.createElement('div'); /*create div*/
	div3.id = "circle_02"; /*defines div's class*/
	div3.style.backgroundColor = "#FFFFFF";
	div3.onclick = Click02;
	div0.appendChild(div3); /*adds div*/

	var div4 = document.createElement('div'); /*create div*/
	div4.id = "circle_03"; /*defines div's class*/
	div4.style.backgroundColor = "#FFFFFF";
	div4.onclick = Click03;
	div0.appendChild(div4); /*adds div*/

	var div5 = document.createElement('div'); /*create div*/
	div5.id = "circle_04"; /*defines div's class*/
	div5.style.backgroundColor = "#FFFFFF";
	div5.onclick = Click04;
	div0.appendChild(div5); /*adds div*/

	var div6 = document.createElement('div'); /*create div*/
	div6.id = "circle_10"; /*defines div's class*/
	div6.style.backgroundColor = "#FFFFFF";
	div6.onclick = Click10;
	div0.appendChild(div6); /*adds div*/

	var div7 = document.createElement('div'); /*create div*/
	div7.id = "circle_11"; /*defines div's class*/
	div7.style.backgroundColor = "#FFFFFF";
	div7.onclick = Click11;
	div0.appendChild(div7); /*adds div*/

	var div8 = document.createElement('div'); /*create div*/
	div8.id = "circle_12"; /*defines div's class*/
	div8.style.backgroundColor = "#FFFFFF";
	div8.onclick = Click12;
	div0.appendChild(div8); /*adds div*/

	var div9 = document.createElement('div'); /*create div*/
	div9.id = "circle_13"; /*defines div's class*/
	div9.style.backgroundColor = "#FFFFFF";
	div9.onclick = Click13;
	div0.appendChild(div9); /*adds div*/

	var div10 = document.createElement('div'); /*create div*/
	div10.id = "circle_14"; /*defines div's class*/
	div10.style.backgroundColor = "#FFFFFF";
	div10.onclick = Click14;
	div0.appendChild(div10); /*adds div*/

	var div11 = document.createElement('div'); /*create div*/
	div11.id = "circle_20"; /*defines div's class*/
	div11.style.backgroundColor = "#FFFFFF";
	div11.onclick = Click20;
	div0.appendChild(div11); /*adds div*/

	var div12 = document.createElement('div'); /*create div*/
	div12.id = "circle_21"; /*defines div's class*/
	div12.style.backgroundColor = "#FFFFFF";
	div12.onclick = Click21;
	div0.appendChild(div12); /*adds div*/

	var div13 = document.createElement('div'); /*create div*/
	div13.id = "circle_22"; /*defines div's class*/
	div13.style.backgroundColor = "#FFFFFF";
	div13.onclick = Click22;
	div0.appendChild(div13); /*adds div*/

	var div14 = document.createElement('div'); /*create div*/
	div14.id = "circle_23"; /*defines div's class*/
	div14.style.backgroundColor = "#FFFFFF";
	div14.onclick = Click23;
	div0.appendChild(div14); /*adds div*/

	var div15 = document.createElement('div'); /*create div*/
	div15.id = "circle_24"; /*defines div's class*/
	div15.style.backgroundColor = "#FFFFFF";
	div15.onclick = Click24;
	div0.appendChild(div15); /*adds div*/

	var div16 = document.createElement('div'); /*create div*/
	div16.id = "circle_30"; /*defines div's class*/
	div16.style.backgroundColor = "#FFFFFF";
	div16.onclick = Click30;
	div0.appendChild(div16); /*adds div*/

	var div17 = document.createElement('div'); /*create div*/
	div17.id = "circle_31"; /*defines div's class*/
	div17.style.backgroundColor = "#FFFFFF";
	div17.onclick = Click31;
	div0.appendChild(div17); /*adds div*/

	var div18 = document.createElement('div'); /*create div*/
	div18.id = "circle_32"; /*defines div's class*/
	div18.style.backgroundColor = "#FFFFFF";
	div18.onclick = Click32;
	div0.appendChild(div18); /*adds div*/

	var div19 = document.createElement('div'); /*create div*/
	div19.id = "circle_33"; /*defines div's class*/
	div19.style.backgroundColor = "#FFFFFF";
	div19.onclick = Click33;
	div0.appendChild(div19); /*adds div*/

	var div20 = document.createElement('div'); /*create div*/
	div20.id = "circle_34"; /*defines div's class*/
	div20.style.backgroundColor = "#FFFFFF";
	div20.onclick = Click34;
	div0.appendChild(div20); /*adds div*/


	var p1 = document.createElement('p');
	p1.id = "demo3";
	div0.appendChild(p1);
	var p2 = document.createElement('p');
	p2.id = "highscore";
	div0.appendChild(p2);
	var p3 = document.createElement('p');
	p3.id = "timegone";
	div0.appendChild(p3);
	
	var element = document.getElementById("button1"); /*finds button*/
	element.parentNode.removeChild(element); /*removes button*/
    });
});

function Replay()
{
    CircleChanged = false;
    TimePass = 0;
    MilliPass = 0;
    ScoreNow = 0;
    Delay = 1000;
    Firstcheck = false;
    
    var n1 = document.getElementById("gg");
    var n2 = document.getElementById("ggg");
    var n3 = document.getElementById("ggscore");
    var n4 = document.getElementById("button2");

    n1.parentNode.removeChild(n1);
    n2.parentNode.removeChild(n2);
    n3.parentNode.removeChild(n3);
    n4.parentNode.removeChild(n4);
	
	
    var div0 = document.getElementById("game-bg");
	
    var div1 = document.createElement('div'); /*create div*/
    div1.id = "circle_00"; /*defines div's class*/
    div1.style.backgroundColor = "#FFFFFF";
    div1.onclick = Click00;
    div0.appendChild(div1); /*adds div*/

    var div2 = document.createElement('div'); /*create div*/
    div2.id = "circle_01"; /*defines div's class*/
    div2.style.backgroundColor = "#FFFFFF";
    div2.onclick = Click01;
    div0.appendChild(div2); /*adds div*/

    var div3 = document.createElement('div'); /*create div*/
    div3.id = "circle_02"; /*defines div's class*/
    div3.style.backgroundColor = "#FFFFFF";
    div3.onclick = Click02;
    div0.appendChild(div3); /*adds div*/
    
    var div4 = document.createElement('div'); /*create div*/
    div4.id = "circle_03"; /*defines div's class*/
    div4.style.backgroundColor = "#FFFFFF";
    div4.onclick = Click03;
    div0.appendChild(div4); /*adds div*/
    
    var div5 = document.createElement('div'); /*create div*/
    div5.id = "circle_04"; /*defines div's class*/
    div5.style.backgroundColor = "#FFFFFF";
    div5.onclick = Click04;
    div0.appendChild(div5); /*adds div*/
    
    var div6 = document.createElement('div'); /*create div*/
    div6.id = "circle_10"; /*defines div's class*/
    div6.style.backgroundColor = "#FFFFFF";
    div6.onclick = Click10;
    div0.appendChild(div6); /*adds div*/
    
    var div7 = document.createElement('div'); /*create div*/
    div7.id = "circle_11"; /*defines div's class*/
    div7.style.backgroundColor = "#FFFFFF";
    div7.onclick = Click11;
    div0.appendChild(div7); /*adds div*/
    
    var div8 = document.createElement('div'); /*create div*/
    div8.id = "circle_12"; /*defines div's class*/
    div8.style.backgroundColor = "#FFFFFF";
    div8.onclick = Click12;
    div0.appendChild(div8); /*adds div*/
    
    var div9 = document.createElement('div'); /*create div*/
    div9.id = "circle_13"; /*defines div's class*/
    div9.style.backgroundColor = "#FFFFFF";
    div9.onclick = Click13;
    div0.appendChild(div9); /*adds div*/
    
    var div10 = document.createElement('div'); /*create div*/
    div10.id = "circle_14"; /*defines div's class*/
    div10.style.backgroundColor = "#FFFFFF";
    div10.onclick = Click14;
    div0.appendChild(div10); /*adds div*/
    
    var div11 = document.createElement('div'); /*create div*/
    div11.id = "circle_20"; /*defines div's class*/
    div11.style.backgroundColor = "#FFFFFF";
    div11.onclick = Click20;
    div0.appendChild(div11); /*adds div*/
    
    var div12 = document.createElement('div'); /*create div*/
    div12.id = "circle_21"; /*defines div's class*/
    div12.style.backgroundColor = "#FFFFFF";
    div12.onclick = Click21;
    div0.appendChild(div12); /*adds div*/
    
    var div13 = document.createElement('div'); /*create div*/
    div13.id = "circle_22"; /*defines div's class*/
    div13.style.backgroundColor = "#FFFFFF";
    div13.onclick = Click22;
    div0.appendChild(div13); /*adds div*/
    
    var div14 = document.createElement('div'); /*create div*/
    div14.id = "circle_23"; /*defines div's class*/
    div14.style.backgroundColor = "#FFFFFF";
    div14.onclick = Click23;
    div0.appendChild(div14); /*adds div*/

    var div15 = document.createElement('div'); /*create div*/
    div15.id = "circle_24"; /*defines div's class*/
    div15.style.backgroundColor = "#FFFFFF";
    div15.onclick = Click24;
    div0.appendChild(div15); /*adds div*/

    var div16 = document.createElement('div'); /*create div*/
    div16.id = "circle_30"; /*defines div's class*/
    div16.style.backgroundColor = "#FFFFFF";
    div16.onclick = Click30;
    div0.appendChild(div16); /*adds div*/

    var div17 = document.createElement('div'); /*create div*/
    div17.id = "circle_31"; /*defines div's class*/
    div17.style.backgroundColor = "#FFFFFF";
    div17.onclick = Click31;
    div0.appendChild(div17); /*adds div*/
    
    var div18 = document.createElement('div'); /*create div*/
    div18.id = "circle_32"; /*defines div's class*/
    div18.style.backgroundColor = "#FFFFFF";
    div18.onclick = Click32;
    div0.appendChild(div18); /*adds div*/

    var div19 = document.createElement('div'); /*create div*/
    div19.id = "circle_33"; /*defines div's class*/
    div19.style.backgroundColor = "#FFFFFF";
    div19.onclick = Click33;
    div0.appendChild(div19); /*adds div*/

    var div20 = document.createElement('div'); /*create div*/
    div20.id = "circle_34"; /*defines div's class*/
    div20.style.backgroundColor = "#FFFFFF";
    div20.onclick = Click34;
    div0.appendChild(div20); /*adds div*/


    var p1 = document.createElement('p');
    p1.id = "demo3";
    div0.appendChild(p1);
    var p2 = document.createElement('p');
    p2.id = "highscore";
    div0.appendChild(p2);
    var p3 = document.createElement('p');
    p3.id = "timegone";
    div0.appendChild(p3);

    Start()

}

function Click00(){
    var check = document.getElementById("circle_00");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click01(){
    var check = document.getElementById("circle_01");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click02(){
    var check = document.getElementById("circle_02");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click03(){
    var check = document.getElementById("circle_03");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click04(){
    var check = document.getElementById("circle_04");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click10(){
    var check = document.getElementById("circle_10");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click11(){
    var check = document.getElementById("circle_11");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click12(){
    var check = document.getElementById("circle_12");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click13(){
    var check = document.getElementById("circle_13");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click14(){
    var check = document.getElementById("circle_14");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}


function Click20(){
    var check = document.getElementById("circle_20");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click21(){
    var check = document.getElementById("circle_21");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click22(){
    var check = document.getElementById("circle_22");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click23(){
    var check = document.getElementById("circle_23");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click24(){
    var check = document.getElementById("circle_24");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click30(){
    var check = document.getElementById("circle_30");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click31(){
    var check = document.getElementById("circle_31");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click32(){
    var check = document.getElementById("circle_32");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click33(){
    var check = document.getElementById("circle_33");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function Click34(){
    var check = document.getElementById("circle_34");
    checkcolor = check.style.backgroundColor;
    if (checkcolor == 'rgb(0, 0, 255)')
    {
	check.style.backgroundColor = "#FFFFFF";
	CircleChanged = false;
	ScoreNow++;
	Delay = MilliPass;
    }
}

function GameOver() {
    
    score = ScoreNow;
    
    var div0 = document.getElementById("game-bg");

    var div1 = document.getElementById("circle_00");
    var div2 = document.getElementById("circle_01");
    var div3 = document.getElementById("circle_02");
    var div4 = document.getElementById("circle_03");
    var div5 = document.getElementById("circle_04");
    var div6 = document.getElementById("circle_10");
    var div7 = document.getElementById("circle_11");
    var div8 = document.getElementById("circle_12");
    var div9 = document.getElementById("circle_13");
    var div10 = document.getElementById("circle_14");
    var div11 = document.getElementById("circle_20");
    var div12 = document.getElementById("circle_21");
    var div13 = document.getElementById("circle_22");
    var div14 = document.getElementById("circle_23");
    var div15 = document.getElementById("circle_24");
    var div16 = document.getElementById("circle_30");
    var div17 = document.getElementById("circle_31");
    var div18 = document.getElementById("circle_32");
    var div19 = document.getElementById("circle_33");
    var div20 = document.getElementById("circle_34");
    div1.parentNode.removeChild(div1);
    div2.parentNode.removeChild(div2);
    div3.parentNode.removeChild(div3);
    div4.parentNode.removeChild(div4);
    div5.parentNode.removeChild(div5);
    div6.parentNode.removeChild(div6);
    div7.parentNode.removeChild(div7);
    div8.parentNode.removeChild(div8);
    div9.parentNode.removeChild(div9);
    div10.parentNode.removeChild(div10);
    div11.parentNode.removeChild(div11);
    div12.parentNode.removeChild(div12);
    div13.parentNode.removeChild(div13);
    div14.parentNode.removeChild(div14);
    div15.parentNode.removeChild(div15);
    div16.parentNode.removeChild(div16);
    div17.parentNode.removeChild(div17);
    div18.parentNode.removeChild(div18);
    div19.parentNode.removeChild(div19);
    div20.parentNode.removeChild(div20);

    var p0 = document.getElementById("demo3");
    p0.parentNode.removeChild(p0);
    var p1 = document.getElementById("highscore");
    p1.parentNode.removeChild(p1);
    var p2 = document.getElementById("timegone");
    p2.parentNode.removeChild(p2);
    
    var head1 = document.createElement('h1');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var breaking = document.createElement("br");

    head1.id = "gg";
    var text1 = document.createTextNode("Game Over");
    head1.appendChild(text1);
    
    p1.id = "ggg";
    var text2 = document.createTextNode("Your Score is");
    p1.appendChild(text2);

    scoretext = score.toString();

    p2.id = "ggscore";
    var text3 = document.createTextNode(scoretext);
    p2.appendChild(text3);

    var button2 = document.createElement("button");
    button2.id = "button2";
    button2.className = "myButton";
    button2.onclick = Replay;
    var text4 = document.createTextNode("Play Again?");
    button2.appendChild(text4);
    

    div0.appendChild(head1);
    div0.appendChild(p1);
    div0.appendChild(p2);
    div0.appendChild(button2);

    clearInterval(IntervalSet);
    
}

function Start() {
    IntervalSet = setInterval(Timer,20);
}

function Timer() {
    choice = TimePass;
    changed = CircleChanged;
    score = ScoreNow;
    wait = Delay;
    highscore = HighScore
    document.getElementById("demo3").innerHTML = score;
    document.getElementById("timegone").innerHTML = choice;
    document.getElementById("highscore").innerHTML = highscore;
    MilliPass = MilliPass + 20;

    if(score > highscore)
    {
	HighScore = score;
    }
    
    if(MilliPass >= 30000)
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

    if((MilliPass >= 1000) && (Firstcheck == true))
    {
	if((CircleChanged == false) && (MilliPass >= wait + 100))
	{
	    First();
	}
    }
}
    
function First() {
    var choice = Math.floor(Math.random()*20); /*creates int between 0-3, inclusive */
    if (choice == 0)
    {
	var check = document.getElementById("circle_00");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 1)
    {
	var check = document.getElementById("circle_01");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 2)
    {
	var check = document.getElementById("circle_02");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 3)
    {
	var check = document.getElementById("circle_03");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 4)
    {
	var check = document.getElementById("circle_04");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 5)
    {
	var check = document.getElementById("circle_10");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 6)
    {
	var check = document.getElementById("circle_11");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 7)
    {
	var check = document.getElementById("circle_12");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 8)
    {
	var check = document.getElementById("circle_13");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 9)
    {
	var check = document.getElementById("circle_14");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 10)
    {
	var check = document.getElementById("circle_20");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 11)
    {
	var check = document.getElementById("circle_21");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 12)
    {
	var check = document.getElementById("circle_22");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 13)
    {
	var check = document.getElementById("circle_23");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 14)
    {
	var check = document.getElementById("circle_24");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 15)
    {
	var check = document.getElementById("circle_30");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 16)
    {
	var check = document.getElementById("circle_31");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 17)
    {
	var check = document.getElementById("circle_32");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 18)
    {
	var check = document.getElementById("circle_33");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else if (choice == 19)
    {
	var check = document.getElementById("circle_34");
	check.style.backgroundColor = "#0000FF";
	CircleChanged = true;
    }
    else
    {
	alert("Failed to produce int between 0-19"); /*error message*/
    }
    Firstcheck = true;
}
