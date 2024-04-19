import style from './relationships.module.scss'
import color from '../../modules/globalColors.module.scss'
import input from '../../modules/inputs.module.scss'

function relationsInputs(tipo: string) {
    return (
        <div className={`${style.relations} ${color.bgcolor1}`}>
            <label className={style.relationLabel}>{tipo}</label>
            <input className={input.generalInput} type='input'></input>
        </div>
    )
}

export default function Relationships(){
    return(
        <form className={style.relasionships}>
            <fieldset className={style.relasionshipsFieldset}>
                <legend className={`${color.bgTitleColor} ${style.relasionshipsTitle}`}><h1 className={style.title}>RELACIONAMENTOS</h1></legend>
                {relationsInputs("CRIANÇA 1")}
                {relationsInputs("CRIANÇA 2")}
                {relationsInputs("CRIANÇA 3")}
                {relationsInputs("CRIANÇA 4")}
                {relationsInputs("PNJ 1")}
                {relationsInputs("PNJ 2")}
            </fieldset>
        </form>
    )
}