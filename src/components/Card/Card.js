import React from 'react'
import { Flex } from '@chakra-ui/react'

const Card = ({ children, ...props }) => (
  <Flex
    m='12px'
    p='12px'
    w='300px'
    h='350px'
    boxShadow='3px 3px 10px rgba(0,0,0,0.3)'
    borderRadius='10px'
    {...props}
  >
    {children}
  </Flex>
)

export default Card
