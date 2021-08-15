
  window.addEventListener("load" , () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
          "green",
          "blue",
          "red",
          "purple",
          "orange"

];

        pads.forEach(( pad , index ) => {
        pad.addEventListener("click", function() {
        if (sounds[index].paused) {
          sounds[index].play();
        } else {
          sounds[index].pause();
      }
        CreateBubbles(index);
});
});

        const CreateBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.opacity = "0.3";
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation =  "jump 9s ease";
        bubble.style.animation.duration = "2s";
        bubble.addEventListener("animationend" , function(){
        visual.removeChild(this);



        });


     };


});
