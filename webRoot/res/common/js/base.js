/*!
 * 对目标字符串进行html解码
 */
function decodeHTML(source){
    var str = String(source).replace(/&quot;/g, '"').replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>').replace(/&amp;/g, "&");
    // 处理转义的中文和实体字符
    return str.replace(/&#([\d]+);/g, function(_0, _1) {
        return String.fromCharCode(parseInt(_1, 10));
    });
}
/*!
 * 对目标字符串进行html编码
 */
function encodeHTML(source) {
    return String(source).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(
        />/g, '&gt;').replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}


//格式化数字
function formatNumber(num, precision, separator) {
    var parts;
    // 判断是否为数字
    if (!isNaN(parseFloat(num)) && isFinite(num)) {
        num = Number(num);
        // 处理小数点位数
        num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString();
        // 分离数字的小数部分和整数部分
        parts = num.split('.');
        // 整数部分加[separator]分隔, 借用一个著名的正则表达式
        parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));
        if(parts[1] == 0){
            return parts[0];
        }else{
            return parts.join('.');
        }
    }
    return NaN;
}

/*!
 * 以str开头
 * @param str
 * @returns
 */
String.prototype.startWith=function(str){
    var reg=new RegExp("^"+str);
    return reg.test(this);
}
/*!
 * 以str结尾
 * @param str
 * @returns
 */
String.prototype.endWith=function(str){
    var reg=new RegExp(str+"$");
    return reg.test(this);
}
/*!
 * 删除左右两端的空格
 */
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g,"");
}
/*!
 * 删除左边的空格
 */
String.prototype.ltrim=function(){
    return this.replace(/(^\s*)/g,"");
}
/*!
 * 删除右边的空格
 */
String.prototype.rtrim=function(){
    return this.replace(/(\s*$)/g,"");
}
//加法
Number.prototype.add = function(arg){
    var r1,r2,m;
    try{r1=this.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (this*m+arg*m)/m
}
//减法
Number.prototype.sub = function (arg){
    return this.add(-arg);
}
//乘法
Number.prototype.mul = function (arg)
{
    var m=0,s1=this.toString(),s2=arg.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}
//除法
Number.prototype.div = function (arg){
    var t1=0,t2=0,r1,r2;
    try{t1=this.toString().split(".")[1].length}catch(e){}
    try{t2=arg.toString().split(".")[1].length}catch(e){}
    with(Math){
        r1=Number(this.toString().replace(".",""))
        r2=Number(arg.toString().replace(".",""))
        return (r1/r2)*pow(10,t2-t1);
    }
}

//是否IE
function isIE() {
    var agent = navigator.userAgent.toLowerCase();
    return (!!window.ActiveXObject || "ActiveXObject" in window) ? (
            (agent.match(/msie\s(\d+)/) || [])[1] || '11' //由于ie11并没有msie的标识
        ) : false;
}

//判断obj是否为json对象
function isJson(obj){
    var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}