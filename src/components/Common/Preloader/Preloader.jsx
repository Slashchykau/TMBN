
import React from "react";
import preloader from "../../../assets/preloader/Spinner-1s-200px.svg";
import s from './Preloader.module.css'


const Preloader = (props) => {

    return  <img src = {preloader} className={s.preloader}/>
}
export default Preloader;