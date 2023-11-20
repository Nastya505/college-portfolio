import styles from "./work.module.css";

function Work({image, title}){
    return(
        <>
            <img className={styles.img} src={image} alt={title} />
        </>
    )
}

export default Work;