import Student from '../student/student';
import styles from './students.module.css';

function Students({students}){
    return(
        <div className={styles.container}>
            <div className={styles.students}>
                {
                    students.map((student) => 
                        <Student 
                        key={student.id} 
                        id={student.id} 
                        name={student.name} 
                        group={student.group} 
                        course={student.course} 
                        photo={student.photo} 
                        works={student.works}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Students;