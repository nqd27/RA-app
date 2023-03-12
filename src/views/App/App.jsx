import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <ChakraProvider>
      </ChakraProvider>


    </div>
  )
}

export default App
