import React from 'react';
import { Scrollbars } from 'rc-scrollbars';

import '@mantine/core/styles.css';
import {  Pagination } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

import Filter from '../../components/filter/filter.jsx';
import Works from '../../components/works/works.jsx';
import Button from '../../components/button/button.jsx';
import Footer from '../../components/footer/footer.jsx';
import temp_data from "../../utils/data.js";

import styles from "./Homepage.module.css";

function Homepage() {

  const [filteredWorks, setFilteredWorks] = React.useState(temp_data.work);
  const [activePage, setPage] = React.useState(1);
  const [opened, { open, close }] = useDisclosure(false);
 
  return (
   <div>
      <Scrollbars style={{ height: "100vh" }}>

        <div className={styles.header}>
          <h1 className={styles.title}>Работы студентов</h1>
          <div className={styles.wrapper}>
            <Button>Студенты</Button>

            <Modal opened={opened} onClose={close} title="Выберите типы работ" centered>
                <Filter types={temp_data.typeOfWork} works={temp_data.work} setFilteredWorks={setFilteredWorks}/>
            </Modal>

            <Button onClick={open}><svg fill="currentColor" height="14" viewBox="-2 -2 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m2.08 2 6.482 8.101A2 2 0 0 1 9 11.351V18l2-1.5v-5.15a2 2 0 0 1 .438-1.249L17.92 2H2.081zm0-2h15.84a2 2 0 0 1 1.561 3.25L13 11.35v5.15a2 2 0 0 1-.8 1.6l-2 1.5A2 2 0 0 1 7 18v-6.65L.519 3.25A2 2 0 0 1 2.08 0z"/></svg></Button>
          </div>
        </div>

        <Works works={filteredWorks}/>

        <Pagination className={styles.pagination}  value={activePage} onChange={setPage} total={10} color="rgba(0, 0, 0, 1)" radius="lg" withControls={false} />

        <Footer/>

      </Scrollbars>
   </div>
  );
}

export default Homepage;
