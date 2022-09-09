import { CardProps } from '../../types/Card'
import Style from './styles.module.scss'

export function Card({ id, key, name, weight, height, img }: CardProps){
    return(
        <div className={ Style.card } key={ key }>
            <div className={ Style.texts }>
                <div className={ Style.header }>
                    <h1>{ name }</h1>
                    <strong>#{ id }</strong>
                </div>
                <div className={ Style.bottom }>
                    <div className={ Style.stats }>
                        <span>Altura: { height }</span>
                        <span>Peso: { weight }</span>
                    </div>
                    { img && <img src={ img } alt={ name }/> }
                    { !img && <img src="/src/assets/default.png" alt="img not found"/> }
                </div>
            </div>
        </div>
    )
} 