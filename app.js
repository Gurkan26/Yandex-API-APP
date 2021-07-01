// Prototype, Ajax, Callback 


eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);
    // change
    document.getElementById("language").onchange=function(){
        // arayüz işlemlerini gerçekleşeceği yer 
        ui.changeUI();
    };

}
const ui = new UI();
const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
function translateWord(e){

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

    translate.translateWord(function(err,response){
        if(err){
            //hata
            console.log(err);
        }
        else {
            console.log(response);
            ui.displayTranslate(response);


         }
    });



    e.preventDefault();
}