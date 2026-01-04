// video 156

$("h1").click(function() {
  $("h1").css("color","red")
});


// this is js code 
for(var i=0;i<4;i++){
  
    document.querySelectorAll("button")[i].addEventListener("click", function(){
      document.querySelector("h1").style.color = "red";
    });
}

document.querySelectorAll("button")[4].addEventListener("click", function(){
  document.querySelector("h1").style.color = "white";
});

// this is jQuery code but it change to red
// $("button").click(function(){
//   $("h1").css("color","red")
// })

var oldEvent = " ";
$("input").keypress(function(event) {
  console.log(event.key);
  oldEvent = oldEvent+event.key;
  $("div").text(oldEvent);
})


$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});

// video - 157

$("h1").before("<button>Before</button>"); // brefore the h1 tag.
$("h1").after("<button>After</button>"); // after the h1 tag.
$("h1").prepend("<button>prepend</button>"); // prepend means inside the h1 but before the content.
$("h1").append("<button>append</button>");// append means inside the h1 but after the content.


