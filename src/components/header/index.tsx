import { useState } from 'react'

import { SearchInput } from '../input'
import { Modal } from '../modal'

import Style from './styles.module.scss'

export function Header() {

    const [ text, setText ] = useState('')

    return (
        <div className={ Style.header }>
            <div className={Style.nav}>
                <div className={Style.logo}>
                    <img src="/src/assets/icon.png" alt="Logo" />
                    <h1>Pokedéx</h1>
                </div>
                <img className={ Style.pokeball } src="/src/assets/pokeball.png" alt="Pokeball" />
                <div className={ Style.search }>
                    <SearchInput placeholder="pesquise o pokemon" onChange={ (e: any) => setText(e.target.value) } />
                    <Modal link={text}><button>Buscar</button></Modal>
                </div>
            </div>
            <hr color="#000000"/>
            
            
        </div>
    )
} 