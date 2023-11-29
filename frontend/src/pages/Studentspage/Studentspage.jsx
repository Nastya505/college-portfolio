import React from 'react';
import { Input, Pagination } from '@mantine/core';
import { CiSearch } from "react-icons/ci";


import Works from '../../components/works/works';
import temp_data from '../../utils/data';

import styles from "./Studentspage.module.css";
import Students from '../../components/students/students';


function Studentspage(){
    const [activePage, setPage] = React.useState(1);
    return(
        <div>
            <div className={`${styles.header} mt-4 mb-8`}>
                <div className={`${styles.title} text-extra-big` }>Cтуденты</div>
                <div className={styles.wrapper}>
                <Input classNames={{input:styles.input}} radius="lg" size='xs'  placeholder="поиск.." leftSection={<CiSearch/>} />
                </div>
            </div>

          <Students students={temp_data.students} />

          <Pagination className="pagination"  value={activePage} onChange={setPage} total={10} color="rgba(0, 0, 0, 1)" radius="lg" withControls={false}  />
        </div>
    )
}

export default Studentspage;