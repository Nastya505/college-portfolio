import styles from "./button.module.css"

import clsx from "clsx";

function Button(props){
    return(
        <>
            <button type="button" onClick={props.onClick}  className={clsx(styles.button, props.className)}>{props.children}</button>  
        </>
    )
}

export default Button;