//this的使用情况

//作为构造函数执行
function Foo(name) {
    this.name=name;
}
var a=new Foo("wangxue");
console.log(a);

//作为对象属性执行
var a={
    name:"A",
    printfName:function(){
        console.log(this.name)
    }
}
obj.printfName();

//作为普通函数执行

function fn(){
    console.log(this); //this === window;
}
fn();

//call apply bind
function fn1(name){
    alert(name);
    console.log(this); //this === window;
}
fn1.call({a:100},'wangxue',20); //用{a:100}来===this;

//bind  必须是函数表达式
var fn2=function(name){
    alert(name);
    console.log(this); //this === window;
}.bind({b:200})
fn2('wangxue',20); //用{a:100}来===this;