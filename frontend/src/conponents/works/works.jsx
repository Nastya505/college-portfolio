import Image from "../work/work";
import styles from "../works/works.module.css"

function Works(){
    return(
        <div className={styles.container}>
            <div className={styles.works}>
                <Image url={"https://images.unsplash.com/photo-1693834517520-9461d4f9e94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}/>
                <Image url={"https://images.unsplash.com/photo-1693834794043-99bb76f267d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}/> 
                <Image url={"https://images.unsplash.com/photo-1693834517520-9461d4f9e94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}/>
                <Image url={"https://images.unsplash.com/photo-1693834794043-99bb76f267d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}/>
                <Image url={"https://images.unsplash.com/photo-1693834517520-9461d4f9e94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}/>
                <Image url={"https://images.unsplash.com/photo-1693834794043-99bb76f267d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"}/>
            </div>
        </div>
    )
}

export default Works;