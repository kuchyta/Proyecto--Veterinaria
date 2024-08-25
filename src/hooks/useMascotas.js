const useMascotas = () => {
    const API = 'http://localhost:3000/mascotas'

    async function get() {
        const data = await fetch(API)
        const mascotas = await data.json()

        return mascotas
    }

    return {
        get
    }
}

export default useMascotas