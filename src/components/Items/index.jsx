import style from './items.module.scss'
import input from '../../modules/inputs.module.scss'
import color from '../../modules/globalColors.module.scss'

let itemsList = []
for(let i = 0; i < 5; i++){
    itemsList.push(
        <div className={`${style.inputsItems} ${color.bgcolor1}`}>
            <input className={`${input.generalInput} ${style.itemInput}`} type='input'/>
            <input className={style.inputBonus} type='number'/>
        </div>
    )
} 

export default function Items(){
    return(
        <form className={style.items}>
            <fieldset className={style.itemsFieldset}>
                <div className={`${style.itemsTitles} ${color.bgTitleColor}`}>
                    <legend className={style.itemsTitle}>ITENS</legend>
                    <p className={style.itemBonus}>BÔNUS</p>
                </div>

                <div className={`${style.iconicItem} ${color.bgcolor2}`}>
                    <label className={style.iconicItemTitle}>ITEM ICÔNICO</label>
                    <input type='input' className={input.generalInput}/>
                    <p className={style.iconicItemBonus}>+2</p>
                </div>

                {itemsList}

            </fieldset>
        </form>
    )
}