import { useParams, Link } from "react-router-dom";
import styles from "./portfolio.module.css";
import temp_data from "../../utils/data";

function Portfolio(){

  // const { id } = useParams();
  // const [student, setStudent] = useState(null);

  // useEffect(() => {
  //   axios.get(`https://api.example.com/students/${id}`)
  //     .then(response => setStudent(response.data))
  //     .catch(error => console.error('Произошла ошибка при получении данных:', error));
  // }, [id]);
  
    const { id } = useParams();
    const student = temp_data.students.find((student) => student.id === Number(id));
    
    if (!student) {
      return <p>Студент не найден</p>;
    }
  
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
                    return <Link to={`/work/${workId}`}><img className={styles.img} src={work.img} alt={work.title} /></Link>
                    })}
                </div>
            </div>
          </>
        
    )
}

export default Portfolio;