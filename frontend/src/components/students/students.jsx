import { motion } from "framer-motion";

import Student from '../student/student';
import styles from './students.module.css';

// Данный компонент отображает список всех студентов
function Students({students}){
    return(
        <div className={styles.container}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .25 }}className={styles.students}>
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
            </motion.div>
        </div>
    )
}

export default Students;