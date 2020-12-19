import React from 'react'
import styles from "./Card.module.css"

export default function Card() {
    return (
        <div className={`${styles.CardContainer} flex-row center`}>
            <div className={styles.CardAvatarContainer}>
                <img src="avatar.png" className={styles.CardAvatar}/>
            </div>
            <div className={styles.CardTextContainer}>
                <p className={styles.CardTextTitle}>Jhon Snow</p>
                <span className={styles.CardTextBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
        </div>
    )
}
