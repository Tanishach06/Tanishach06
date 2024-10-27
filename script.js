// Data for quiz
const questions = [
    {
      question: "What is a traditional crop in this region?",
      options: ["Rice", "Corn", "Wheat", "Barley"],
      answer: 0
    },
    {
      question: "Which animal is commonly seen here?",
      options: ["Elephant", "Goat", "Lion", "Eagle"],
      answer: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Display quiz question
  function displayQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    document.querySelectorAll("#options button").forEach((button, index) => {
      button.textContent = q.options[index];
    });
  }
  
  // Select an answer
  function selectAnswer(index) {
    if (index === questions[currentQuestion].answer) {
      score++;
    }
    document.getElementById("score").textContent = "Score: " + score;
  }
  
  // Go to the next question
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      localStorage.setItem("quizScore", score);
      alert("Quiz Complete! Your score: " + score);
    }
  }
  
  // Display achievements
  function displayAchievements() {
    const achievementsList = document.getElementById("achievements-list");
    let quizScore = localStorage.getItem("quizScore") || "0";
    let storyCompleted = localStorage.getItem("storyCompleted") || "No";
    
    achievementsList.innerHTML = `
      <p>Quiz Score: ${quizScore}</p>
      <p>Story Completed: ${storyCompleted}</p>
    `;
  }
  
  // Complete story
  function completeStory() {
    localStorage.setItem("storyCompleted", "Yes");
    alert("Story completed! Achievement unlocked.");
  }
  
  // On page load
  if (window.location.pathname.includes("quiz.html")) {
    displayQuestion();
  } else if (window.location.pathname.includes("achievements.html")) {
    displayAchievements();
  }
  