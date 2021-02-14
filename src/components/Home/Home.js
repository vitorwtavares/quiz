import React, { useState, useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'

import { getQuestions } from 'services/quiz'
import { Question } from 'components'

const Home = () => {
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)

  useEffect(() => {
    fetchQuestions('15', 'easy')
  }, [])

  const fetchQuestions = async (category, difficulty) => {
    const {
      data: { results }
    } = await getQuestions(category, difficulty)
    setQuestions(results)
  }

  const handleAddPoint = () => {
    const newScore = score + 1
    setScore(newScore)
  }

  return (
    <Flex w='100%' minH='100vh' justify='space-evenly' bg='brand.800' align='center'>
      <Flex w='100%' align='center' direction='column' p='48px 256px'>
        <Text
          color='brand.200'
          textShadow='2px 2px 12px #fff'
          fontWeight='400'
          fontSize='6xl'
          textAlign='center'
          mb='64px'
          fontFamily='Helvetica'
        >
          do you know games?
        </Text>
        {questions.map((e, index) => (
          <Question
            key={index}
            questionIndex={index}
            data={e}
            score={score}
            handleAddPoint={handleAddPoint}
          />
        ))}
        <Text color='brand.0' fontWeight='400' fontSize='2xl' textAlign='center'>
          Your score:
        </Text>
        <Text color='brand.0' fontWeight='600' fontSize='2xl' textAlign='center'>
          {score} / 10
        </Text>
      </Flex>
    </Flex>
  )
}

export default Home
