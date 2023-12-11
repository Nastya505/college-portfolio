import Work from "../work/work";
import styles from "./works.module.css";

// Данный компонент отображает список всех работ
function Works({ works }) {
  return (
    <div className={styles.container}>
      <div className={styles.works}>
        {works.map((work) => (
          <Work
            key={work.id}
            id_work={work.id}
            image={work.img}
            title={work.title}
            typeIds={work.typeId}
          />
        ))}
      </div>
    </div>
  );
}

export default Works;
