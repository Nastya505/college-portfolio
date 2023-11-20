import React from "react";
import styles from "../header/header.module.css";
import Button from "../button/button";
import clsx from "clsx";

function Header ({types}) {
    const [typeId, setTypeId] = React.useState(1);

    return(
        <div className={styles.hero}>
            <h1 className={styles.title}>Работы студентов</h1>
            <div className={styles.filter}>
                {
                    types.map((type) => 
                        <Button 
                        className={clsx(typeId === type.id && "active")} 
                        onClick={() => setTypeId(type.id)} 
                        key={type.id}
                        >
                            {type.type}
                        </Button>
                    )
                }
            </div>
        </div>
    )
}

export default Header;