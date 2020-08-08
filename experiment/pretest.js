/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Which function is used to take space separated inputs in a list?",  ///// Write the question inside double quotes
      answers: {
        a: "split ()",                  ///// Write the option 1 inside double quotes
        b: "lambda",                  ///// Write the option 2 inside double quotes
        c: "map()",                  ///// Write the option 3 inside double quotes
        d: "input()"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"              ///// Write the correct option inside double quotes
    },

    {
     question: "Which keyword is used for function in python?",  ///// Write the question inside double quotes
      answers: {
        a: "function",                  ///// Write the option 1 inside double quotes
        b: "def",                  ///// Write the option 2 inside double quotes
        c: "define",                  ///// Write the option 3 inside double quotes
        d: "fun"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
   {
      question: "Which function is used to calculate the length of list?",     ///// Write the question inside double quotes
      answers: {
        a: "len()",                   ///// Write the option 1 inside double quotes
        b: "range()",                 ///// Write the option 2 inside double quotes
        c: "push()",                  ///// Write the option 3 inside double quotes
        d: "pop()"                    ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"              ///// Write the correct option inside double quotes
    },
    
    {
      question: "______ refers to the mathematical function?",                ///// Write the question inside double quotes
      answers: {
      answers: {
        a: "add",                     ///// Write the option 1 inside double quotes            
        b: "power",                   ///// Write the option 2 inside double quotes
        c: "sqrt",                    ///// Write the option 3 inside double quotes
        d: "rhombus"                  ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"               ///// Write the correct option inside double quotes
    },
    
    {
      question: "Which is not a data type in python?",                ///// Write the question inside double quotes
      answers: {
        a: "integer",                     ///// Write the option 1 inside double quotes            
        b: "tuple",                   ///// Write the option 2 inside double quotes
        c: "list",                    ///// Write the option 3 inside double quotes
        d: "char"                  ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"               ///// Write the correct option inside double quotes
    },
    
   

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */

    
  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
