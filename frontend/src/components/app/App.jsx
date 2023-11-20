import React from 'react';
import Filter from '../filter/filter.jsx';
import Works from '../works/works.jsx';
import Footer from '../footer/footer.jsx';
import temp_data from "../../utils/data.js";

import styles from "./app.module.css";

function App() {

  const [filteredWorks, setFilteredWorks] = React.useState(temp_data.work);
 
  return (
   <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Работы студентов</h1>
        <Filter types={temp_data.typeOfWork} works={temp_data.work} setFilteredWorks={setFilteredWorks}/>
      </div>
      <Works works={filteredWorks}/>
      <Footer/>
   </div>
  );
}

export default App;
