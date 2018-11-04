$(document).ready(function() {

    var questions = [{
        "question": "Who was Ross's second wife?",
        "option1": "Susan",
        "option2": "Carol",
        "option3": "Emily",
        "option4": "Rachel",
        "answer": "Emily",
    }, {
        "question": "What was the name of the 'twin' Joey hired for an identical twin study?",
        "option1": "Carl",
        "option2": "Steve",
        "option3": "Tony",
        "option4": "Rex",
        "answer": "Carl",
    }, {
        "question": "What did Monica make when she was trying to get over Richard?",
        "option1": "Cookies",
        "option2": "Jam",
        "option3": "Chocolates",
        "option4": "Pies",
        "answer": "Jam",
    }, {
        "question": "What was the name of Rachel's fiancé that she left at the altar?",
        "option1": "John",
        "option2": "Louis",
        "option3": "Marty",
        "option4": "Barry",
        "answer": "Barry",
    }]

    function loadQuestion() {
        var i = 0;
        for(i=0; i < questions.length; i++) {
            var $currentQuestion = $('<div>');
            var $opt1 = $('<button>');
            $opt1.addClass("answerOpt");
            var $opt2 = $('<button>');
            $opt2.addClass("answerOpt");
            var $opt3 = $('<button>');
            $opt3.addClass("answerOpt");
            var $opt4 = $('<button>');
            $opt4.addClass("answerOpt");


            $currentQuestion.html(questions[i].question);
            $opt1.html(questions[i].option1);
            $opt2.html(questions[i].option2);
            $opt3.html(questions[i].option3);
            $opt4.html(questions[i].option4);

            loadTimer();
            $('#question-appears-here').append($currentQuestion, $opt1, $opt2, $opt3, $opt4);
        }
    }

    var timerNumber = 16;
    var intervalId = "";


    function loadTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        timerNumber--;
        $('#timerDisplay').html("<h3>" + "Time remaining :" + timerNumber + "</h3>");
        if(timerNumber === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }


    $('#startButton').click(function(){
        $('#startButton').hide();
    })

    $(document).on('click', '.start', loadQuestion);

    console.log(questions);


    
});
