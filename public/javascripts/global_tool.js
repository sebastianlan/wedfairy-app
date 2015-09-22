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
//验证字符串是否为手机或者固话
//规则说明：
//1、可以是1开头的11位数字（手机号）
//2、可以是“区号-电话号-分机号”或者是“(区号)电话号-分机号”格式
//3、区号是0开头的3～4位数字，可以没有区号
//4、电话号是5～8位数字，不能以0开头
//5、分机号是1～8位数字，可以没有分机号
function isMobile(str){
    var r=/^1\d{10}$|^(0\d{2,3}-?|\(0\d{2,3}\))?[1-9]\d{4,7}(-\d{1,8})?$/;
    return r.test(str);
}
//验证人数是否为小于等于 3 位数的正整数
function isPeople(str){
    var r =/^\+?[1-9][0-9]{0,2}$/;
    return r.test(str);
}