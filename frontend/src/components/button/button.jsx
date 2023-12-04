import styles from "./button.module.css"

// Данный компонент отображает кнопку
function Button({onClick, isActive, children}){
    return(
        <>
            <button 
            type="button" 
            onClick={onClick}  
            className={`${styles.button} ${isActive && styles.active} text-small`}
            >
                {children}
            </button>  
        </>
    )
}

export default Button;