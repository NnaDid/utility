"use strict";
let col = sessionStorage.getItem("bgColor") || "fff";  // bg color variable
document.body.style.background ="#"+col;

const select__utility = document.getElementById("select__utility");
const variant         = document.getElementById("variant");

let variant_option = "<option selected disabled>Select Variant</option>";
variant.innerHTML = variant_option;  // displaying the default variant

select__utility.addEventListener("change", function(evt){
      
    switch(evt.target.value){
        case "airtime":
            variant_option = `<option value="AIRTEL"> Airtel Airtime </option>
                              <option value="MTN"> MTN Airtime </option>
                              <option value="GLO"> GLO Airtime </option>
                              <option value="9MOBILE"> 9Mobile Airtime </option>
                            `;
                            // variant.innerHTML = variant_option; 
        break;

        case "tv":
            variant_option = `<option value="DSTV">DSTV Subscription</option>
                              <option value="GOTV"> GOTV Payment </option>
                              <option value="STARTIMES"> STARTIMES Subscription</option> 
                            `;
                            // variant.innerHTML = variant_option; 
        break;

        case "electricity":
            variant_option = `  <option value="IKEDC"> Ikeja Electricity - IKEDC</option>
                                <option value="KEDCO"> Kano Electricity  - KEDCO</option>
                                <option value="PHED">  Portharcourt Electricity - PHED </option>
                                <option value="JED"> Jos Electricity - JED</option>
                                <option value="EKEDC"> Eko Electricity - EKEDC</option>
                                <option value="AEDC"> Abuja  Electricity - AEDC</option>
                                <option value="KAEDCO"> Kaduna  Electricity - KAEDCO</option>
                                <option value="IBEDC"> Ibadan  Electricity - IBEDC</option>
                                <option value="EEDC"> Enugu Electricity - EEDC</option>
                                <option value="BEDC"> Bemin Electricity - BEDC</option>
                 `; 

        break;

    }
    variant.innerHTML = variant_option; 
   
});



// document.querySelectorAll('nav--bar').addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = e.target;
//     if (target.classList.contains('link--a')) {
//         const id = target.getAttribute('href').slice(1);
//         document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//     }
// });

document.querySelectorAll('div.links a').forEach((a)=>{
    a.addEventListener("click", function(e){
        //  e.preventDefault();
         const link = e.target; 
         // remove all active classes
         removeActiveClass( document.querySelectorAll('div.links a') ); 
         //then add the acitve class to the current tab
         link.classList.add('active');

         if(link.classList.contains("link-a")){
            const id = link.getAttribute('href').split("#")[1];
            // const id2 = location.hash;
            // console.log(id, id2);
            if(id !== undefined){
                document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            }
           
         }
    });
});

// this function removes all the active classes from the a element(s)
function removeActiveClass(list){
     for(let x of list){
        if(x.classList.contains("active")){
            x.classList.remove("active");
        }
     }
}




// the bottom button
let bottom_btn = document.querySelector(".up__arrow");
bottom_btn.addEventListener("click",function(e){ 
     let color = Math.floor( Math.random() * 1000 );
     sessionStorage.setItem("bgColor", color);
     
     if( sessionStorage.getItem("bgColor") ){
        col = sessionStorage.getItem("bgColor");
        document.body.style.background ="#"+col;
     }else{
        document.body.style.background ="#"+color;
     } 
    
});


/// WOrking with the STORAGE API

//localStorage
localStorage.setItem("myStore","GoldStock");
// localStorage.setItem("myArrStore",[2,4,6,7,9,12,34,3]);
// localStorage.setItem("myObjectStore",{"name":"GoldStock","worth":"200BTC"});
localStorage.setItem("myArrStore",JSON.stringify([2,4,6,7,9,12,34,3]));
localStorage.setItem("myObjectStore",JSON.stringify({"name":"GoldStock","worth":"200BTC"}) );

let store = localStorage.getItem("myStore");
let myObj = JSON.parse( localStorage.getItem("myObjectStore") );

console.log(myObj);
console.log(myObj.name);


console.log( typeof localStorage.getItem("myArrStore") );
console.log(  JSON.parse( localStorage.getItem("myArrStore") ) );

console.log(store);


//sessionStorage
// sessionStorage.setItem("myStore2","GoldStock2");


let mystr = "I am welcome to this place";
let part  = mystr.substring(5,9);
console.log(part);


function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }

  checkCookie();

