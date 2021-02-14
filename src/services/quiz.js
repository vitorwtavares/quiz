import client from 'providers/fetchClient'

const API_QUESTIONS_ENDPOINT = 'api.php?amount=10'

export const getQuestions = (category, difficulty) =>
  client.get(API_QUESTIONS_ENDPOINT, {
    params: {
      encode: 'url3986',
      category: category,
      difficulty: difficulty,
      type: 'multiple'
    }
  })
