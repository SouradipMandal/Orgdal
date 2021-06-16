
var content = `<svg height = "190" width = "200" Class = "Drawing" id = "container"> 
               <polyline id = "sigma_bonds" points = "85,20.333 152.55,58.333 152.55,138.333  85,172.333  17.45,134.333  17.45,58.333 85,20.333 152.55,58.333 "/> 
               <polyline id = "pi_bondA" points = "92,42.333 131.55,64"/> 
               <polyline id = "pi_bondB" points = "132.55,130.333 93,152"/> 
               <polyline id = "pi_bondC" points = "33.45,120.333 33.45,72.333"/> 
               <g class = "circles" fill = "transparent"> 
               <circle id = "pointA" cx = "85" cy = "20.333"r = "10" > </circle>
               <circle id="pointB" cx="152.55" cy="58.333" r="10">
               </circle> 
               <circle id = "pointC" cx = "152.55"cy = "134.333" r = "10" > 
               </circle>
               <circle id="pointD" cx="85" cy="172.333" r="10">
               </circle> 
               <circle id = "pointE" cx = "17.45" cy = "134.333" r = "10" > 
               </circle>
               <circle id="pointF" cx="17.45" cy="58.333" r="10">
               </circle> 
               </g> 
                Sorry, your browser does not support inline SVG.
               </svg>`
function myFunction(event) {
    var x = event.which || event.keycode;
    console.log("keycode is " + x)
    if (x == "13") {
        function animateup(){$(".input").addClass("align_upwards")};
        animateup()
        function animateup_Websitename(){$(".website_name").addClass("align_upwards_website_name")};
        animateup_Websitename()
        function addmargin(){$(".top_margin").addClass("display_top_margin").removeClass('top_margin')};
        addmargin()
        function benzene() {
            var benzene = document.getElementById("board").value.toString().toLowerCase().split(" ").indexOf("benzene");
            return benzene
        }
        console.log("User has written \"benzene\" at", benzene(), "position.");
        if (benzene() > -1) {
            var display = document.getElementById("display")
            var Structure_Name = document.getElementById("Structure_Name");
            var screen = document.getElementById("screen");
            var hidden_Structure_name = document.getElementById("hidden_Structure_name");
            var display_more_info = document.getElementById("display_more_info");
            display.innerHTML = content;
            hidden_Structure_name.innerHTML = "<b>Benzene (C<sub>6</sub>H<sub>6</sub>)</b>";
            Structure_Name.innerHTML = "<b>Benzene (C<sub>6</sub>H<sub>6</sub>)</b>";
            display_more_info.innerHTML = "The benzene molecule is composed of six Carbon atoms and 6 Hydrogen atoms joined in a planar hexagonal ring in which each carbon atom is attached to its two adjacent carbon atoms with sigma bonds,one hydrogen atom with another sigma bond and one adjacent carbon atom with a pi bond . Because it contains only carbon and hydrogen atoms in a planar structure, benzene is classed as an aromatic hydrocarbon.";
            display.classList.remove("Structure");
            screen.classList.remove("Structure");
            let speech = new SpeechSynthesisUtterance();
            speech.lang = "en-UN";
            speech.text = "Detected . Benzene . with the formula C6,H6";
            speech.volume = 8;
            speech.rate = 0.9;
            speech.pitch = 0;
            Synthesis = window.speechSynthesis.speak(speech);
            console.log("The compound Benzene was detected.")
        }
    }
}
var display = document.getElementById("display");
var Structure_Name = document.getElementById("Structure_Name");
var screen = document.getElementById("screen");
var hidden_Structure_name = document.getElementById("hidden_Structure_name")
var Structure_Name = document.getElementById("Structure_Name");
var display_more_info = document.getElementById("more_info");
//animating the name box by adding new class to it

//animating the input box by adding new class to it
function input() {
    $(".input").toggleClass("input_hovered").toggleClass('input');
    $(".input_hovered").toggleClass("input").toggleClass("input_hovered");
};
//animating the name box to display info about the compound on clicking
function more_info() {$("#display_more_info").toggleClass('not_collapsed')}
