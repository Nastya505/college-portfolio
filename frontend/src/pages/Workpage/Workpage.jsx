import React from "react";
import { useParams } from "react-router-dom";
import temp_data from "../../utils/data";
import styles from "./Workpage.module.css";

function Workpage(){
    // const { id } = useParams();
    // const [work, setWork] = useState(null);
    // const [author, setAuthor] = useState(null);
  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const work = temp_data.work.find((work) => work.id === id);
    //       setWork(work);
  
    //       const student = temp_data.students.find((student) => student.id === work.authorId);
    //       setAuthor(student);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
  
    //   fetchData();
    // }, [id]);
  
    // if (!work || !author) {
    //   return <div>Loading...</div>;
    // }




    // const [author, setAuthor] = useState(null);
    // const [work, setWork] = useState(null);
    
    //   useEffect(() => {
    //     // Получение данных об авторе по его ID из JSON
    //     const selectedAuthor = temp_data.students.find(author => author.id === id);
    //     setAuthor(selectedAuthor);
        
    //     // Получение данных о конкретной работе автора из JSON
    //     const selectedWork = worksData.find(work => work.id === id);
    //     setWork(selectedWork);
    //   }, [authorId, workId]);
  
    return(
          <>
{/* 
                <div>
                {author && (
                    <div>
                    <h2>{author.name}</h2>
                    <p>Date of Birth: {author.dateOfBirth}</p>
                    <p>Biography: {author.biography}</p>
                    </div>
                )}
                {work && (
                    <div>
                    <h3>{work.title}</h3>
                    <p>Type: {work.type}</p>
                    <p>Description: {work.description}</p>
                    </div>
                )}
                </div>
            */}

            {/* <div className={`${styles.header} mt-4 mb-8`}>
                <div className={`${styles.title} text-extra-big`}>{work.title}</div>
            </div>

            <div className={`${styles.container} mt-15 mb-15`}>
                {students.map((student) => (
                
                        <div className={styles.student} key={student.id}>
                            <img className={styles.photo} src={student.photo} alt={student.name} />
                            <div className="bold text-regular">{student.name}</div>
                            <div className={styles.info}>
                                <div>{student.group}, {student.course}</div>
                            </div>
                        </div>
                 
                ))}
             

                <img className={styles.img} src={work.img} alt={work.title} /> 
                <div className={`${styles.description} text-regular  mb-10`}>{work.description}</div>
            </div> */}
         
          </>
        
    )
}

export default Workpage;




