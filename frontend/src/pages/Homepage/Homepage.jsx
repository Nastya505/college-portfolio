import React from 'react';
import { Scrollbars } from 'rc-scrollbars';

import '@mantine/core/styles.css';
import {  Pagination } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

import { LuFilter } from "react-icons/lu";

import Filter from '../../components/filter/filter.jsx';
import Works from '../../components/works/works.jsx';
import Button from '../../components/button/button.jsx';
import temp_data from "../../utils/data.js";

import styles from "./Homepage.module.css";

function Homepage() {

  const [filteredWorks, setFilteredWorks] = React.useState(temp_data.work);
  const [activePage, setPage] = React.useState(1);
  const [opened, { open, close }] = useDisclosure(false);
 
  return (
   <>
      
        <div className={`${styles.header} mt-4 mb-5`}>
          <div className={`${styles.title} text-extra-big` }>Работы студентов</div>
          <div className={styles.wrapper}>

            <Modal opened={opened} onClose={close} title="Выберите типы работ" centered>
                <Filter types={temp_data.typeOfWork} works={temp_data.work} setFilteredWorks={setFilteredWorks}/>
            </Modal>
            <Button onClick={open}><LuFilter /></Button>
            
          </div>
        </div>

        <Works works={filteredWorks}/>

        <Pagination className="pagination"  value={activePage} onChange={setPage} total={10} color="rgba(0, 0, 0, 1)" radius="lg" withControls={false} />

   </>
  );
}

export default Homepage;
