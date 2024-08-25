import { ChakraProvider } from '@chakra-ui/react'
import AppRoutes from './router/AppRoutes'

const App = () => {
  return (
    <ChakraProvider disableEnvironment disableGlobalStyle>
      <AppRoutes />
    </ChakraProvider>
  )
}

export default App