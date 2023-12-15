import axios from "axios";
import React from "react";
import Work from "../work/work";
import styles from "./works.module.css";


// Данный компонент отображает список всех работ
function Works() {

  const API = "http://localhost:8000/api/works/actual";

  const [works, setWorks] = React.useState([]);

  const getWorks = async () => {
    try{
      const response = await axios.get(API);
      setWorks(response.data);
      console.log(response.data);
    }catch(error){
      console.log(error);
    }
  }

  React.useEffect(() => {
    getWorks();
  }, [])

  return (

      <div className={styles.container}>
        <div className={styles.works}>
          {works.map((work) => (
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
   
  );
}

export default Works;
