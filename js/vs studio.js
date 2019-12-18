window.onload=function(){
var gifgif=document.getElementById("gifgif").getElementsByTagName("div");
var mainMod=document.getElementById("mainmod").getElementsByTagName("div");
for(var i=0;i<gifgif.length;i++)
{
    gifgif[i].onclick=function(){
        for(var j=0;j<gifgif.length;j++){
        gifgif[j].className="same-type samei";
            mainMod[j].style.display="none";
            //消除原来样式。
        }
        this.className="select same-type"//改变class属性使相应的 p i 标签改变。
       switch(this)
    {//保证元素改变一致
        case gifgif[0]:
            mainMod[0].style.display="block";
            break;
        case gifgif[1]:
            mainMod[1].style.display="block";
            break;
        case gifgif[2]:
            mainMod[2].style.display="block";
            break;
        case gifgif[3]:
            mainMod[3].style.display="block";
            break;
        case gifgif[4]:
            mainMod[4].style.display="block";
            break;
        case gifgif[5]:
            mainMod[5].style.display="block";
            break;
        default:
            alert("error");
    }
    }
}//设置tabindex，使其他元素可用失焦。通过失焦改变类名，清除下划线。
document.getElementById("demoone").addEventListener("blur", function()
{
    document.getElementById("demoone").className="same-type differenttwo";
});
document.getElementById("demotwo").addEventListener("blur", function()
{
    document.getElementById("demotwo").className="same-type differenttwo";
});
document.getElementById("demothree").addEventListener("blur", function()
{
document.getElementById("demothree").className="same-type differenttwo";
});    
document.getElementById("demofour").addEventListener("blur", function()
{
    document.getElementById("demofour").className="same-type differenttwo";
}); 
document.getElementById("demofive").addEventListener("blur", function()
{
    document.getElementById("demofive").className="same-type differenttwo";
});
document.getElementById("demosix").addEventListener("blur", function()
{
    document.getElementById("demosix").className="same-type differenttwo";
});
var onworkload=document.getElementById("loadChild").getElementsByTagName("div");
var onaddtext=document.getElementById("onaddtext").getElementsByTagName("div")
var loadtwo=document.getElementById("loadtwo").getElementsByTagName("div");
var addtextone=document.getElementById("addtextone").getElementsByTagName("div")
var loadthree=document.getElementById("loadthree").getElementsByTagName("div");
var addtexttwo=document.getElementById("addtexttwo").getElementsByTagName("div");
var loadfour=document.getElementById("loadfour").getElementsByTagName("div");
var addtextthree=document.getElementById("addtextthree").getElementsByTagName("div");
var different=document.getElementById("different");
var differentChild=document.getElementById("differentchild");
// alert(addtextone.length);
    for(var i=1;i<onworkload.length;i++)
    {     
        onworkload[i].id=i; //遍历id         
        onworkload[i].onclick=function()
        {
            //清楚多余样式
            differentChild.style.display="none";
            if(onaddtext[this.id-1].style.display=="block")
            {//如果已经显示就隐藏
                onaddtext[this.id-1].style.display="none";    
            }else
            {  
                for(var j=0;j<onaddtext.length;j++)
                {//清除样式   
                  addtexttwo[j].style.display="none";
                  onaddtext[j].style.display="none"; 
                } 
                for(var w=0;w<3;w++)
                {    
                    addtextone[w].style.display="none";
                }
                for(var m=0;m<5;m++)
                {   
                    addtextthree[m].style.display="none";
                }           
                onaddtext[this.id-1].style.display="block"; //改变类型，block。
            }
        }
    }
    for(var i=0;i<onaddtext.length;i++)
    {//与原网页一致，点击原来隐藏的内容（正在显示），使隐藏。
        onaddtext[i].onclick=function()
        {   
            this.style.display="none";
        }
    }
    for(var i=1;i<loadtwo.length;i++)
    {     
        loadtwo[i].id=i; //遍历id         
        loadtwo[i].onclick=function()
        { 
             //清楚多余样式
             differentChild.style.display="none";
            if(addtextone[this.id-1].style.display=="block")
            { //如果已经显示就隐藏
                 addtextone[this.id-1].style.display="none";
            }else 
            { 
                for(var j=0;j<onaddtext.length;j++)
                {//清除样式  
                  addtexttwo[j].style.display="none";
                  onaddtext[j].style.display="none"; 
                } 
                for(var w=0;w<3;w++)
                {   
                    addtextone[w].style.display="none";
                }
                for(var m=0;m<5;m++)
                {
                    addtextthree[m].style.display="none";
                }
                addtextone[this.id-1].style.display="block"; //改变类型，block。          
            } 
        }
    }
    for(var i=0;i<addtextone.length;i++)
    {
        addtextone[i].onclick=function()
        {   //同上
            this.style.display="none";
        }
    }
    for(var i=1;i<loadthree.length;i++)
    {     
        loadthree[i].id=i; //遍历id         
        loadthree[i].onclick=function()
        {
             //清楚多余样式
             differentChild.style.display="none";
            if(addtexttwo[this.id-1].style.display=="block")
            { //如果已经显示就隐藏
                addtexttwo[this.id-1].style.display="none";
                
            }else
            {  
                for(var j=0;j<onaddtext.length;j++)
                {//清除样式。 
                  addtexttwo[j].style.display="none";
                  onaddtext[j].style.display="none"; 
                } 
                for(var w=0;w<3;w++)
                {   
                    addtextone[w].style.display="none";
                }
                for(var m=0;m<5;m++)
                {  
                    addtextthree[m].style.display="none";
                }
                    addtexttwo[this.id-1].style.display="block"; //改变类型，block。
            }
        }
    }
    for(var i=0;i<addtexttwo.length;i++)
    {//点击原来隐藏的内容（正在显示），使隐藏。
        addtexttwo[i].onclick=function()
        {   
            this.style.display="none";
        }
    } 
    for(var i=1;i<loadfour.length;i++)
    {     
        loadfour[i].id=i; //遍历id         
        loadfour[i].onclick=function()
        {
             //清楚多余样式
             differentChild.style.display="none";
            if(addtextthree[this.id-1].style.display=="block")
            {//如果已经显示就隐藏
                addtextthree[this.id-1].style.display="none";    
            }else
            {  
                for(var j=0;j<onaddtext.length;j++)
                {//清除样式  
                  addtexttwo[j].style.display="none";
                  onaddtext[j].style.display="none"; 
                } 
                for(var w=0;w<3;w++)
                {    
                    addtextone[w].style.display="none";
                }
                for(var m=0;m<5;m++)
                {   
                    addtextthree[m].style.display="none";
                }                
                    addtextthree[this.id-1].style.display="block"; //改变类型，block。
            }
        }
    }
    for(var i=0;i<addtextthree.length;i++)
    {
        addtextthree[i].onclick=function()
        {   
            this.style.display="none";
        }
    }
     different.onclick=function()//这个框是单独列出的
     {
         if(differentChild.style.display=="block")
         {
             differentChild.style.display="none";
         }
         else
         {
            for(var j=0;j<onaddtext.length;j++)
            {//清除样式      
              addtexttwo[j].style.display="none";
              onaddtext[j].style.display="none"; 
            } 
            for(var w=0;w<3;w++)
            {
                addtextone[w].style.display="none";
            }
            for(var m=0;m<5;m++)
            {    
                addtextthree[m].style.display="none";
            }
            differentChild.style.display="block";
         }
     }
     differentChild.onclick=function()
     {//点击原来隐藏的内容（正在显示），使隐藏。
         this.style.display="none";
     }
var headerChangeOne=document.getElementById("headerchangeone");
var headerChangeTwo=document.getElementById("headerchangetwo");
var headerChangeThree=document.getElementById("headerchangethree");
var headerChangeFour=document.getElementById("headerchangefour");
var headerOneChild=document.getElementById("headeronechild"); 
var headerTwoChild=document.getElementById("headertwochild");
var headerThreeChild=document.getElementById("headerthreechild") ;
var headerFourChild=document.getElementById("headerfourchild") ;
var headerFiveChild=document.getElementById("headerfivechild");
var cancel=document.getElementById("cancel");
var onappear=document.getElementById("appear");
var search=document.getElementById("search");
var searchMain=document.getElementById("searchmain");
var expendone=document.getElementById("expendone");
var expendtwo=document.getElementById("expendtwo");
var expendfiveone=document.getElementById("expendfiveone");
var expendfivetwoone=document.getElementById("expendfivetwo-one");
var expendfivetwotwo=document.getElementById("expendfivetwo-two");
var expendfivetwothree=document.getElementById("expendfivetwo-three");
var expendfivetwofour=document.getElementById("expendfivetwo-four");
var expendfivetwofive=document.getElementById("expendfivetwo-five");
var expendfivetwosix=document.getElementById("expendfivetwo-six");
var expendfivethree=document.getElementById("expendfivethree");
headerChangeOne.onclick=function(e)
{
    if(headerOneChild.style.display=="block")
    {
        headerchangeone.style.backgroundColor="white";//保证颜色变化与框一致
        headerOneChild.style.display="none"
    }
    else
    {//使其他按钮样式回复。
        headerChangeTwo.style.backgroundColor="white";
        headerChangeFour.style.backgroundColor="white";
        headerChangeThree.style.backgroundColor="white";
        headerchangeone.style.backgroundColor="#f2f2f2";
        headerFourChild.style.display="none";
        headerThreeChild.style.display="none";
        headerTwoChild.style.display="none";
        headerOneChild.style.display="block";
    }
    e.stopPropagation();
}
headerChangeTwo.onclick=function(e)
{
    if(headerTwoChild.style.display=="block")
    {
        headerChangeTwo.style.backgroundColor="white";//保证颜色变化与框一致
        headerTwoChild.style.display="none";
    }
    else
    {//使其他按钮样式回复。
        headerChangeFour.style.backgroundColor="white";
        headerchangeone.style.backgroundColor="white";
        headerChangeThree.style.backgroundColor="white";
        headerChangeTwo.style.backgroundColor="#f2f2f2";
        headerFourChild.style.display="none";
        headerThreeChild.style.display="none";
        headerOneChild.className="header-childtwo-twochild-one";
        headerTwoChild.style.display="block";
    }
    e.stopPropagation();
}
headerChangeThree.onclick=function(e)
{
    if(headerThreeChild.style.display=="block")
    {
        headerThreeChild.style.display="none";
        headerChangeThree.style.backgroundColor="white";//保证颜色变化与框一致
    }
    else
    {//使其他按钮样式回复。
        headerChangeTwo.style.backgroundColor="white";
        headerChangeFour.style.backgroundColor="white";
        headerchangeone.style.backgroundColor="white";
       headerChangeThree.style.backgroundColor="#f2f2f2";
       headerFourChild.style.display="none";
       headerTwoChild.style.display="none";
       headerOneChild.className="header-childtwo-twochild-one";
       headerThreeChild.style.display="block";
    }
    e.stopPropagation();
}
headerChangeFour.onclick=function(e)
{
    if(headerFourChild.style.display=="block")
    {
        headerChangeFour.style.backgroundColor="white";//保证颜色变化与框一致
        headerFourChild.style.display="none";
    }
    else
    {   //使其他按钮样式回复。
        headerChangeTwo.style.backgroundColor="white";
        headerchangeone.style.backgroundColor="white";
        headerChangeThree.style.backgroundColor="white";
        headerChangeFour.style.backgroundColor="#f2f2f2";
        headerThreeChild.style.display="none";
        headerTwoChild.style.display="none";
        headerOneChild.className="header-childtwo-twochild-one";
        headerFourChild.style.display="block";
    }
    e.stopPropagation();
}
cancel.onclick=function()
{
    headerFiveChild.style.display="none";
}
onappear.onclick=function(e)
{
    document.getElementById("headeronechild").className="header-childtwo-twochild-one";
    document.getElementById("headerthreechild").style.display="none";
    document.getElementById("headertwochild").style.display="none";
    document.getElementById("headerfourchild").style.display="none";
    headerFiveChild.style.display="block";
    e.stopPropagation();
}
document.onclick=function(event){
    var e=event||window.event;//获得相应元素
    var aim=e.srcElement||e.target;//适应不同浏览器
    if(e.srcElement){
        var aim=e.srcElement;
    //    alert(aim.id);//检测相应元素的id，以便进行点击相应的元素不隐藏。
    //    alert(aim)//检验元素类别
        if(aim!=headerFiveChild && aim!=search && aim!=searchMain && aim!=expendone && aim!=expendtwo &&aim!=expendfiveone && aim!=expendfivetwoone && aim!=expendfivetwotwo&& aim!=expendfivetwothree&& aim!=expendfivetwofour&& aim!=expendfivetwofive&& aim!=expendfivetwosix&& aim!=expendfivethree ) {
            headerFiveChild.style.display="none";//如果点击的不是以上元素就隐藏
            document.getElementById("headeronechild").className="header-childtwo-twochild-one";
            headerchangeone.style.backgroundColor="white";
            document.getElementById("headerfourchild").style.display="none";
            document.getElementById("headerchangefour").style.backgroundColor="white";
        }
        }
        else
        {
        var aim=e.target;
        if(aim!=headerFiveChild && aim!=search && aim!=searchMain && aim!=expendone && aim!=expendtwo &&aim!=expendfiveone && aim!=expendfivetwoone && aim!=expendfivetwotwo&& aim!=expendfivetwothree&& aim!=expendfivetwofour&& aim!=expendfivetwofive&& aim!=expendfivetwosix&& aim!=expendfivethree ){
            headerFiveChild.style.display="none";//如果点击的不是以上元素就隐藏
            document.getElementById("headeronechild").className="header-childtwo-twochild-one";
            headerchangeone.style.backgroundColor="white";
            document.getElementById("headerfourchild").style.display="none";
            document.getElementById("headerchangefour").style.backgroundColor="white";
        }
        }
        if(aim==greydiv)
        {//隐藏遮罩层的样式和滚动框。
            document.getElementById("greydiv").style.display="none";
            document.getElementById("last_onclick_block").style.display="none";
            document.getElementById("thinline").style.display="block";
            document.getElementById("last_a").style.display="none";
            document.body.style.overflow="";
            for(var n=0;n<5;n++)
            {
              changedStar[n].className="samestar whitestar";
            }

        }
    
}
//失焦使颜色变回。
document.getElementById("headerchangetwo").addEventListener("blur", function()
{
    document.getElementById("headertwochild").style.display="none";
    document.getElementById("headerchangetwo").style.backgroundColor="white";
});
document.getElementById("headerchangethree").addEventListener("blur", function()
{
    document.getElementById("headerthreechild").style.display="none";
    document.getElementById("headerchangethree").style.backgroundColor="white";
});
var appearPhotoone=document.getElementById("appearphotoone");
var movePhotoone=document.getElementById("movephotoone");
var sAndbone=document.getElementById("sandbone");
var appearPhototwo=document.getElementById("appearphototwo");
var movePhototwo=document.getElementById("movephototwo");
var sAndbtwo=document.getElementById("sandbtwo");
var appearPhotothree=document.getElementById("appearphotothree");
var movePhotothree=document.getElementById("movephotothree");
var sAndbthree=document.getElementById("sandbthree");
var appearPhotofour=document.getElementById("appearphotofour");
var movePhotofour=document.getElementById("movephotofour");
var sAndbfour=document.getElementById("sandbfour");
var appearPhotofive=document.getElementById("appearphotofive");
var movePhotofive=document.getElementById("movephotofive");
var sAndbfive=document.getElementById("sandbfive");
var appearPhotosix=document.getElementById("appearphotosix");
var movePhotosix=document.getElementById("movephotosix");
var sAndbsix=document.getElementById("sandbsix");
var appearPhotoseven=document.getElementById("appearphotoseven");
var movePhotoseven=document.getElementById("movephotoseven");
var sAndbseven=document.getElementById("sandbseven");
appearPhotoone.onclick=function()
{//改变class属性使播放符号改为暂停符号显示，同时显示隐藏图片。
    sAndbone.className="broadcast";
    movePhotoone.style.display="block"
}
movePhotoone.onclick=function()
{//改变class属性使暂停符号改为播放符号显示，同时隐藏图片。
    sAndbone.className="suspend";
    movePhotoone.style.display="none";
}
movePhotoone.onmouseover=function()
{//移入显示中间符号
    sAndbone.style.display="block";
}
movePhotoone.onmouseout=function()
{//移出隐藏中间符号
    sAndbone.style.display="none";
}
appearPhotoone.onmouseover=function()
{//移入显示中间符号
    sAndbone.style.display="block";
}
appearPhotoone.onmouseout=function()
{//移出隐藏中间符号
    sAndbone.style.display="none";
}
sAndbone.onmouseover=function()
{//防止鼠标移入中间符号时，中间符号在block和none之间不停转变。
    sAndbone.style.display="block";
}
sAndbone.onclick=function()
{
    if( movePhotoone.style.display=="block")
    {//如果图片已经显示则隐藏，中间符号变为播放
        movePhotoone.style.display="none";
        sAndbone.className="suspend";
    }
    else
    {//如果图片已经隐藏则显示，中间符号变为暂停。
        movePhotoone.style.display="block"
        sAndbone.className="broadcast";
    }
}
//以下六部分同上。
appearPhototwo.onclick=function()
{
    sAndbtwo.className="broadcasttwo";
    movePhototwo.style.display="block"
}
movePhototwo.onclick=function()
{
    sAndbtwo.className="suspendtwo";
    movePhototwo.style.display="none";
}
movePhototwo.onmouseover=function()
{
    sAndbtwo.style.display="block";
}
movePhototwo.onmouseout=function()
{
    sAndbtwo.style.display="none";
}
appearPhototwo.onmouseover=function()
{
    sAndbtwo.style.display="block";
}
appearPhototwo.onmouseout=function()
{
    sAndbtwo.style.display="none";
}
sAndbtwo.onmouseover=function()
{
    sAndbtwo.style.display="block";
}
sAndbtwo.onclick=function()
{
    if( movePhototwo.style.display=="block")
    {
        movePhototwo.style.display="none";
        sAndbtwo.className="suspendtwo";
    }
    else
    {
        movePhototwo.style.display="block"
        sAndbtwo.className="broadcasttwo";
    }
}

//同上
appearPhotothree.onclick=function()
{
    sAndbthree.className="broadcasttwo";
    movePhotothree.style.display="block"
}
movePhotothree.onclick=function()
{
    sAndbthree.className="suspendtwo";
    movePhotothree.style.display="none";
}
movePhotothree.onmouseover=function()
{
    sAndbthree.style.display="block";
}
movePhotothree.onmouseout=function()
{
    sAndbthree.style.display="none";
}
appearPhotothree.onmouseover=function()
{
    sAndbthree.style.display="block";
}
appearPhotothree.onmouseout=function()
{
    sAndbthree.style.display="none";
}
sAndbthree.onmouseover=function()
{
    sAndbthree.style.display="block";
}
sAndbthree.onclick=function()
{
    if( movePhotothree.style.display=="block")
    {
        movePhotothree.style.display="none";
        sAndbthree.className="suspendtwo";
    }
    else
    {
        movePhotothree.style.display="block"
        sAndbthree.className="broadcasttwo";
    }
}


//同上
appearPhotofour.onclick=function()
{
    sAndbfour.className="broadcasttwo";
    movePhotofour.style.display="block"
}
movePhotofour.onclick=function()
{
    sAndbfour.className="suspendtwo";
    movePhotofour.style.display="none";
}
movePhotofour.onmouseover=function()
{
    sAndbfour.style.display="block";
}
movePhotofour.onmouseout=function()
{
    sAndbfour.style.display="none";
}
appearPhotofour.onmouseover=function()
{
    sAndbfour.style.display="block";
}
appearPhotofour.onmouseout=function()
{
    sAndbfour.style.display="none";
}
sAndbfour.onmouseover=function()
{
    sAndbfour.style.display="block";
}
sAndbfour.onclick=function()
{
    if( movePhotofour.style.display=="block")
    {
        movePhotofour.style.display="none";
        sAndbfour.className="suspendtwo";
    }
    else
    {
        movePhotofour.style.display="block"
        sAndbfour.className="broadcasttwo";
    }
}


//同上
appearPhotofive.onclick=function()
{
    sAndbfive.className="broadcasttwo";
    movePhotofive.style.display="block"
}
movePhotofive.onclick=function()
{
    sAndbfive.className="suspendtwo";
    movePhotofive.style.display="none";
}
movePhotofive.onmouseover=function()
{
    sAndbfive.style.display="block";
}
movePhotofive.onmouseout=function()
{
    sAndbfive.style.display="none";
}
appearPhotofive.onmouseover=function()
{
    sAndbfive.style.display="block";
}
appearPhotofive.onmouseout=function()
{
    sAndbfive.style.display="none";
}
sAndbfive.onmouseover=function()
{
    sAndbfive.style.display="block";
}
sAndbfive.onclick=function()
{
    if( movePhotofive.style.display=="block")
    {
        movePhotofive.style.display="none";
        sAndbfive.className="suspendtwo";
    }
    else
    {
        movePhotofive.style.display="block"
        sAndbfive.className="broadcasttwo";
    }
}


//同上
appearPhotosix.onclick=function()
{
    sAndbsix.className="broadcasttwo";
    movePhotosix.style.display="block"
}
movePhotosix.onclick=function()
{
    sAndbsix.className="suspendtwo";
    movePhotosix.style.display="none";
}
movePhotosix.onmouseover=function()
{
    sAndbsix.style.display="block";
}
movePhotosix.onmouseout=function()
{
    sAndbsix.style.display="none";
}
appearPhotosix.onmouseover=function()
{
    sAndbsix.style.display="block";
}
appearPhotosix.onmouseout=function()
{
    sAndbsix.style.display="none";
}
sAndbsix.onmouseover=function()
{
    sAndbsix.style.display="block";
}
sAndbsix.onclick=function()
{
    if( movePhotosix.style.display=="block")
    {
        movePhotosix.style.display="none";
        sAndbsix.className="suspendtwo";
    }
    else
    {
        movePhotosix.style.display="block"
        sAndbsix.className="broadcasttwo";
    }
}

//同上
appearPhotoseven.onclick=function()
{
    sAndbseven.className="broadcasttwo";
    movePhotoseven.style.display="block"
}
movePhotoseven.onclick=function()
{
    sAndbseven.className="suspendtwo";
    movePhotoseven.style.display="none";
}
movePhotoseven.onmouseover=function()
{
    sAndbseven.style.display="block";
}
movePhotoseven.onmouseout=function()
{
    sAndbseven.style.display="none";
}
appearPhotoseven.onmouseover=function()
{
    sAndbseven.style.display="block";
}
appearPhotoseven.onmouseout=function()
{
    sAndbseven.style.display="none";
}
sAndbseven.onmouseover=function()
{
    sAndbseven.style.display="block";
}
sAndbseven.onclick=function()
{
    if( movePhotoseven.style.display=="block")
    {
        movePhotoseven.style.display="none";
        sAndbseven.className="suspendtwo";
    }
    else
    {
        movePhotoseven.style.display="block"
        sAndbseven.className="broadcasttwo";
    }
}
//结束


var arraymain=document.getElementById("arraymain");
var leftarrow=document.getElementById("moveuplast");
var rightarrow=document.getElementById("moveupright");
var newleft=parseInt(arraymain.style.left);
leftarrow.onclick=function()
{
    if(newleft==-210)
    {//防止第一次点击转出两张图片
        newleft=-2414;
    }
    //大于-430.4时变为-2193.6形成循环
    if(newleft>-430.4)
    {
        newleft=-2414;
    }
    else
    {
        newleft=newleft+220.4;
        // arraymain.style.left=newleft+"px";
    }
    arraymain.style.left=newleft+"px";

}
rightarrow.onclick=function()
{//小于-1973.2时变为-210形成循环
    if(newleft<=-1973.2)
    {
        newleft=-210;
    }
    else
    {
        newleft=newleft-220.4;
    }
    arraymain.style.left=newleft+"px";
}
var onRemovalLeft=document.getElementById("onremovalleft");
var onRemovalRight=document.getElementById("onremovalright");
var onRemovalLeftTwo=document.getElementById("onremovallefttwo");
var onRemovalRightTwo=document.getElementById("onremovalrighttwo");
var removalOne=document.getElementById("removalone");
var removalTwo=document.getElementById("removaltwo");
var secondleft=parseInt(removalOne.style.left);
var thirdleft=this.parseInt(removalTwo.style.left);
onRemovalLeft.onclick=function()
{//小于-2400时变为0形成循环
    if(secondleft<-2400)
    {
        secondleft=0;
    }
    else
    {
        secondleft=secondleft-1200;
        
    }
    removalOne.style.left=secondleft+"px";
}
onRemovalRight.onclick=function()
{//大于-1200时变为-3600形成循环
    if(secondleft>-1200)
    {
        secondleft=-3600;
    }
    else{
        secondleft=secondleft+1200;
    }
    removalOne.style.left=secondleft+"px";
}
onRemovalLeftTwo.onclick=function()
{//小于-1200时变为0形成循环
    if(thirdleft<-1200)
    {
        thirdleft=0;
    }
    else
    {
        thirdleft=thirdleft-1200;
    }
    removalTwo.style.left=thirdleft+"px";
}
onRemovalRightTwo.onclick=function()
{//大于-1200时变为-2400形成循环
    if(thirdleft>-1200)
    {
        thirdleft=-2400;
    }
    else
    {
        thirdleft=thirdleft+1200;
    }
    removalTwo.style.left=thirdleft+"px";
}
var changedStar=document.getElementById("staraccess").getElementsByTagName("i");
var active=0;
var judge;
for(var i=0;i<5;i++)
{
    changedStar[i].id=i;
    changedStar[i].onmouseover=function()
    {
        // alert(this.id);
        if(judge)
        {//
            for(var n=0;n<5;n++)
            {//清空点击后的样式
              changedStar[n].className="samestar whitestar";
            }
            for(j=0;j<=this.id;j++)
            {//新的样式。此时触摸到几就是几个星变色。
              changedStar[j].className="samestar yellowstar"
            }
        }
        else
        {
                for(j=0;j<=this.id;j++)
              {
                changedStar[j].className="samestar yellowstar";
              }
        }
       
    }
    changedStar[i].onmouseout=function()
    {
        // alert(active);
        if(judge)
        {
            for(var n=0;n<5;n++)
            {//清空样式
                changedStar[n].className="samestar whitestar";
            }
            for(var x=0;x<=active;x++)
            {//保留点击样式
                changedStar[x].className="onafterstar";
            }
        }
        else
        {
            for(var t=0;t<5;t++ )
            {//未点击前的样式
                changedStar[t].className="samestar whitestar";
            }
        }
    }
  changedStar[i].onclick=function()
  {
      active=this.id;//读取id，使鼠标移除时样式保留。
      judge=true;//使点击后的onmouseover和onmouseout进行if中为真的语句。
    //   alert(active);
      for(var e=0;e<=this.id;e++)
      {
          changedStar[e].className=" onafterstar";
      }
      document.getElementById("last_onclick_block").style.display="block";
      document.getElementById("thinline").style.display="none";
      document.getElementById("last_a").style.display="block";
  }
}
document.getElementById("appearDiv").onclick=function()
{
    document.getElementById("greydiv").style.display="block";
    document.body.scrollTop = document.documentElement.scrollTop = 0;//返回顶部
    document.body.style.overflow="hidden";//去除滚动条，固定页面。
}
document.getElementById("hidegreydiv").onclick=function()
{//返回时原来改变的样式清除。
    document.getElementById("greydiv").style.display="none";
    document.getElementById("last_onclick_block").style.display="none";
    document.getElementById("thinline").style.display="block";
    document.getElementById("last_a").style.display="none";
    document.body.style.overflow="";//显出滚动条。
    for(var n=0;n<5;n++)
    {
    changedStar[n].className="samestar whitestar";
    }
}
// document.getElementById("changemistake").onclick=function()
// {
//     if(document.getElementById("hiddenheader").style.display=="none")
//     {
//         document.getElementById("hiddenheader").style.display="block";
//         document.getElementById("changemistake").className="appear_hide_headerchildtwo"
//     }
//     else
//     {
//         document.getElementById("hiddenheader").style.display="none";
//         document.getElementById("changemistake").className="appear_hide_headerchild"
//     }
//     }
    

}