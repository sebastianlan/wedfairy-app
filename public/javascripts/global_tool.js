// 转义字符 "\n" 转换为 html 标签 <br/>
function return2br(str){
    return str.replace(/\r?\n/g,"<br/>");
}
//获取当前日期函数
function get_current_date(){
    var date = new Date();
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}