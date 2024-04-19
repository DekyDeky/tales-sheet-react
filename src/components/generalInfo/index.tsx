import style from './generalInfo.module.scss'
import color from '../../modules/globalColors.module.scss'
import input from '../../modules/inputs.module.scss'


function writeInput(name: string, isCheckbox?: boolean,){   
    if(!isCheckbox){
            return(
                <div className={`${style.generalLabelInput} ${color.bgcolor1}`}>    
                    <label className={style.generalLabel}> {name} </label>
                    <input type="input" className={input.generalInput}/>
                </div>
        )
    }else {
        return(
            <div className={`${style.generalLabelInput} ${color.bgcolor1}`}>    
                <label className={style.generalLabel}> {name} </label>
                <input type="input" className={input.generalInput}/>
                <input type="checkbox" className={style.generalCheckbox}/>
            </div>
        )
    }
}

function writeONLYONETHINGBECAUSEIDONTKNOWHOWTODOITHELPPLEASESADFACE(name: string) {
    return(
        <div className={`${style.generalLabelInput} ${style.theSpecialOne} ${color.bgcolor2}`}>    
            <label className={style.generalLabel}> {name} </label>
            <div className={style.generalCheckboxes}>
            <input className={style.generalCheckbox} type='checkbox'/> <input className={style.generalCheckbox} type='checkbox'/> <input className={style.generalCheckbox} type='checkbox'/> <input className={style.generalCheckbox} type='checkbox'/> <input className={style.generalCheckbox} type='checkbox'/>
            </div>
        </div> 
    )
}


export default function GeneralInfo() {


    return (
        <form className={style.generalInfoForm}>
            <div className={style.generalInfo}>
                <section className={style.initialInfo}>
                    <div className={style.initialInfoLeft}>
                        {writeInput("NOME")}
                        {writeInput("IDADE")}
                        {writeInput("ÍMPETO")}
                    </div>
                    <div className={style.initialInfoRight}>
                        {writeInput("ARQUÉTIPO")}
                        {writeONLYONETHINGBECAUSEIDONTKNOWHOWTODOITHELPPLEASESADFACE("PONTOS DE SORTE")}
                        {writeInput("ÂNCORA")}
                    </div>
                </section>
                <section className={style.endInfo}>
                    {writeInput("PROBLEMA")}
                    {writeInput("ORGULHO", true)}
                    {writeInput("DESCRIÇÃO")}
                    {writeInput("MÚSICA FAVORITA")}
                </section>
            </div>
        </form>
    )
}