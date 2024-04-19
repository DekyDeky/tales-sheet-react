import logo from '../../imgs/header/icon.png'
import style from './talesHeader.module.scss'

export default function HeaderR() {
    return (
        <header className={style.header}>
            <img src={logo} alt='Tales From the Loop Logo' className={style.headerLogo}></img>
            <div className={style.headerTexts}>
                <h1 className={style.headerTextsTitle}>Tales From the Loop</h1>
                <h3 className={style.headerTextsSubtitle}>Web Sheet</h3>
            </div>
        </header>
    );
}