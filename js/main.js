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
