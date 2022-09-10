import { useEffect, useState } from "react";

import { ModalProps } from "../../types/Modal";
import { PokemonProps } from "../../types/Pokemon";

import axios from "axios";
import Style from './styles.module.scss'

export function Modal({ link, children }: ModalProps) {

    const [pokemon, setPokemon] = useState<PokemonProps>()
    const [modalVisible, setModalVisible] = useState(false)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        setError(true)

        if(modalVisible){
            axios.get(`http://localhost:3333/pokemon/${link}`)
                .then((res: any) => {
                    setPokemon(res.data)
                    setError(false)
            })
        }
    }, [modalVisible])


    return (
        <div className={Style.modal}>

            <a onClick={() => setModalVisible(true)}>
                { children }
            </a>

            {modalVisible ?
                <div className={Style.config}>
                    { !error ? 
                    <div className={Style.container}>
                        <div className={ Style.header }>
                            <h1>{ pokemon?.name }</h1>
                            <button onClick={() => setModalVisible(false)}>
                                x
                            </button>
                        </div>
                        <div className={Style.content}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon?.id}.gif`} alt={ pokemon?.name } />
                            <div className={ Style.stats }>
                                <div className={ Style.texts }>
                                    <span>Altura: { pokemon?.height }</span>
                                    <span>Peso: { pokemon?.weight }</span>
                                </div>
                                <div className={ Style.texts }>
                                    <span>Habilidades:</span>
                                    <i className="fa-solid fa-arrow-left"></i>

                                    { 
                                        pokemon?.abilities.map((a: any) => {
                                            return(
                                                <p>{ a.ability.name }</p>
                                            )}) 
                                    }
                                </div>
                            </div>
                        </div> 
                    </div>
                    : 
                    <div className={Style.container}>
                        <div className={ Style.header }>
                            <h1>Oops algo deu errado...</h1>
                            <button onClick={() => setModalVisible(false)}>
                                x
                            </button>
                        </div>
                        <div className={Style.content}>
                            <h2>Pokemon não encontrado tente outro</h2>
                        </div> 
                    </div>
                    }
                </div>
            : null}
        </div>
    )

} 
