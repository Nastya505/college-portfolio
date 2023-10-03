import styles from "../header/header.module.css";
import Button from "../button/button";


function Header () {
    return(
        <div className={styles.hero}>
            <h1 className={styles.title}>Работы студентов</h1>
            <div className={styles.filter}>
                <Button>все работы</Button>
                <Button>иллюстрации</Button>
                <Button>фото</Button>
                <Button>шрифты</Button>
            </div>
        </div>
    )
}

export default Header;