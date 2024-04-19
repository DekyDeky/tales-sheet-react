import style from './notes.module.scss'
import color from '../../modules/globalColors.module.scss'

export default function Notes(){
    return (
        <form className={style.notes}>
            <fieldset className={style.notesFieldset}>
                <div className={`${style.notesTitleDiv} ${color.bgTitleColor}`}>
                    <legend className={style.notesTitle}>ANOTAÇÕES</legend>
                </div>
                <div className={`${style.notesTextareaDiv} ${color.bgcolor1}`}> 
                    <textarea className={style.notesTextarea}/>
                </div>
            </fieldset>
        </form>
    )
}