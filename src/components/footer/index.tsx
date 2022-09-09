import Style from './styles.module.scss'

export function Footer(){
    return (
        <div className={ Style.footer }>
            <p>Desenvolvido por 
                <a 
                    href="https://github.com/JuanLima10" 
                    target="_blank"
                >
                    Juan Lima
                </a>
            </p>
        </div>    
    )
} 