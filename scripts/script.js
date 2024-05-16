list = document.getElementsByName("name")
let i = 0;
function check_leave(){
    let done = true
    while( i<list.length){
        list[i].style.color = "red"
        if(list[i].value == ""){
            done = false
            }

        i++
    }
    if(done){
        window.location.href = "../index.html";
    }else{
        document.getElementById("err_message").innerHTML = "Please fill out all boxes"
    }
}
