//错误写法
var i,a;
for(i=0;i<10;i++){
    a=document.createElement('a')
    a.innerHTML= i+'<br>';
    a.addEventListener('click',function(e){
        e.preventDefault();
        alert(i);
    })
    document.body.appendChild(a)
}
//正确写法
var i;
for(i=0;i<10;i++){
    (function(i){
        var a;
        a=document.createElement('a')
        a.innerHTML= i+'<br>';
        a.addEventListener('click',function(e){
            e.preventDefault();
            alert(i);
        })
        document.body.appendChild(a)
    })(i);
}