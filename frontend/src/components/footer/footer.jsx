import styles from "./footer.module.css";
 import logo from"../../images/logo.png";


function Footer(){
    return(
        <div className={`${styles.footer} mb-5`}>
            <img src={logo} alt="logo" />
            <div className="text-small">НКПиИТ, 2023</div>
        </div>
    )
}

export default Footer;