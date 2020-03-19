function ajaxRequest(e,t,n,a){let s=new XMLHttpRequest;s.open(e,t,!0),"POST"==e&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){if(4==s.readyState&&200==s.status){let e=s.responseText;a(e)}},s.send(n)}
document.addEventListener("DOMContentLoaded", function(){

    console.log("yeet");
    // Quiz
    var quizURL = "https://opentdb.com/api.php?amount=50";
    ajaxRequest("POST", quizURL, null, function(response){
        var data = JSON.parse(response);
        console.log("response", data);
        questions = data.results;

        var i = 0;
        setInterval(function(){
            console.log("New Question!");

            // Response
            var qDifficulty = questions[i].difficulty;
            var qCategory = questions[i].category;
            var qText = questions[i].question;
            var qCorrect = questions[i].correct_answer;
            var qIncorrect = questions[i].incorrect_answers;

            // Elements
            var textDiff = document.querySelector(".quiz-diff");
            var textCate = document.querySelector(".quiz-category");
            var textQ = document.querySelector(".quiz-question-text");
            // Set Text
            textDiff.innerText = qDifficulty;
            textCate.innerText =  qCategory;
            textQ.innerHTML = qText;


            // Questions
            var questionBlock = document.querySelector(".quiz-options");
            questionBlock.innerHTML = "";

            var el = document.createElement("div");
            el.classList.add("opt");
            el.id = "yeet";
            questionBlock.appendChild(el);
            el.innerHTML = qCorrect;
    
            for (var o=0;o<qIncorrect.length;o++){

                var el = document.createElement("div");
                el.classList.add("opt");
                questionBlock.appendChild(el);
                el.innerHTML = qIncorrect[o];
        
            }

            var options = document.querySelectorAll(".opt");
            for (var t=0;t<options.length;t++){
                
                var num = Math.floor(Math.random() * 20) + 1;
                console.log("optioon = ", options[t], num);
                options[t].style.order = num;
            }
            
            waterLevel(0);

            setTimeout(function(){
                var correctOpt = document.querySelector("#yeet");
                correctOpt.classList.add("correct");
                waterLevel(100);
            }, 20000)

            i++;

            if (i >= 50){
                console.log("Limit reached!, restarting...");
                location.reload();
            }
        },40000);
    });
});

// Water Level
function waterLevel(level){
    console.log("level", level);
    var water = document.querySelector(".water");
    
    if (level === undefined){
        // Random Water Level
        var waterLevel = Math.floor(Math.random() * 100) + 1 + '%'
        console.log("water level", waterLevel);
        water.style.height = waterLevel;
    } else {
        // Set water level 
        var waterLevel = level + "%";
        console.log("water level", waterLevel);
        water.style.height = waterLevel;
    }
}

// Shuffle Array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}