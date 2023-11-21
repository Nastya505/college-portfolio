import React from "react";
import styles from "./filter.module.css";
import Button from "../button/button";


function Filter ({types, works, setFilteredWorks}) {
    const [typeId, setTypeId] = React.useState(null);

    
    React.useEffect(() => {
        const filtered = typeId === null ? works : works.filter((work) => work.typeId === typeId);
        setFilteredWorks(filtered);
    }, [typeId, works, setFilteredWorks]);

    return(
        <div className={styles.filter}>
            {
                types.map((type) => 
                    <Button 
                    isActive={typeId === type.id} 
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