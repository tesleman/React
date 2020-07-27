import React from "react"
import s from './preloader.module.css'

let Preloader = () => {
    return<div className={s.lds_ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>


}
export default Preloader