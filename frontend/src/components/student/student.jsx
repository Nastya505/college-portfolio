import { Link } from 'react-router-dom';
import styles from './student.module.css';
import temp_data from '../../utils/data';

// Данный компонент отображает информацию о студенте в виде карточки

function Student({id, name, surname, group, classGroup, yearGroup, photo }){
    // const lastWorkId = works[works.length - 1];
    // const lastWork = temp_data.work.find((work) => work.id === lastWorkId);

    return(
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/portfolio/${id}`}>
            <div className={styles.student}>
                {/* <img className={styles.workImg}  src={lastWork.img} /> */}
                <img className={styles.photo} src={photo} alt="photo" />
                <div className={`${styles.info} mb-5`}>
                    <div className="bold text-regular">{name} {surname}</div>
                    <div className='text-small'>{group}-{classGroup}-{yearGroup}</div>
                </div>
            </div>
        </Link>
    )
}

export default Student;