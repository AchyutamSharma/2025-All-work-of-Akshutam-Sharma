function addData(){
    let currentInput = $("input").val();
    console.log(currentInput);

    let newItem = $("<li></li>").text(currentInput);

    let deleteBtn = $("<button>Delete</button>").addClass("del-btn");
    newItem.append(deleteBtn);

    $("ul").append(newItem);
    $("input").val("");
}

$("ul").on("click",".del-btn",function(){
  $(this).closest("li").remove();  
});

$(".add").click(()=>{
  let userData = $("input").val();
  if (userData.length >=1) {
    addData();
    $("#showContainer").removeClass("hide");
  } else {
    alert("Enter the Value");    

  }
});
