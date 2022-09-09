import { ChangeEvent, useEffect, useState } from "react"

import axios from "axios"
import Style from "./styles.module.scss"

import { Card } from "../../components/card"
import { Footer } from "../../components/footer"
import { Header } from "../../components/header"
import { Loading } from "../../components/loading"
import { PokemonProps } from "../../types/Pokemon"
import { Modal } from "../../components/modal"


function Home() {

    const [pokemons, setPokemons] = useState<PokemonProps[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const [ start, setStart ] = useState(1)
    const [ final, setFinal ] = useState(12)

    let plusClickStart = start + 12
    let plusClickFinal = final + 12
    
    let lessClickStart = start - 12
    let lessClickFinal = final - 12

    useEffect(() => {

        setIsLoading(true)

        const endpoints = []
        for (var i = start; i <= final; i++) {
            endpoints.push(`http://localhost:3333/pokemon/${i}`)
        }

        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res: any) => {
                setPokemons(res)
                setIsLoading(false)
            })
    }, [start, final])

    return (
        <div className={Style.home}>

            <Header/>

                <div className={Style.pagination}>
                    
                    {
                        lessClickStart <= 0 ? 
                        <button disabled>anterior</button>
                        :
                        <button onClick={ () => {
                            setStart(lessClickStart)
                            setFinal(lessClickFinal)
                        } }>anterior</button>
                    }

                    {
                        plusClickStart >= 906 ? 
                        <button disabled>proximo</button>
                        :
                        <button onClick={ () => {
                            setStart(plusClickStart)
                            setFinal(plusClickFinal)
                        } }>proximo</button>
                    }

                </div>

                <div className={Style.pokelist}>
                    {
                        !isLoading && pokemons.map((p, key) => {
                            return (
                                <Modal link={ p.data.name } key={ key }>
                                    <Card
                                        key={ p.data.id }
                                        id={ p.data.id }
                                        name={ p.data.name }
                                        weight={ p.data.weight }
                                        height={ p.data.height }
                                        img={ p.data.sprites.front_default }
                                    />
                                </Modal>
                            )
                        })
                    }
                    {isLoading && <Loading />}
                </div>

            <Footer />
            
        </div>
    )
}

export default Home
