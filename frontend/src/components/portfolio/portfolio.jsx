import { useParams} from "react-router-dom";

import Work from "../work/work";
import temp_data from "../../utils/data";

import styles from "./portfolio.module.css";


// Данный компонент отображает информацию о студенте и его работах

function Portfolio(){
  
    const { id } = useParams();
    const student = temp_data.students.find((student) => student.id === Number(id));
  
    return(
          <>
            <div className={`${styles.student} mt-15`}>
              <img className={styles.photo} src={student.photo} alt={student.name} />
              <div className="bold text-regular">{student.name}</div>
              <div className={styles.info}>
                <div>{student.group}, {student.course}</div>
                <div>{student.email}</div>
              </div>
            </div>
            <div className={`${styles.container} mt-15 mb-14`}>
                <div className={styles.works}>
                    {student.works.map((workId) => {
                    const work = temp_data.work.find((work) => work.id === workId);
                    return <Work className={styles.img} key={work.id} image={work.img} title={work.title} typeIds={work.typeId}/>
                    })}
                </div>
            </div>
          </>
    
        
    )
}

export default Portfolio;