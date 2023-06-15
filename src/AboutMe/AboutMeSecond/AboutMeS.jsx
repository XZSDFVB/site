import s from "./AboutMeF.module.css";

function AboutMeF() {
    return(
    <div className={s.containerOne}>
        <div className={s.containerTwo}>
            <h1>Denis Novik</h1>
            <span>UX | UI designer<br/>24 years old, Minsk</span>
            <button className={s.switchLanguage}>
                <span className={s.rus}>RUS |</span>
                <span className={`${s.eng}+${s.active}`}> ENG</span>
            </button>
        </div>
        <div className={s.containerThirt}>
            <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000" alt=""/>
        </div>
    </div>
    )
}
export default AboutMeF