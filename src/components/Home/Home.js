import React, { useState, useEffect } from 'react'
import { Flex, Text, Button, Spinner, Box } from '@chakra-ui/react'

import { getQuestions } from 'services/quiz'
import { Question } from 'components'

const Home = () => {
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    fetchQuestions('15', 'easy')
  }, [])

  const fetchQuestions = async (category, difficulty) => {
    try {
      setisLoading(true)
      const {
        data: { results }
      } = await getQuestions(category, difficulty)
      setQuestions(results)
    } catch (err) {
      console.log(err)
    } finally {
      setisLoading(false)
    }
  }

  const handleAddPoint = () => {
    const newScore = score + 1
    setScore(newScore)
  }

  if (isLoading)
    return (
      <Flex w='100%' minH='100vh' justify='space-evenly' bg='brand.800' align='center'>
        <Spinner size='xl' color='brand.500' />
      </Flex>
    )

  return (
    <Flex w='100%' minH='100vh' justify='space-evenly' bg='brand.800' align='center'>
      <Flex w='100%' align='center' direction='column' p='48px 256px'>
        <Text
          color='brand.200'
          textShadow='2px 2px 12px rgba(255,255,255,0.7)'
          fontWeight='400'
          fontSize='6xl'
          textAlign='center'
          mb='64px'
          fontFamily='Bebas Neue'
          letterSpacing='4px'
        >
          feelin' quizzy?
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
        <Text color='brand.0' fontWeight='600' fontSize='5xl' textAlign='center'>
          {score}
          <Box as='span' fontSize='2xl'>
            {' '}
            / 10
          </Box>
        </Text>
        <Button minW='100px' mt='32px' bg='brand.500' onClick={() => window.location.reload()}>
          Try again with different questions!
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
