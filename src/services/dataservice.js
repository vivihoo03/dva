import request from '../utils/request';
/**
 * Created by wsy10943 on 2016/10/28.
 */
export async function query(url,configs,params) {
    configs.reqbody=params;
    var requestData = {
        method: "POST",
        body: JSON.stringify(configs)
    };
    return request(url, requestData);
}