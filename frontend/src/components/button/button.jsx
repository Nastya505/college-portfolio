import styles from "./button.module.css"

import clsx from "clsx";

function Button({onClick, isActive, children}){
    return(
        <>
            <button 
            type="button" 
            onClick={onClick}  
            className={`${styles.button} ${isActive && styles.active}`}
            >
                {children}
            </button>  
        </>
    )
}

export default Button;