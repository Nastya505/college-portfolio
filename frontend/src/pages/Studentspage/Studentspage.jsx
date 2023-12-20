import React from 'react';
import axios from "axios";
import { Input, Pagination } from '@mantine/core';
import { CiSearch } from "react-icons/ci";

import Student from '../../components/student/student';

import styles from "./Studentspage.module.css";

// Данный компонент отображает страницу со списком студентов

function Studentspage(){
    const API = "http://127.0.0.1:8000/api/authors/actual";
    
    const [students, setStudents] = React.useState([]);
    const [search, setSearch] = React.useState("");    
    const [activePage, setPage] = React.useState(1);

    const getStudents= async () => {
      const response = await axios.get(API);
      setStudents(response.data);
      console.log(response.data);
    }
  
    React.useEffect(() => {
      getStudents();
    }, [])

    return(
        <div>
            <div className={`${styles.header} mt-4 mb-8`}>
                <div className={`${styles.title} text-extra-big`}>Cтуденты</div>
                <div className={styles.wrapper}>
                <Input 
                value={search}
                classNames={{input:styles.input}} 
                onChange={(e) => setSearch(e.target.value)}
                radius="lg" 
                size='xs'  
                placeholder="поиск.." 
                leftSection={<CiSearch/>} 
                />
                </div>
            </div>

            <div className={styles.container}>
            <div className={styles.students}>
                {students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()) || student.surname.toLowerCase().includes(search.toLowerCase())).
                map(student => ( 
                    <Student 
                    key={student.id} 
                    id={student.id} 
                    name={student.name} 
                    surname={student.surname} 
                    group={student.group} 
                    yearGroup = {student.year_group}
                    classGroup={student.class_group}
                    photo={student.photo}
                    work_img={student.work_image}
                    />
                ))}
            </div>
            </div>

          {/* <Pagination 
          className="pagination"  
          value={activePage} 
          onChange={setPage} 
          total={10} 
          color="rgba(0, 0, 0, 1)" 
          radius="lg" 
          withControls={false}  
          /> */}
        </div>
    )
}

export default Studentspage;