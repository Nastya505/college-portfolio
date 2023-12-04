import { useParams, Link } from "react-router-dom";

import { motion } from "framer-motion";

import Work from "../work/work";
import temp_data from "../../utils/data";

import styles from "./portfolio.module.css";


// Данный компонент отображает информацию о студенте и его работах

function Portfolio(){
  
    const { id } = useParams();
    const student = temp_data.students.find((student) => student.id === Number(id));
    
    if (!student) {
      return <p>Студент не найден</p>;
    }
  
    return(
        //  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .25 }}>
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
          // </motion.div>
        
    )
}

export default Portfolio;