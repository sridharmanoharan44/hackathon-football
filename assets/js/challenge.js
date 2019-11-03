
function saveGoal(){

    var goalKeeper1 = $("#goalKeeper1");
    var goalKeeper2 = $("#goalKeeper2");
    var pos1 = goalKeeper1.position().left ;
    var pos2 = goalKeeper2.position().left ;

    start1 = true;
    start2 = true;

    interval = setInterval(function () {   

        if (pos1 >450){
            start1 = false
        }
        if (pos1 <100){
            start1 = true
        }

        if (start1==true) { 
            pos1=pos1+10;
            goalKeeper1.css('left', pos1 );
        } else {
            pos1=pos1-10;
            goalKeeper1.css('left', pos1 );
      } 
    }, 40);

    interval2 = setInterval(function () {   

        if (pos2 >440){
            start2 = false
        }
        if (pos2 <110){
            start2 = true
        }

        if (start2==true) { 
            pos2=pos2+10;
            goalKeeper2.css('left', pos2 );
        } else {
            pos2=pos2-10;
            goalKeeper2.css('left', pos2 );
      } 
    }, 50);
}



function kick(ball,x,y){
var goalKeeper1Coordinates= $("#goalKeeper1")[0].x + $("#goalKeeper1")[0].y;
var goalKeeper2Coordinates = $("#goalKeeper2")[0].x + $("#goalKeeper2")[0].y;
var ballcoordinates = x+y;
var arrayList = [goalKeeper1Coordinates,goalKeeper2Coordinates];
var nearestKeeper = closestKeeper(arrayList, ballcoordinates);

if(nearestKeeper === goalKeeper1Coordinates){
 $("#goalKeeper1").css('left', x);
  console.log('Goal keeper 1 saved a goal')
}
else{
 $("#goalKeeper2").css('left', x);
 console.log('Goal keeper 2 saved a goal)

}

setTimeout(()=>{
	saveGoal();
}, 2000);

    kickAction = setInterval(function () { 
	clearInterval(interval);
	clearInterval(interval2);

        if (y <310){
            
            clearInterval(kickAction);
        }
        
        y=y-10;
        ballSize =y/7;       
        ball.css('top', y );   
        ball.css('height', ballSize );   
     }, 60)

}

function closestKeeper(arr,val){
    return Math.max.apply(null, arr.filter(function(v){return v <= val}))
}

	

function hanldeMouse(){

    footBall = $('#footBall');

    $(document).mousemove(function(event){
        
        footBall.css('left', event.pageX );
        footBall.css('top', event.pageY );
      });

    footBall.click(function() {
        kick(footBall,event.pageX,event.pageY)

    });
      
}

function initialize(){
    $("#goalKeeper1").css('left', Math.random() * (+450 - +100) + +100 );
    $("#goalKeeper2").css('left', Math.random() * (+440 - +110) + +110 );
}

$(window).on('load', function() {
    initialize();
    saveGoal();
    hanldeMouse();
})


