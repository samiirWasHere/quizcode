// select all elements
const heading = document.getElementById("heading");
const start = document.getElementById("start");
const instructions = document.getElementById("instructions");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "What does HTML stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "A"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    },{
        question : "What does CSS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "None of these",
        choiceB : "Correct",
        choiceC : "Wrong",
		choiceD : "Wrong",
        correct : "B"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
		choiceD : "None of these",
        correct : "C"
    },{
        question : "What does JS stand for?",
        imgSrc : "img/mcqs.png",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "WrongNone of these",
		choiceD : "None of these",
        correct : "D"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 30;
const questionTime = 0; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / 30;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
	heading.style.display = "none";
    start.style.display = "none";
	instructions.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count >= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit - "px";
         count--;
    }else{
    	 if(runningQuestion==0)
    	 {
         count = 300;
         }else{
         count = 30;
         }
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }

    if(runningQuestion==0)
    {
        count = 300;
    }else{
         count = 30;
    }

    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#27AE60";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#C0392B";
}

// score render
function scoreRender(){
	
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 75) ? "img/pass.png" :
              "img/fail.png";
    scoreDiv.innerHTML = "Result:";
    scoreDiv.innerHTML = "<img src="+ img +">";
	scoreDiv.innerHTML += "<p>ㅤㅤPercentage:"+ scorePerCent +"% <center>ㅤ</center> <center>*Marks:" + score + "/" + questions.length + "</center></p>";
	
}





















