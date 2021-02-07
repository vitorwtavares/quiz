import React, { useState, useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'

import { getQuestions } from 'services/quiz'
import { Card } from 'components'

const Home = () => {
  const [questions, setQuestions] = useState([])

  const categories = [
    { title: 'quiz 1', code: '1' },
    { title: 'quiz 2', code: '2' },
    { title: 'quiz 3', code: '3' },
    { title: 'quiz 4', code: '4' }
  ]

  useEffect(() => {
    fetchQuestions('15', 'easy')
  }, [])

  const fetchQuestions = async (category, difficulty) => {
    const {
      data: { results }
    } = await getQuestions(category, difficulty)
    setQuestions(results)
  }

  return (
    <Flex w='100%' h='100vh' justify='space-evenly' align='center'>
      {categories.map((e, index) => (
        <Card>
          <Text>{e.title}</Text>
        </Card>
      ))}
    </Flex>
  )
}

export default Home
