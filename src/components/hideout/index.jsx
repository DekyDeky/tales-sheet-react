import style from './hideout.module.scss'
import color from '../../modules/globalColors.module.scss'

export default function Hideout() {
    return (
        <form className={style.hideout}>
            <fieldset className={style.hideoutFieldset}>
                <legend className={`${style.hideoutTitle} ${color.bgTitleColor}`}><p>ESCONDERIJO</p></legend>
                <div className={`${style.hideoutDivTextArea} ${color.bgcolor1}`}> <textarea className={style.hideoutTextArea}></textarea> </div>
            </fieldset>
        </form>
    )
}