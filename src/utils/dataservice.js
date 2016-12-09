import {query} from '../services/dataservice';

//是否为对象
function isObject(options) {
    return ({}).toString.call(options) == "[object Object]";
}
//合并参数
function merge(source,dest){
    for (var item in dest) {
        if (dest.hasOwnProperty(item)) {
            source[item] = dest[item];
        }
    }
    return source;
}
//是否为空对象
function isObjEmpty(options) {
    if (!isObject(options)) {
        return true;
    }
    for (var name in options) {
        if (({}).hasOwnProperty.call(options, name)) {
            return false;
        }
    }
    return true;
}
function FedDataService(options) {
    if (!(this instanceof FedDataService)) return new FedDataService(options);
    merge(this,merge({
        totalPage: null, //数据总条数，初始化为null，第一次请求之后确定值
        noNextData: false, //true:分页没有下一页数据了,false：反之
        loadingText: "努力加载中", //加载中文案
        errorType: null, //加载错误：1:网络错误、2:网络未连接、3:服务器崩溃
        noDataText: '没有更多内容了哦',
        loadErrorText: '加载失败，请点击重新加载',
        isBusy: false, //当前是否正在发送请求
        pageInfo: null,
        serConfig: {
            tagname: "",
            iscache: 0
        },
        pageInfo:{
            page:"page",
            pageSize:"pageSize",
            totalPage:"totalPage",
        }
    },options))
}
FedDataService.prototype={
    constructor:FedDataService,
    loadData(){
        var self=this;
        if(self.isBusy||self.noNextData){
            return null;
        }
        if (self.pageInfo &&
            self.totalPage != null &&
            self.serParams[self.pageInfo['page']] &&
            self.serParams[self.pageInfo['page']] > self.totalPage) { //如果开启了分页且分页已达最大页数，停止加载
            self.loadingText = self.noDataText; //加载的文案
            console.log(self.loadingText);
            self.noNextData = true; //没有数据的标识
            return false;
        }
        self.isBusy=true;
        return query(this.url,this.serConfig,this.serParams).then((data)=>{
            return data;
        }).catch((error)=>{
            return error
        })
    }
};
export default function (options) {
    return FedDataService(options);
}