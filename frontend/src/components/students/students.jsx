import React from 'react';
import axios from 'axios';

import Student from '../student/student';
import styles from './students.module.css';

// Данный компонент отображает список всех студентов
function Students(){
    const API = "http://localhost:8000/api/authors";

    const [students, setStudents] = React.useState([]);
  
    const getStudents= async () => {
      const response = await axios.get(API);
      setStudents(response.data);
      console.log(response.data);
    }
  
    React.useEffect(() => {
      getStudents();
    }, [])
  
    return(
        <div className={styles.container}>
            <div className={styles.students}>
                {
                    students.map((student) => 
                        student.map((stud) =>(

                            <Student 
                            key={stud.id} 
                            id={stud.id} 
                            name={stud.name} 
                            surname={stud.surname} 
                            group={stud.group} 
                            yearGroup = {stud.year_group}
                            classGroup={stud.class_group}
                            photo={stud.photo}
                            />
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Students;