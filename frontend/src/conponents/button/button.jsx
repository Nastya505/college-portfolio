import styles from "./button.module.css"

function Button(props){
    return(
        <>
            <a href="#" className={styles.button}>{props.children}</a>  
        </>
    )
}

export default Button;