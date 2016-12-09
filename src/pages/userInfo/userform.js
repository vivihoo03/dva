import React,{PropTypes} from 'react';
import styles from './userInfoPage.scss';
import $ from '../../utils/zepto'

const userform=({
    complete,
    submit,
    loading,
    username,
    phonenum,
    region,
    address,
    changename,
    changephonenum,
    changeregion,
    changeaddress
})=>{
    if(complete){
        setTimeout(function(){
        var Name=username;
        var Phone=phonenum;
        var Region=region;
        var Address=address;
        $('#username').val(Name);
        $('#phonenum').val(Phone);
        $('#region').val(Region);
        $('#address').val(Address);
        },0)
    }
    return (
<section id="info">
        <div className={styles["Mtop-15"]}>
            <ul className={styles["info-wrap"]}>
            
                <li className={styles["info-detail-wrap"]}>
                    <div className={styles["info-la-wrap"]}>
                        <p className={styles["info-la-txt"]}>姓名：</p>
                    </div>
                    <div className={styles["info-input-wrap"]}>
                        <input id='username' placeholder="请填写收货人姓名" maxLength='30' style={{fontSize:'14px'}} />
                    </div>
                </li>
                <li className={styles["info-detail-wrap"]}>
                    <div className={styles["info-la-wrap"]}>
                        <p className={styles["info-la-txt"]}>手机号码：</p>
                    </div>
                    <div className={styles["info-input-wrap"]}>
                        <input id='phonenum' type='tel' placeholder="请填写收货人手机号码" maxLength='11' style={{fontSize: '14px'}} />
                    </div>
                </li>

                <li className={styles["info-detail-wrap"]}>
                    <div className={styles["info-la-wrap"]}>
                        <p className={styles["info-la-txt"]}>所在地区：</p>
                    </div>
                    <div className={styles["info-input-wrap"]}>
                        <input id='region' placeholder="请填写XX省-XX市-XX区/县" maxLength='30' style={{fontSize: '14px'}} />
                    </div>
                </li>

                <li className={styles["info-detail-wrap"]}>
                    <div className={styles["info-la-wrap"]}>
                        <p className={styles["info-la-txt"]}>详细地址：</p>
                    </div>
                    <div className={styles["info-input-wrap"]}>
                        <input id='address' placeholder="小区/写字楼/学校等" maxLength='30' style={{fontSize: '14px'}} />
                    </div>
                </li>

            </ul>
            
            <div className={styles["info-btn-wrap"]} >
                <p className={styles["info-btn"]} onClick={submit}>保存</p>
            </div>
        </div>
    </section>
        )
}

export default userform;