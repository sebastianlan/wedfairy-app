// 转义字符 "\n" 转换为 html 标签 <br/>
function return2br(str){
    if(str == null||str == ""){
        return "";
    }else{
        return str.replace(/\r?\n/g,"<br/>");
    }
}
//获取当前日期函数
function get_current_date(){
    var date = new Date();
    var current_year = date.getFullYear();
    if(date.getMonth() < 9){
        var current_month = "0" + (date.getMonth() + 1);
    }else{
        var current_month = date.getMonth() + 1;
    }
    if(date.getDate() < 10){
        var current_date = "0" + date.getDate();
    }else{
        var current_date = date.getDate();
    }
    return current_year + "-" + current_month + "-" + current_date;
}