import React, { Suspense } from 'react';
import axios from "axios";

import { useParams } from "react-router-dom";
import styles from "./Workpage.module.css";

// Данный компонент отображает страницу с информацией о работе

function Workpage(){
    const API_Student = "http://localhost:8000/api/authors/id";
    const API_Work = "http://localhost:8000/api/works/id";

    const { id } = useParams();

    const [work, setWork] = React.useState([]);
    const [student, setStudent] = React.useState([]);
   

    const getWorkById= async () => {
        try{
            const response = await axios.get(`${API_Work}/${id}`);
            setWork(response.data);
            const studentId = response.data.author;

    
            try{
                const response = await axios.get(`${API_Student}/${studentId}`);
                setStudent(response.data);
                console.log(response.data);
            }
            catch(error){
                console.log(error);
            }
    

        }catch(error){
            console.log(error);
        }
    }

    

    React.useEffect(() => {
        getWorkById();
     }, [])

  
    return(
          <>
            <div className={`${styles.header} mt-4 mb-8`}>
                <div className={`${styles.title} text-extra-big`}>{work.title}</div>
            </div>

            <div className={`${styles.container} mt-15 mb-15`}>
        
                <div className={styles.student} key={student.id}>
                    <img className={styles.photo} src={student.photo} alt={student.name} />
                    <div className="bold text-regular">{student.name} {student.surname}</div>
                    <div className={styles.info}>
                        <div>{student.group}-{student.class_group}-{student.year_group}</div>
                    </div>
                </div>
      
                <img className={styles.img} src={work.image} alt={work.title} /> 
                <div className={`${styles.description} text-regular  mb-10`}>{work.description}</div>
            </div>
          </>
        
    )
}

export default Workpage;




