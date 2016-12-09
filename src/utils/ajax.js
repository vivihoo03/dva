import $ from '../utils/zepto'

function query(url,param){
  $.ajax({
    type:'post',
    url:url,
    data:param,
    dataType:'JSON',
    success:function(data){
      return JSON.parse(data);
    },
    error:function(data){
      console.log(data);
    }
  })
}

export default function(url,param){
  return query(url,param);
}
