import { useState, useEffect } from 'react'
import { Flex, Text, Grid } from '@chakra-ui/react'

const Question = ({ data, questionIndex, handleAddPoint, ...props }) => {
  const [options, setOptions] = useState([])
  const [correct, setCorrect] = useState('')
  const [question, setQuestion] = useState('')
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState('')

  useEffect(() => {
    setQuestion(decodeURIComponent(data?.question))

    setCorrect(decodeURIComponent(data?.correct_answer))
    const opts = [data?.correct_answer, ...data?.incorrect_answers]
      .sort()
      .map(e => decodeURIComponent(e))
    setOptions(opts)
  }, [])

  const handleSelectOption = selectedOption => {
    setSelectedAnswer(selectedOption)
    if (selectedOption === correct) {
      setAnsweredCorrectly(true)
      handleAddPoint()
    } else {
      setAnsweredCorrectly(false)
    }
  }

  const handleOptionBackgroundColor = option => {
    if (selectedAnswer === option) {
      if (answeredCorrectly === true) return 'brand.600'
      if (answeredCorrectly === false) return 'brand.400'
    }
    if (selectedAnswer !== '' && correct === option) {
      return 'brand.600'
    }
    return 'brand.800'
  }

  return (
    <Flex
      w='768px'
      minH='400px'
      bg='brand.900'
      border='none'
      borderRadius='10px'
      p='32px'
      mb='32px'
      direction='column'
      {...props}
    >
      <Flex
        w='40px'
        h='40px'
        borderRadius='36px'
        bg='brand.500'
        mx='auto'
        justify='center'
        align='center'
        mb='16px'
      >
        <Text color='brand.800' textAlign='center' fontWeight='700' fontSize='2xl'>
          {questionIndex + 1}
        </Text>
      </Flex>
      <Text color='brand.0' w='100%' textAlign='center' fontWeight='600' fontSize='lg' mb='48px'>
        {question}
      </Text>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {options.map((option, index) => (
          <Flex
            key={index}
            bg={() => handleOptionBackgroundColor(option)}
            p='48px 16px'
            justify='center'
            align='center'
            cursor={answeredCorrectly === null && 'pointer'}
            borderRadius={index % 2 === 0 ? '10px 0 10px 0' : ' 0 10px 0 10px'}
            _hover={answeredCorrectly === null && { bg: 'brand.700' }}
            onClick={() => answeredCorrectly === null && handleSelectOption(option)}
          >
            <Text color='brand.0' fontWeight='600' fontSize='2xl' textAlign='center'>
              {option}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Flex>
  )
}

export default Question
