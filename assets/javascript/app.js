//This section includes an function containing all of the questions.

function showQuestions(){

	var questions = {
		0: document.getElementById('Q1').innerHTML = "Which one of these treaties ended WW1, and blamed Germany as the aggressor of WW1?", //versailles
		1: document.getElementById('Q2').innerHTML = "Which one of these men shot and killed Lee Harvey Oswald, John F. Kennedy's killer?", //Jack Ruby
		2: document.getElementById('Q3').innerHTML = "Which one of these presidents extricated Nixon of his criminal charges due to his involvement in the Watergate scandal?", //Ford
		3: document.getElementById('Q4').innerHTML = "In 1972, which American car did Richard Nixon give to Soviet General Secretary Breshnev as a gift?", //Eldorado
		4: document.getElementById('Q5').innerHTML = "Thurgood Marshall was the first African American justice on the supreme court. Which president appointed him?", //LBJ
		5: document.getElementById('Q6').innerHTML = "Which one of these presidents launched the interstate highway system?", //ike
		6: document.getElementById('Q7').innerHTML = "Who was chiefly responsible for the formation of the first nuclear bomb?", //oppenheimer
		7: document.getElementById('Q8').innerHTML = "World War 1 was launched by which of the following events?",
}
}
function reloadClicked(){
	$("#reload").click(function() {
		window.location.reload();
});
}

//this section will initialize variables for correct, incorrect, and unanswered questions.

var correct = 0;

var incorrect = 0;

var unanswered = 0;

function showReload(){
	document.getElementById("reload").style.display="initial";
};

function checkScore() {
	var correctQ1 = document.getElementById("a1");

	var correctQ2 = document.getElementById("b3");

	var correctQ3 = document.getElementById("c1");

	var correctQ4 = document.getElementById("d2");

	var correctQ5 = document.getElementById("e4");

	var correctQ6 = document.getElementById("f2");

	var correctQ7 = document.getElementById("g1");

	var correctQ8 = document.getElementById("h3");

//----------------------------------------------

var incorrectQ11 = document.getElementById("a2");
var incorrectQ12 = document.getElementById("a3");
var incorrectQ13 = document.getElementById("a4");




	if(correctQ1.checked == true){
		correct++;
	} else if(incorrectQ11.checked == true){
		incorrect++;
	} else if(incorrectQ12.checked == true){
		incorrect++;
	}else if(incorrectQ13.checked == true){
		incorrect++;
	}else{
		unanswered++;
	};

	var incorrectQ21 = document.getElementById("b1");
	var incorrectQ22 = document.getElementById("b2");
	var incorrectQ23 = document.getElementById("b4");


	if(correctQ2.checked == true){
		correct++;
	} else if(incorrectQ21.checked == true){
		incorrect++;
	}else if(incorrectQ22.checked == true){
		incorrect++;
	}else if(incorrectQ23.checked == true) {
		incorrect++;
	}else {
		unanswered++;
	};

	var incorrectQ31 = document.getElementById("c2");
	var incorrectQ32 = document.getElementById("c3");
	var incorrectQ33 = document.getElementById("c4");

	if(correctQ3.checked == true){
		correct++;
	} else if(incorrectQ31.checked == true){
		incorrect++;
	}else if(incorrectQ32.checked == true){
		incorrect++;
	}else if(incorrectQ33.checked == true) {
		incorrect++;
	}else {
		unanswered++;
	};

	var incorrectQ41 = document.getElementById("d1");
	var incorrectQ42 = document.getElementById("d3");
	var incorrectQ43 = document.getElementById("d4");

	if(correctQ4.checked == true){
		correct++;
	} else if(incorrectQ41.checked == true){
		incorrect++;
	}else if(incorrectQ42.checked == true){
		incorrect++;
	}else if(incorrectQ43.checked == true) {
		incorrect++;
	}else {
		unanswered++;
	};

	var incorrectQ51 = document.getElementById("e1");
	var incorrectQ52 = document.getElementById("e2");
	var incorrectQ53 = document.getElementById("e3");

	if(correctQ5.checked == true){
		correct++;
	} else if(incorrectQ51.checked == true){
		incorrect++;
	}else if(incorrectQ52.checked == true){
		incorrect++;
	}else if(incorrectQ53.checked == true) {
		incorrect++;
	}else {
		unanswered++;
	};

	var incorrectQ61 = document.getElementById("f1");
	var incorrectQ62 = document.getElementById("f3");
	var incorrectQ63 = document.getElementById("f4");

	if(correctQ6.checked == true){
		correct++;
	} else if(incorrectQ61.checked == true){
		incorrect++;
	}else if(incorrectQ62.checked == true){
		incorrect++;
	}else if(incorrectQ63.checked == true) {
		incorrect++;
	}else {
		unanswered++;
	};

	var incorrectQ71 = document.getElementById("g2");
	var incorrectQ72 = document.getElementById("g3");
	var incorrectQ73 = document.getElementById("g4");

	if(correctQ7.checked == true){
		correct++;
	} else if(incorrectQ71.checked == true){
		incorrect++;
	}else if(incorrectQ72.checked == true){
		incorrect++;
	}else if(incorrectQ73.checked == true) {
		incorrect++;
	}else {
		unanswered++;
	};

	var incorrectQ81 = document.getElementById("h1");
	var incorrectQ82 = document.getElementById("h2");
	var incorrectQ83 = document.getElementById("h4");

	if(correctQ8.checked == true){
		correct++;
	} else if(incorrectQ81.checked == true){
		incorrect++;
	} else if(incorrectQ82.checked == true){
		incorrect++;
	}else if(incorrectQ83.checked == true) {
		incorrect++;
	}else {
		unanswered++;
	};

}

