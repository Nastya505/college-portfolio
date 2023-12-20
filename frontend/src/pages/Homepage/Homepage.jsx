import React from 'react';
import { LuFilter } from "react-icons/lu";
import axios from 'axios';

import '@mantine/core/styles.css';
import {  Pagination } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

import Filter from '../../components/filter/filter.jsx';
import Work from '../../components/work/work.jsx';
import Button from '../../components/button/button.jsx';
import temp_data from "../../utils/data.js";

import styles from "./Homepage.module.css";

// Данный компонент отображает главную страницу
function Homepage() {
  const API = "http://127.0.0.1:8000/api/works/actual/types";

  // отфильтрованные работы; функция фильтрации
  const [filteredWorks, setFilteredWorks] = React.useState(temp_data.work);

  // активная страница; функция пагинации
  const [activePage, setPage] = React.useState(1);
  const [countrPages, setcountrPages] = React.useState(null);

  const WorksInPage = 6;
  const [data, setData] = React.useState([]);

  // открыто ли модальное окно; функция открытия и закрытия
  const [opened, { open, close }] = useDisclosure(false);

 
  async function getAllWorks() {
    try {
        const response = await axios.put(`${API}/amount`, [1,2,3]);
        setcountrPages(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  

const fetchData = async () => {
  try {
    if(activePage <= Math.ceil(countrPages / WorksInPage)){
    const response = await axios.put(`${API}/${activePage-1}&${WorksInPage}`, [1,2,3]);
    setData(response.data);
    console.log(response.data); 
    } else{
      setData([]);
    }
  } catch (error) {
    console.error(error);
  }
};

const handlePageChenge = (newPage) => {
    setPage(newPage);
  
};
  React.useEffect(() => {
    getAllWorks();
    fetchData();
  }, [activePage]);
  
  return (
   <>
        <div className={`${styles.header} mt-4 mb-5`}>
          <div className={`${styles.title} text-extra-big`}>Работы студентов </div>
          <div className={styles.wrapper}>

            <Modal opened={opened} onClose={close} title="Выберите типы работ" centered>
                <Filter 
                types={temp_data.typeOfWork} 
                works={temp_data.work} 
                setFilteredWorks={setFilteredWorks}/>
            </Modal>

            <Button onClick={open} ><LuFilter /></Button>
            
          </div>
        </div>

    
        <div className={styles.container}>
        <div className={styles.works}>
          {data.map((work) => (
            <Work
              key={work.work_id}
              id_work={work.work_id}
              image={work.image}
              typeIds={work.type_id}
              typeIcons={work.icon}
            />
          ))}
        </div>
      </div>

        <Pagination className="pagination mb-14"
          value={activePage}
          onChange={handlePageChenge}
          total={Math.ceil(countrPages / WorksInPage)} 
          color="rgba(0, 0, 0, 1)" 
          radius="lg" 
          withControls={false} 
        />
   </>
  );
}

export default Homepage;
