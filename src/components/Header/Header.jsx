import { Box, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import './header.css'

const Header = () => {
    return (
        <Box p='1.4em 0' boxShadow='0 0 50px -30px #1a1a1a'> { /* esto es un div */}
            <HStack justifyContent='space-between' w='80%' m='0 auto' alignItems='center'> { /* esto es un div con display flex y direction: row */}
                <Box fontSize='20px'>Veterinaria</Box>

                <HStack gap='1em'>
                    <Link to='/' className="link">Inicio</Link>
                    <Link to='/mascotas' className="link">Mascotas</Link>
                    <Link to='/nosotros' className="link">Nosotros</Link>
                </HStack>
            </HStack>
        </Box>
    )
}

export default Header