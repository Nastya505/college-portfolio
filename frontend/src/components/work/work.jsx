import { Link } from "react-router-dom";
import temp_data from "../../utils/data";

import { motion } from "framer-motion";


import styles from "./work.module.css";


const animations = {
    initial: { y: "100%", opacity: 0, scale: 2 },
    animate: { y: 0,opacity: 1, scale: 1 },
    // transition : {type:"keyframes", duration: 1},
    transition: { type: "spring", stiffness: 100 },
    // transition: {type: "tween", duration: 1, ease: "easeInOut" },

    exit: { opacity: 0 },
}

// Данный компонент отображает информацию о работе с указанием ее категории

function Work({image, title, typeIds, id_work}){
    return(
        <motion.div className={styles.work} {...animations}>
            
                {typeIds.map((typeId) => {
                    const category = temp_data.typeOfWork.find((type) => type.id === typeId);
                    if (category) {
                    return (
                        <div key={category.id} className={styles.categoryIcon}>
                            <img src={category.icon} alt={category.type} />
                        </div>
                    );
                    }
                    return null;
                })}
           
           <Link to={`/work/${id_work}`}><img className={styles.img} src={image} alt={title} /></Link>
        </motion.div>
    )
}

export default Work;