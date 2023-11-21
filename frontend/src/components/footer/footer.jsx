import styles from "./footer.module.css";
 import logo from"../../images/logo.png";


function Footer(){
    return(
        <div className={styles.footer}>
            <img src={logo} alt="logo" />
            <div className={styles.footerText}>НКПиИТ, 2023</div>
        </div>
    )
}

export default Footer;