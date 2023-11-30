import { useParams, Link } from "react-router-dom";
import Student from "../../components/student/student";
import styles from "./portfolio.module.css";
import temp_data from "../../utils/data";

function Portfolio(){
    const { id } = useParams();
    const student = temp_data.students.find((student) => student.id === Number(id));
  
    return(
       
          <div>
            <div className={`${styles.student} mb-5`}>
              <img className={styles.photo} src={student.photo} alt={student.name} />
              <div className="bold text-regular">{student.name}</div>
              <div className={styles.info}>
                <div>{student.group}, {student.course}</div>
                <div>{student.email}</div>
              </div>
            </div>
            <div className={styles.container}>
                <div className={styles.works}>
                    {student.works.map((workId) => {
                    const work = temp_data.work.find((work) => work.id === workId);
                    return <Link to={`/work/${workId}`}><img className={styles.img} src={work.img} alt={work.title} /></Link>
                    })}
                </div>
            </div>
          </div>
        
    )
}

export default Portfolio;