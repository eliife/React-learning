

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (difficulty, amount) => {
  const response = await fetch(
    `https://the-trivia-api.com/v2/questions?limit=${amount}&difficulty=${difficulty}`
  );

  const data = await response.json();

  return data.map((dt) => ({
    question: dt.question.text,
    correct_answer: dt.correctAnswer,
    answers: shuffleArray([
      ...dt.incorrectAnswers,
      dt.correctAnswer,
    ]),
  }));
};