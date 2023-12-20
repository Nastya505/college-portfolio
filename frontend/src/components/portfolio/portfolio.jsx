import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import Work from "../work/work";

import styles from "./portfolio.module.css";


// Данный компонент отображает информацию о студенте и его работах

function Portfolio(){

  const API_Student = "http://localhost:8000/api/authors/id";
  const API_Works = "http://127.0.0.1:8000/api/works/actual";

  const { id } = useParams();

  const [works, setWorks] = React.useState([]);
  const [student, setStudent] = React.useState([]);
 

  const getStudentById= async () => {
      try{
          const response = await axios.get(`${API_Student}/${id}`);
          setStudent(response.data);
  
          try{
              const response = await axios.get(API_Works);
              setWorks(response.data);
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
                      if( work.author === student.id){
                        return  (

                            <Work 
                            key={work.work_id} 
                            id_work={work.work_id} 
                            image={work.image} 
                            typeIds={work.type_id}  
                            typeIcons={work.icon}  
                            />

                        )
                      }
                    })}
                </div>
            </div>
          </>
    
        
    )
}

export default Portfolio;