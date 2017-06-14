


function moveTop(elem,target,speed,daly){
  clearInterval(moveTop.timer);
  speed = target > elem.scrollTop ? speed : -speed;
  moveTop.timer = setInterval(function(){

    if (Math.abs(elem.scrollTop - target)<= Math.abs(speed)) {
      elem.scrollTop=target + 'px';
      clearInterval(moveTop.timer);
      return;
    }
     elem.scrollTop = elem.scrollTop + speed + 'px';
  },daly)
}
