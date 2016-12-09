import {hashHistory} from 'dva/router';
import $ from '../utils/zepto';
import dataService from '../utils/dataservice';
const _data = dataService({
    url: "http://61.155.197.220:5013/fed/RainbowHandler.ashx",//请求站点接口
    noDataText: "没有更多数据了！",
    loaderClass:"loadMore",
    serConfig: {
        "servicename": "getdianpinglist",
        "requrl": "http://tcmobileapi.17usoft.com/dianping/DianPingHandler.ashx",
        "iscahe": "0",
        "interfaceid": "DianPing.getdianpinglist",
    },
    serParams: {
        "projectTag": "dujia",
        "productId": "242879",
        "pageSize": "10",
        "page": "1"
    }
});

var commentList=[];
export default {
    namespace: 'index',
    state: {
        dpList: [],
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location=> {
                if (location.pathname === '/') {
                    dispatch({
                        type: 'ajax',
                        payload: {
                            dpList:[],
                            loadingText:"",
                            noNextData:false,
                            loadClass:_data.loaderClass
                        }
                    })
                    $(window).off("scroll").on("scroll", function () {
                        if ($("#main").height() - $(window).height() <= $(window).scrollTop() + 425) {
                            dispatch({
                                type: 'ajax',
                                payload: {
                                    dpList:[],
                                    loadingText:"",
                                    noNextData:false,
                                    loadClass:_data.loaderClass
                                }
                            })
                        }
                    });
                }
            })
        },
    },
    effects: {
        *ajax({payload}, {select, call, put}){
            var result = yield _data.loadData();
            if(result){
                if(result.data.response.header.rspCode=="0000"){
                    const body=result.data.response.body;
                    commentList=(commentList || []).concat(result.data.response.body.dpList || []);
                    _data.isBusy=false;
                    _data.serParams.page++;
                    _data.totalPage=body.pageInfo.totalPage;
                    if (_data.serParams.page > _data.totalPage && _data.totalPage != null) {
                        _data.loaderClass = "loadNo";
                        _data.loadingText = "没有更多内容了哦";
                        _data.noNextData = true;
                    }
                    yield put({
                        type: 'querySuccess',
                        payload: {
                            dpList: commentList,
                            loadingText:_data.loadingText,
                            noNextData:_data.noNextData,
                            loadClass:_data.loaderClass
                        }
                    })
                }

            }
        },
    },
    reducers: {
        get(state, action){
            return {...state, ...action.payload}
        },
        querySuccess(state, action){
            return {...state, ...action.payload, loading: "ok"};
        }
    },
}
