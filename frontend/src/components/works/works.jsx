import { motion } from "framer-motion";

import Work from "../work/work";
import styles from "./works.module.css";

// Данный компонент отображает список всех работ
function Works({ works }) {
  return (
    <div className={styles.container}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .25 }} className={styles.works}>
        {works.map((work) => (
          <Work
            key={work.id}
            id_work={work.id}
            image={work.img}
            title={work.title}
            typeIds={work.typeId}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Works;
