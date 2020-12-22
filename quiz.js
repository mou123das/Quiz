score=0;
w=100;
a=w+"px";

function Quiz(questions)
{
	this.questions=questions;
	this.index=0;
}

function Question(statement,choices,answer)
{
	this.statement=statement;
	this.choices=choices;
	this.answer=answer;
}

Quiz.prototype.getQuestion=function()
{
	return this.questions[this.index];
}

Quiz.prototype.check=function(option)
{
	current_question=this.getQuestion();
	correct_answer=current_question.answer;
	
	if(correct_answer===option)
		score++;
	this.index++;
}

function display_questions_choices()
{
	if(quiz.index===quiz.questions.length)
		showScores();
	
	else
	{
			change_Question_Number();
			document.getElementById("p").style.width=a;
			
			var element=document.getElementById("question");
			element.innerHTML=quiz.getQuestion().statement;
			var choices=quiz.getQuestion().choices;
			
			for(var i=0;i<choices.length;i++)
			{
				var element=document.getElementById("choice"+i)
				element.innerHTML=choices[i];
				guess("btn"+i,choices[i]);
			}
			
			w+=130;
			a=w+"px";
	}
};

function guess(id,option_selected)
{
	var button=document.getElementById(id);
	button.onclick=function()
	{
		quiz.check(option_selected);
		display_questions_choices();
		
	}
};

function change_Question_Number()
{
	var question_Num="Question Number: "+(quiz.index+1);
	var element=document.getElementById("qNum");
	element.innerHTML=question_Num;
}

function showScores()
{
	var message="";
	
	if(score==5)
		message="Excellent &#129351;";
	else if(score>=3 && score<=4)
		message="Good &#129352;";
	else if(score>=1 && score<=2)
		message="Satisfactory &#129353";
	else
		message="Poor";
	
	var gameOverHtml="<h1>Result</h1>";
	gameOverHtml+="<h2>Score:"+score+"</h2>";
	gameOverHtml+="<p id='per'>Performance remarks: "+message+"<p>";
	var element=document.getElementById("quiz");
	element.innerHTML=gameOverHtml;
	
};

	


var questions=[

		new Question("Which among the following is not an operating system?",["UNIX","LINUX","OS X","PITEX"],"PITEX"),
		new Question("Which among the following period is known as the era of second generation computer?",["1951 to 1959","1959 to 1965","1965 to 1971","1971 to 1980"],"1971 to 1980"),
		new Question("Who among the following had first invented microchip?",["Jack Kilby","Jack Dorsey","Ronald Rider","Greg Chesson"],"Jack Kilby"),
		new Question("Which among the following is the shortcut key to open the shortcut menu for the active window?",["Alt + F4","Ctrl + F6","Alt + Spacebar","Ctrl + Spacebar"],"Alt + Spacebar"),
		new Question("Which one of the following language is developed especially for scientific calculation?",["Pascal","Cobol","Fortran","C++"],"Fortran")
];

var quiz= new Quiz(questions);

display_questions_choices();
































