import styles from './Card.module.css'

function Card ({title = 'Default'}) {
    return(
        <div className={styles.card}>
            <img className={styles.cardimage} src="https://placehold.co/150" alt="shamala" />
            <h2 className={styles.cardtitle}>{title}</h2>
            <p className={styles.cardtext}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
    );
}

export default Card;