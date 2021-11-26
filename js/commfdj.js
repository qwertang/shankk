window.addEventListener('load',function(){
    var commfdj = document.querySelector('.commfdj');
    var commfdja = document.querySelector('.commfdja');
    var commfdjb = document.querySelector('.commfdjb');
    //当鼠标见过的时候显示隐藏的div
    commfdj.addEventListener('mouseover',function(){
        commfdja.style.display = 'block';
        commfdjb.style.display =  'block';
    })
    commfdj.addEventListener('mouseout',function(){
        commfdja.style.display = 'none';
        commfdjb.style.display =  'none';
    })
    //鼠标移动的 时候里面的黄色的div跟着鼠标走
    commfdj.addEventListener('mousemove',function(e){
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x,y);
        //盒子的高度一半 50%
        var commfdjaX = x - commfdja.offsetWidth / 2;
        var commfdjaY = y - commfdja.offsetHeight / 2;
        //如果x坐标小于了0就让它停在这里
        //遮挡层的移动距离
        var commfdjaMAx = commfdj.offsetWidth - commfdja.offsetWidth;
        if(commfdjaX <= 0){
            commfdjaX = 0;
        }else if ( commfdjaX >= commfdjaMAx){
            commfdjaX = commfdjaMAx;
        }
        if(commfdjaY <= 0){
            commfdjaY = 0;
        }else if ( commfdjaY >=commfdjaMAx){
            commfdjaY = commfdjaMAx;
        }
        commfdja.style.left = commfdjaX + 'px';
        commfdja.style.top = commfdjaY + 'px';
        //获取大div的元素
        var commfdjbimg = document.querySelector('.commfdjbimg');
        //大图片的最大移动距离
        // console.log(commfdjbimg.offsetWidth);
        // console.log(commfdjb.offsetWidth);
        var commfdjbMax = commfdjbimg.offsetWidth - commfdjb.offsetWidth;
        //大图片的移动距离X Y
        var commfdjbX = commfdjaX  * commfdjbMax / commfdjaMAx;
        var commfdjbY = commfdjaY  * commfdjbMax / commfdjaMAx;
        commfdjbimg.style.left = -commfdjbX +'px';
        commfdjbimg.style.top = -commfdjbY +'px';
    });
    var xjd = document.querySelectorAll('.xjd');
    var commfdjq = document.querySelector('.commfdj').querySelector('img');
    // console.log(commfdjq);
    xjd.onclick = function(){
        commfdjq.src = './imges/jd200m.jpg';
    }
    
})