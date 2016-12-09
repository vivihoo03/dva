import React,{PropTypes} from 'react';
import styles from './rulePage.scss';

function Rule(){
	return (
	<section id="rule" style={{background: '#fff'}}>
        <div className={styles['rule-wrap']}>
            <p className={styles['rule-text']}><span className={styles['rule-num']}>1、</span><span className={styles['rule-content']}>每个用户在活动页面只有一次抽奖机会。</span></p>
            <p className={styles['rule-text']}><span className={styles['rule-num']}>2、</span><span className={styles['rule-content']}>抽中实物奖品的用户，请正确填写奖品邮寄地址，客服人员将在7个工作日内发货，如果因地址填写错误问题导致的邮寄失败，默认取消中奖资格，同程不承担相应责任；</span></p>
            <p className={styles['rule-text']}><span className={styles['rule-num']}>3、</span><span className={styles['rule-content']}>电影票观影券奖品以短信券码的形式发送到绑定手机号中，请注意接收短信；</span></p>
            <p className={styles['rule-text']}><span className={styles['rule-num']}>4、</span><span className={styles['rule-content']}>红包有效期及使用规则请查看红包页面的使用详情介绍，请在有效期内使用；</span></p>
            <p className={styles['rule-text']}><span className={styles['rule-num']}>5、</span><span className={styles['rule-content']}>同一微信号/手机号/设备/收货地址均视为同一用户，仅可参与1次抽奖，如发现任何作弊行为，将取消该用户获得奖励的资格；</span></p>
            <p className={styles['rule-text']}><span className={styles['rule-num']}>6、</span><span className={styles['rule-content']}>该活动有任何疑问请拨打电话177-1518-9241咨询。</span></p>
        </div>
    </section>
		)
}

export default Rule;