//This section will import the timer.

var number = 120;

function stop(){
	clearInterval(counter);
}

function timeOut(){
		showReload();
		document.getElementById("buttons").style.display="none";
		document.getElementById("header").style.color="white";
        document.getElementById("header").style.fontSize="30px";
        document.getElementById("header").innerHTML = "Although you have ran out of time, Uncle Sam is still proud of you. Here are your results.";
       	document.getElementById("correctScore").innerHTML = "Correct answers: " +correct;
       	document.getElementById("incorrectScore").innerHTML = "Incorrect answers: " +incorrect;
       	document.getElementById("unansweredScore").innerHTML = "Unanswered: " +unanswered;
      	document.getElementById("submit").style.visibility="hidden";
      	document.getElementById("showTimeLeft").style.visibility="hidden";
}

function decrement(){
      number--;
      document.getElementById("showTimeLeft").innerHTML = "Time remaining: " +number;
      if (number === 0){
        stop();
        checkScore();
        timeOut();
      } 
    }

function startTimer(){
	counter = setInterval(decrement, 1000);
	decrement();
}

function hideButton(){
	$("#start").click(function() {
		console.log("It is working")
		document.getElementById("start").style.display="none";
		document.getElementById("buttons").style.display="initial";
		showQuestions();
		startTimer();
		displaySubmitButton()

});

}

function displaySubmitButton() {
	document.getElementById("submit").style.visibility="visible";
}


function clickedSubmit() {
	$("#submit").click(function() {
		stop();
		showReload();
		checkScore();
		document.getElementById("buttons").style.display="none";
		document.getElementById("showTimeLeft").style.visibility="hidden";
		document.getElementById("header").style.color="white";
        document.getElementById("header").style.fontSize="30px";
        document.getElementById("header").innerHTML = "Thanks for playing U.S. History Trivia. Here are your results:";
       	document.getElementById("correctScore").innerHTML = "Correct answers: " +correct;
       	document.getElementById("incorrectScore").innerHTML = "Incorrect answers: " +incorrect;
       	document.getElementById("unansweredScore").innerHTML = "Unanswered: " +unanswered;
      	document.getElementById("submit").style.visibility="hidden";
      })
	}





clickedSubmit();
hideButton();
reloadClicked();
