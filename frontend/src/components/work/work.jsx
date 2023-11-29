import { Link } from "react-router-dom";
import temp_data from "../../utils/data";

import styles from "./work.module.css";

function Work({image, title, typeIds, id_work}){
    return(
        <div className={styles.work}>
            
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
        </div>
    )
}

export default Work;