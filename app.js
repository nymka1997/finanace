// Дэлэгцэн дээр ажилах контролор
var uiController =(function(){

})();

// Санхүүтэй дээр ажилах контролор
var finaceController =(function(){

})();


// Програмын дээр ажилах контролор
var appController =(function(){
    
    var ctrlAddItem = function(){

        console.log("darlaaaa")
    }


    document.querySelector(".add__btn").addEventListener("click",function(){
        ctrlAddItem();
    });


    document.addEventListener("keypress",function(event){
       if (event.keyCode === 13 || event.which === 13) {
         ctrlAddItem();
       }
    });
     
})();