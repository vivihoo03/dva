import $ from '../utils/zepto';

function setTitle(title){
 window.EnState='winxin';
  if(window.EnState==='app'){
    window._tc_bridge_bar.set_navbar({
        param: {
            center: [{
                   "tagname": "tag_title",
                    "value": title 
                     }]   
                },
               
          });
      }else{
         var $body = $('body');
         document.title = title;
         var $iframe = $("<iframe style='display:none;' src='/favicon.ico'></iframe>");
         $iframe.on('load',function() {
         setTimeout(function() {
            //$iframe.off('load').remove();
            }, 0);
          }).appendTo($body);
        }
     };

export default {
    	setTitle:setTitle
    };