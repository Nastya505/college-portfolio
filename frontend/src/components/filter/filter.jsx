import React from "react";
import styles from "./filter.module.css";
import Button from "../button/button";


function Filter ({types, works, setFilteredWorks}) {
    const [typeIds, setTypeIds] = React.useState([]);

    const setTypeId = (categoryId) => {
        if (typeIds.includes(categoryId)) {
          setTypeIds(typeIds.filter((id) => id !== categoryId));
        } else {
          setTypeIds([...typeIds, categoryId]);
        }
      };
      
    React.useEffect(() => {
        const filtered = typeIds.length === 0
            ? works
            : works.filter((work) => typeIds.some((categoryId) => work.typeId.includes(categoryId)));
        setFilteredWorks(filtered);
    }, [typeIds, works, setFilteredWorks]);

    return(
        <div className={styles.filter}>
            {
                types.map((type) => 
                    <Button 
                    isActive={typeIds.includes(type.id)} 
                    onClick={() => setTypeId(type.id)} 
                    key={type.id}
                    >
                        {type.type}
                    </Button>
                )
            }
        </div>
    )
}

export default Filter;