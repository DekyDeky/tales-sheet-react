import style from './exp.module.scss'
import color from '../../../modules/globalColors.module.scss'

let Checkboxes: any[] = []

for(let i = 0; i < 10; i++){
    Checkboxes.push(
        <input type='checkbox' className={style.ExpCheckbox}/>
    )
}

export default function ACSExp(){
    return (
        <form className={style.ACSexp}>
            <fieldset className={style.ACSEXPFieldSet}>

                <div className={`${style.ExpTitle} ${color.bgTitleColor}`}>
                    <legend className={style.ACSEXPTitle}>EXPERIÊNCIA</legend>
                </div>

                <div className={`${style.ExpCheckboxes} ${color.bgcolor2}`}>
                    {Checkboxes}
                </div>
                
            </fieldset>
        </form> 
    )
}