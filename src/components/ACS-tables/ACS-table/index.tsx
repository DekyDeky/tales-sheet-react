import { IACSTables } from "./Interface-ACSTable"
import style from './acs-table.module.scss'
import color from '../../../modules/globalColors.module.scss'

export default function ACSTable({name, inputList, type}: IACSTables) {
    return(
        <form className={style.ACSform}>
        <fieldset className={style.ACSfiledset}>
            <legend className={style.ACSTitle}>{name}</legend>
            {
                inputList.map((x) => ( 
                    <p className={`${(inputList.indexOf(x) % 2) === 0 ? color.bgcolor1 : color.bgcolor2} ${style.ACSValues}`}>
                        <label className={style.ACSLabel}>{x}</label>
                        <input type={type} className={style.ACSInput}/>
                    </p>
                ))
            }
        </fieldset>
    </form>
    )
}