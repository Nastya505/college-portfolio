import { Link } from "react-router-dom";

import styles from "./work.module.css";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


// Данный компонент отображает информацию о работе с указанием ее категории

function Work({image, typeIds, id_work, typeIcons }){
    return(
        <div className={styles.work} >
            {typeIds.map((typeId, index) => (
                <div key={typeId} className={styles.typeIcon}>
                    <img src={typeIcons[index]} alt={`Type ${typeId}`} />
                </div>
            ))}
           <Link to={`/work/${id_work}`}> 
                <img className={styles.img} src={image} />
            </Link>
        </div>
    )
}

export default Work;