import client from 'providers/fetchClient'

const API_QUESTIONS_ENDPOINT = 'api.php?amount=10'

export const getQuestions = (category, difficulty) =>
  client.get(API_QUESTIONS_ENDPOINT, {
    params: {
      category: category,
      difficulty: difficulty,
      type: 'multiple'
    }
  })
