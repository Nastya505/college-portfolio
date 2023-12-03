import Portfolio from "../../components/portfolio/portfolio";
import styles from "./Portfoliopage.module.css";

function Portfoliopage(){

    return(
          <>
            <div className={`${styles.header} mt-4 mb-5`}>
                <div className={`${styles.title} text-extra-big` }>Портфолио студента</div>
                    <Portfolio/>
            </div>
          </>
        
    )
}

export default Portfoliopage;