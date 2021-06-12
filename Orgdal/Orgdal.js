//you use start output to render innerhtml
        // you dont do another document.get because lower is not a dom element its is Js object and we have used start return to make is consumable
        // == is comparative = is used as setter we are setting not comparing as code would suggest 
        var content= `<svg height="190" width="200" Class="Drawing" id="container">
        <polyline id="sigma_bonds" points="85,20.333 152.55,58.333 152.55,138.333  85,172.333  17.45,134.333  17.45,58.333 85,20.333 152.55,58.333 "/>
        <polyline id="pi_bondA" points="92,42.333 131.55,64"/>
        <polyline id="pi_bondB" points="132.55,130.333 93,152"/>
        <polyline id="pi_bondC" points="33.45,120.333 33.45,72.333"/>
         <g class="circles" fill="transparent">
         <circle id="pointA" cx="85" cy="20.333" r="10">
          </circle>
         <circle id="pointB" cx="152.55" cy="58.333" r="10">
          </circle>
          <circle id="pointC" cx="152.55" cy="134.333" r="10">
            </circle>
            <circle id="pointD" cx="85" cy="172.333" r="10">
              </circle>
              <circle id="pointE" cx="17.45" cy="134.333" r="10">
                </circle>
                <circle id="pointF" cx="17.45" cy="58.333" r="10">
                </circle></g> 
        Sorry, your browser does not support inline SVG.
        </svg>`
        
			function myFunction(event)
      {var x = event.which||event.keycode;
        console.log("keycode is "+x)
			if (x=="13"){
      function benzene() 
      {var benzene=document.getElementById("board").value.toString().toLowerCase().split(" ").indexOf("benzene");
return benzene}
console.log("User has written \"benzene\" at",benzene(),"position.");

      if(benzene()>-1){
        var display=document.getElementById("display")
        var Structure_Name=document.getElementById("Structure_Name");
        var screen=document.getElementById("screen")
        display.innerHTML=content;
        Structure_Name.innerHTML="<b>Benzene (C<sub>6</sub>H<sub>6</sub>)</b>";
        display.classList.remove("Structure");
        screen.classList.remove("Structure");
        let speech = new SpeechSynthesisUtterance();
                speech.lang = "en-UN";
                speech.text = "Detected . Benzene . with the formula C6,H6";
                speech.volume = 8;
			          speech.rate = 0.95;
                speech.pitch = 0;
				Synthesis=window.speechSynthesis.speak(speech);
        console.log("The compound Benzene was detected.")
    }
  }}
  function namesanimation(){$(".Name").toggleClass("Name_hovered");};
  function input(){$(".input").toggleClass("input_hovered");};