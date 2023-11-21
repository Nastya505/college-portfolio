import React from 'react';
import { Scrollbars } from 'rc-scrollbars';

import '@mantine/core/styles.css';
import {  Pagination } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

import Filter from '../filter/filter.jsx';
import Works from '../works/works.jsx';
import Button from '../button/button.jsx';
import Footer from '../footer/footer.jsx';
import temp_data from "../../utils/data.js";

import styles from "./app.module.css";

function App() {

  const [filteredWorks, setFilteredWorks] = React.useState(temp_data.work);
  const [activePage, setPage] = React.useState(1);
  const [opened, { open, close }] = useDisclosure(false);
 
  return (
   <div>
      <Scrollbars style={{ height: "100vh" }}>

        <div className={styles.header}>
          <h1 className={styles.title}>Работы студентов</h1>
          <div className={styles.filter}>
            <Button>Студенты</Button>

            <Modal opened={opened} onClose={close} title="Выберите типы работ" centered>
                <Filter types={temp_data.typeOfWork} works={temp_data.work} setFilteredWorks={setFilteredWorks}/>
               
            </Modal>
            <Button onClick={open}><img style={{width: "15px", height: "18px"}} src="https://www.svgrepo.com/show/501571/filter.svg"/></Button>

          </div>

        </div>

        <Works works={filteredWorks}/>

        <Pagination className={styles.pagination}  value={activePage} onChange={setPage} total={10} color="rgba(0, 0, 0, 1)" radius="lg" withControls={false} />

        <Footer/>

      </Scrollbars>
   </div>
  );
}

export default App;
