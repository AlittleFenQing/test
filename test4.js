//无块级作用域
if(true){
    var name='wangxue';
}
console.log(name);

var name;
if(true){
    name='wangxue';
}
console.log(name);

//函数作用域和全局作用域

var a=100;//全局作用域
function fn(){
    var b=200;//函数作用域
    console.log(a);//自由变量
    console.log(b);
}
fn();
 
//作用域链

var a=100;
function F1(){
    var b=200;
    function F2(){
        var c=300;
        function F3(){
            console.log(a);
            console.log(b);
            console.log(c);    
        }
        F3()
    }
    F2()
}
F1()


//闭包

function fn(){
    var a=100;
    return function(){
        console.log(b);
        
    }
}
var A=fn();
var b=200;
A();

//闭包的应用场景
//1.函数作为返回值
function fn(){
    var a=100;
    return function(){
        console.log(b);
    }
}
var A=fn();
var b=200;
A();

//2.函数作为参数传递
function fn(){
    var a=100;
    return function(){
        console.log(a);
    }
}
var A=fn();
var F2=function(fn){
    var a=200;
    fn()
}
F2(A);

//闭包在实际开发中的应用——主要用于封装变量，收敛权限（判断用户是否是第一次进去）

function isFirstLoad(){
    var _list=[];
    return function(id){
        if(_list.indexOf(id) >= 0){
            return false;
        }else{
            _list.push(id);
            return true;
            console.log(_list)
        }
    }
    
}
var firstLoad =isFirstLoad();
firstLoad(10);
firstLoad(10);
firstLoad(20);
firstLoad(20);