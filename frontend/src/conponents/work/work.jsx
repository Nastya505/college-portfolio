import styles from "../work/work.module.css";

function Image({url}){
    return(
        <>
            <img className={styles.img} src={url} />
        </>
    )
}

export default Image;