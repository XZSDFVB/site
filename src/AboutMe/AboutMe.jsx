import {NavLink} from "react-router-dom";
import s from './Header.module.css'
const AboutMe = () => {
  return(
       <div className={s.firstcontainer}>
         <div className={s.secondcontainer}>
           <h1>Denis Novik</h1>
           <span>UX | UI designer<br/>24 years old, Minsk</span>
           
         </div>
         <div></div>
       </div>

  )
}
export default AboutMe;