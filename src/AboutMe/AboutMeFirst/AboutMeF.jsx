import {NavLink} from "react-router-dom";
import s from './AboutMe.module.css'
const AboutMeF = () => {
  return(
       <div className={s.firstcontainer}>
         <div className={s.secondcontainer}>
           <h1>Denis Novik</h1>
           <span>UX | UI designer<br/>24 years old, Minsk</span>
           <button className={s.switchLanguage}>
             <span className={s.rus}>RUS |</span>
             <span className={`${s.eng}+${s.active}`}> ENG</span>
           </button>
         </div>
         <div></div>
       </div>

  )
}
export default AboutMeF;