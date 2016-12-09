import React,{PropTypes} from 'react';
import styles from './userInfoPage.scss';


const userform=({
    username
  })=>{
    return (
        <section id="info">
        <div className={styles["Mtop-15"]}>
            <ul className={styles["info-wrap"]}>
                <li className={styles["info-detail-wrap"]}>
                    <div className={styles["info-la-wrap"]}>
                        <p className={styles["info-la-txt"]}>姓名：</p>
                    </div>
                    <div className={styles["info-input-wrap"]}>
                        <input placeholder="请填写收货人姓名" style={{fontSize:'14px'}} value={username} onChange={changename}/>
                    </div>
                </li>
                <li className={styles["info-detail-wrap"]}>
                    <div className={styles["info-la-wrap"]}>
                        <p className={styles["info-la-txt"]}>手机号码：</p>
                    </div>
                    <div className={styles["info-input-wrap"]}>
                        <input placeholder="请填写收货人手机号码" style={{fontSize: '14px'}}  />
                    </div>
                </li>

                <li className={styles["info-detail-wrap"]}>
                    <div className={styles["info-la-wrap"]}>
                        <p className={styles["info-la-txt"]}>所在地区：</p>
                    </div>
                    <div className={styles["info-input-wrap"]}>
                        <input placeholder="请填写XX省-XX市-XX区/县" style={{fontSize: '14px'}} />
                    </div>
                </li>

                <li className={styles["info-detail-wrap"]}>
                    <div className={styles["info-la-wrap"]}>
                        <p className={styles["info-la-txt"]}>详细地址：</p>
                    </div>
                    <div className={styles["info-input-wrap"]}>
                        <input placeholder="小区/写字楼/学校等" style={{fontSize: '14px'}}  />
                    </div>
                </li>

            </ul>
            
            <div className={styles["info-btn-wrap"]} >
                <p className={styles["info-btn"]}>保存</p>
            </div>
        </div>
    </section>

        )
}

export default userform;