"use strict";
const select__utility = document.getElementById("select__utility");
const variant         = document.getElementById("variant");

let variant_option = "<option selected disabled>Select Variant</option>";
variant.innerHTML = variant_option;  // displaying the default variant

select__utility.addEventListener("change", function(evt){
      
    switch(evt.target.value){
        case "airtime":
            variant_option = `<option value="AIRTEL">Airtel Airtime</option>
                              <option value="MTN"> MTN Airtime</option>
                              <option value="GLO"> GLO Airtime</option>
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
         e.preventDefault();
         const link = e.target; 
         // remove all active classes
         removeActiveClass( document.querySelectorAll('div.links a') ); 
         //then add the acitve class to the current tab
         link.classList.add('active');

         if(link.classList.contains("link-a")){
            const id = link.getAttribute('href').split("#")[1];
            if(id !== undefined){
                document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
            }
            console.log(id);
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
    console.log(this);
     let color = Math.floor( Math.random() * 1000 );
    //  console.log(color);
    document.body.style.background ="#"+color;
});

var amira = 0;
const amia = 10;

console.log(window);
console.log(this);
