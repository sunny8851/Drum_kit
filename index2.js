var no=document.querySelectorAll(".drum").length;
for(var i=0;i<no;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var word= this.innerHTML;
    switch (word) {
      case "W":
         var audio=new Audio("sound/crash.mp3");
         audio.play();
        break;
      case "A" :
          var audio=new Audio("sound/kick-bass.mp3");
          audio.play();
          break;
      case "S" :
            var audio=new Audio("sound/snare.mp3");
            audio.play();
            break;
      case "D" :
              var audio=new Audio("sound/tom-1.mp3");
              audio.play();
              break;
      case "J" :
                var audio=new Audio("sound/tom-2.mp3");
                audio.play();
                break;
      case "K" :
                  var audio=new Audio("sound/tom-3.mp3");
                  audio.play();
                  break;
        case "L" :
                    var audio=new Audio("sound/tom-4.mp3");
                    audio.play();
                    break;
      default:console.log(word);

    }
  });
}
