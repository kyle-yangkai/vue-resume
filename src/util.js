
/******************************* 公共函数库 ****************************************/

/** 防抖函数（一次操作只触发一次）
 *  params explain
 * fn-->执行的函数
 * interval-->时间间隔
 */ 
const debounceFunc = function (fn,interval){
    var timer,
        isFirst  = true,
            can = false;
    return function(){
        var args = arguments,
            that = this;
        if(timer){
            clearTimeout(timer)
            timer = null
        }
        if(isFirst){
            fn.apply(that,args)
            isFirst = false
            setTimeout(() => {
                can = true
            }, interval || 1000);
        }else if(can){
            timer = setTimeout(() => {
                fn.apply(null,args)
            }, interval || 1000);
        }
    }
}
/** 节流函数（触发时间间隔内只触发一次）
 *  params explain
 * fn-->执行的函数
 * interval-->触发时间间隔
 */ 
const throttleFunc = function (fn,interval){
    var timer,
        isFirst = true;
    return function(){
        var args = arguments,
            that = this;
        if(isFirst){
            fn.apply(that,args)
            return isFirst = false
        }
        if(timer){
            return
        }
        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
            fn.apply(that,args)
        }, interval || 1000);
    }   
}

// 判断pc端还是移动端
const mobileCheck = function () {
    let check = false;
    (function (a, b) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera)
    return check
}

