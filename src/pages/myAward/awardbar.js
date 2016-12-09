import React,{PropTypes} from 'react';
import styles from './myAwardPage.scss';

const awardbar=({
    title,
    subtitle,
    code,
    goPage
})=>{
    return (
    <li className={styles["ticket-detail-wrap"]}>
        <div className={styles['ticket-detail-header-wrap']}>
            <p className={styles["ticket-detail-title"]}>{title}</p>
            <p className={styles["ticket-detail-state"]}>{subtitle}</p>
        </div>
        <div className={styles["ticket-get-wrap"]} onClick={goPage.bind(this,code)}>
            <p className={styles["ticket-get"]}>
            {code==='0'?'立即使用':'填写地址'}
            </p>
        </div>
    </li>
        )
}

export default awardbar;