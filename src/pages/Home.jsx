import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import useMascotas from "../hooks/useMascotas"

const Home = () => {
    // el hook que almacena las mascotas
    const [mascotas, setMascotas] = useState([])

    // el hook que trae las mascotas desde la base de datos
    const { get } = useMascotas()
  
    // cargando las mascotas
    useEffect(() => {
      (async () => {
        const data = await get() // obtendo los datos de las mascotas
        setMascotas(data) // asignando los datos
      })()
    }, [])
    
  return (
    <Box height='90vh'>
      {
        mascotas.map(m => (
          <Box key={m.id} >{ m.name }</Box>
        ))
      }
    </Box>
  )
}

export default Home