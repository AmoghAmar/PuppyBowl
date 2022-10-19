const BASE = 'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT'


export async function puppyRoster() {
    try {
        const response = await fetch(`${BASE}/players`)
        console.log('data', response)
        const result = await response.json()

    } catch (err) {
        throw err
    }
}
        export const getPuppies = async () => {
            const response = await fetch(`${BASE}/players`)
            const result = await response.json()
            const players = result.data.players
                console.log('players', players)
                return players
        }
       