// 饼状图绘制
const goChart = function(dataArr){
    // 声明所需变量
    var canvas,ctx;
    // 图表属性
    var cWidth, cHeight, cMargin, cSpace;
    // 饼状图属性
    var radius,ox,oy;//半径 圆心
    var tWidth, tHeight;//图例宽高
    var posX, posY, textX, textY;
    var startAngle, endAngle;
    var totleNb;
    var rotateAngle;
    // 运动相关变量
    var ctr, numctr, speed;
    //鼠标移动
    var mousePosition = {};
    //线条和文字
    var lineStartAngle,line,textPadding,textMoveDis;
    //数据
    var new_data_arr;
      
    // 获得canvas上下文
    canvas = document.getElementById("chart");
    if(canvas && canvas.getContext){
        ctx = canvas.getContext("2d");
    }

    initChart(); 
    // 图表初始化
    function initChart(){
      // 图表信息
      cMargin = 20;
      cSpace = 40;
      canvas.width = canvas.parentNode.getAttribute("width")* 2 ;
      canvas.height = canvas.parentNode.getAttribute("height")* 2;
      canvas.style.height = canvas.height/2 + "px";
      canvas.style.width = canvas.width/2 + "px";
      cHeight = canvas.height - cMargin*2;
      cWidth = canvas.width - cMargin*2;

      //饼状图信息
      radius = cHeight*2/6;  //半径  高度的2/6
      ox = canvas.width/2 + cSpace;  //圆心
      oy = canvas.height/2;
      tWidth = 60; //图例宽和高
      tHeight = 20; 
      posX = cMargin;
      posY = cMargin;   
      textX = posX + tWidth + 15
      textY = posY + 18;
      startAngle = endAngle = 90*Math.PI/180; //起始弧度 结束弧度
      rotateAngle = 0; //整体旋转的弧度

      //将传入的数据转化百分比
      totleNb = 0;
      new_data_arr = [];
      for (var i = 0; i < dataArr.length; i++){
          totleNb += dataArr[i][0];
      }
      for (var i = 0; i < dataArr.length; i++){
          new_data_arr.push( dataArr[i][0]/totleNb );
      }
      var totalYNomber = 10;
      // 运动相关
      ctr = 1;//初始步骤
      numctr = 50;//步骤
      speed = 1.5; //毫秒 timer速度
      
      //指示线 和 文字
      lineStartAngle = -startAngle;
      line=60;         //画线的时候超出半径的一段线长
      textPadding=20;  //文字与线之间的间距
      textMoveDis = 200; //文字运动开始的间距
    }
      
          drawMarkers();
    //绘制比例图及文字
    function drawMarkers(){
      ctx.textAlign="left";
        for (var i = 0; i < dataArr.length; i++){
          //绘制比例图及文字
          ctx.fillStyle = dataArr[i][1];
          ctx.fillRect(posX, posY + 40 * i, tWidth, tHeight);
          ctx.moveTo(posX, posY + 40 * i);
          ctx.font = 'normal 30px 微软雅黑';    //斜体 30像素 微软雅黑字体
          ctx.fillStyle = dataArr[i][1]; //"#000000";
          var skill = dataArr[i][2];
          ctx.fillText(skill, textX, textY + 40 * i);
        }
    };
          
        //绘制动画
    pieDraw();
    function pieDraw(mouseMove){
      for (var n = 0; n < dataArr.length; n++){
        ctx.fillStyle = ctx.strokeStyle = dataArr[n][1];
        ctx.lineWidth=1;
        var step = new_data_arr[n]* Math.PI * 2; //旋转弧度
        var lineAngle = lineStartAngle+step/2;   //计算线的角度
        lineStartAngle += step;//结束弧度
        
        ctx.beginPath();
        var x0=ox+radius*Math.cos(lineAngle),//圆弧上线与圆相交点的x坐标
            y0=oy+radius*Math.sin(lineAngle),//圆弧上线与圆相交点的y坐标
            x1=ox+(radius+line)*Math.cos(lineAngle),//圆弧上线与圆相交点的x坐标
            y1=oy+(radius+line)*Math.sin(lineAngle),//圆弧上线与圆相交点的y坐标
            x2=x1,//转折点的x坐标
            y2=y1,
            linePadding=ctx.measureText(dataArr[n][3]).width+10; //获取文本长度来确定折线的长度
          
        ctx.moveTo(x0,y0);
        //对x1/y1进行处理，来实现折线的运动
        var yMove = y0+(y1-y0)*ctr/numctr;
        ctx.lineTo(x1,yMove);
        if(x1<=x0){
          x2 -= line;
          ctx.textAlign="right";
          ctx.lineTo(x2-linePadding,yMove);
          ctx.fillText(dataArr[n][3],x2-textPadding-textMoveDis*(numctr-ctr)/numctr,y2-textPadding);
        }else{
          x2 += line;
          ctx.textAlign="left";
          ctx.lineTo(x2+linePadding,yMove);
          ctx.fillText(dataArr[n][3],x2+textPadding+textMoveDis*(numctr-ctr)/numctr,y2-textPadding);
        }
        ctx.stroke();
      }
      //设置旋转
      ctx.save();
      ctx.translate(ox, oy);
      ctx.rotate((Math.PI*2/numctr)*ctr/2);
      
      //绘制一个圆圈
      ctx.strokeStyle = "rgba(0,0,0,"+ 0.5*ctr/numctr +")"
      ctx.beginPath();
      ctx.arc(0, 0 ,(radius+20)*ctr/numctr, 0, Math.PI*2, false);
      ctx.stroke();
      
      for (var j = 0; j < dataArr.length; j++){
        //绘制饼图
        endAngle = endAngle + new_data_arr[j]* ctr/numctr * Math.PI * 2; //结束弧度
        
        ctx.beginPath();
        ctx.moveTo(0,0); //移动到到圆心
        ctx.arc(0, 0, radius*ctr/numctr, startAngle, endAngle, false); //绘制圆弧
        
        ctx.fillStyle = dataArr[j][1];
        if(mouseMove && ctx.isPointInPath(mousePosition.x*2, mousePosition.y*2)){
            ctx.globalAlpha = 0.8;
        }
        
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;

        startAngle = endAngle; //设置起始弧度
        if( j == dataArr.length-1 ){
            startAngle = endAngle = 90*Math.PI/180; //起始弧度 结束弧度
        }
      }
        
      ctx.restore();
            
      if(ctr<numctr){
        ctr++;
        setTimeout(function(){
            //ctx.clearRect(-canvas.width,-canvas.width,canvas.width*2, canvas.height*2);
            ctx.clearRect(-canvas.width, -canvas.height,canvas.width*2, canvas.height*2);
            drawMarkers();
            pieDraw();
        }, speed*=1.085);
      }
    }
          
    //监听鼠标移动
    var mouseTimer = null;
    canvas.addEventListener("mousemove",function(e){
      e = e || window.event;
      if( e.offsetX || e.offsetX==0 ){
          mousePosition.x = e.offsetX;
          mousePosition.y = e.offsetY;
      }else if( e.layerX || e.layerX==0 ){
          mousePosition.x = e.layerX;
          mousePosition.y = e.layerY;
      }
      
      clearTimeout(mouseTimer);
      mouseTimer = setTimeout(function(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
          drawMarkers();
          pieDraw(true);
      },10);
    });
}

export {
    debounceFunc,
    mobileCheck,
    goChart
}