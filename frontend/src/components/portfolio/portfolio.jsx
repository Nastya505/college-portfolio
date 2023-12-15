import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import styles from "./portfolio.module.css";


// Данный компонент отображает информацию о студенте и его работах

function Portfolio(){

  const API_Student = "http://localhost:8000/api/authors/id";
  const API_Works = "http://localhost:8000/api/works";

  const { id } = useParams();

  const [works, setWorks] = React.useState([]);
  const [student, setStudent] = React.useState([]);
 

  const getStudentById= async () => {
      try{
          const response = await axios.get(`${API_Student}/${id}`);
          setStudent(response.data);
  
          try{
              const response = await axios.get(API_Works);
            
              setWorks(response.data[0]);
              console.log(response.data[0]);
           
          }
          catch(error){
              console.log(error);
          }
  

      }catch(error){
          console.log(error);
      }
  }

  

  React.useEffect(() => {
      getStudentById();
   }, [])

    return(
          <>
            <div className={`${styles.student} mt-15`}>
              <img className={styles.photo} src={student.photo} />
              <div className="bold text-regular">{student.name} {student.surname}</div>
              <div className={styles.info}>
                <div>{student.group}-{student.class_group}-{student.year_group}</div>
                <div>{student.email}</div>
              </div>
            </div>
            <div className={`${styles.container} mt-15 mb-14`}>
                <div className={styles.works}>
                    {works.map((work) => {
                          return  (
                            <Link to={`/work/${work.id}`}> 
                                <img className={styles.img} src={work.image} />
                            </Link>
                          )
                    })}
                </div>
            </div>
          </>
    
        
    )
}

export default Portfolio;