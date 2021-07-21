
var created=0;


function SendEmail(){
    let servicioselect=document.getElementById("Servicio");
    let service=servicioselect.options[servicioselect.selectedIndex].text;
    let motivoselect=document.getElementById("motivo");
    let motive=motivoselect.options[motivoselect.selectedIndex].text;
    let message = document.getElementById("Algunas_Palabras").value;
    let date = document.getElementById("fecha").value;
    let place = document.getElementById("place").value;
    let address = document.getElementById("address").value;
    let cellphone = document.getElementById("cellphone").value;
    let email = document.getElementById("email").value;
    let celebrated_name = document.getElementById("celebrated_name").value;
    let from_name= document.getElementById("celebrator_name").value;
    if(service=="Selecciona el servicio"||motive=="Selecciona el motivo"||message==""||date==""||place==""||address==""||cellphone==""||
        email==""||celebrated_name==""||from_name==""){
        alert("Porfavor llene todos los campos");
    }else{
        var template = {
            from_name: from_name,
            service: service,
            motive: motive,
            celebrated_name: celebrated_name,
            message: message,
            date: date,
            place: place,
            address: address,
            cellphone: cellphone,
            email: email,
            reply_to: email,
        };
        emailjs.send("service_yxaaanc","template_v6pbpfn",template).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Tu correo ha sido enviado con exito, pronto te contactaremos");
         }, function(error) {
            console.log('FAILED...', error);
         });
    }
}
function CreateElement(tag,id,text){
    var Obj=document.createElement(tag);
    Obj.id=id;
    Obj.innerHTML=text;
    return Obj;
}
/*
function ServiceSelected(){
    
    var referencia=document.getElementsByClassName("form");
    var ref=referencia[0];
    //se trae lo seleccionado
    var servicio=document.getElementById("Servicio");
    var selected=servicio.options[servicio.selectedIndex].text;
    if (created==0){
        created=1;
        //----------------------------------------------------
        var selectmotive=CreateElement("select","motivo","");

        var option = CreateElement("option","","Selecciona el motivo");
        selectmotive.appendChild(option);

        option = CreateElement("option","","Cumpleaños");
        selectmotive.appendChild(option);

        option = CreateElement("option","","Aniversario");
        selectmotive.appendChild(option);

        option = CreateElement("option","","Graduación");
        selectmotive.appendChild(option);

        option = CreateElement("option","","Baby Shower");
        selectmotive.appendChild(option);

        option = CreateElement("option","","Primera Comunion");
        selectmotive.appendChild(option);

        option = CreateElement("option","","Otro");
        selectmotive.appendChild(option);

        selectmotive.setAttribute("onchange","MotiveSelected()");

        ref.appendChild(selectmotive);


    }else if(created==1&&selected=="Selecciona el servicio"){   
        created=0;
        var del = document.getElementById("motivo");
        del.remove();
    }
}

function MotiveSelected(){
    
    var referencia=document.getElementsByClassName("form");
    var ref=referencia[0];
    var motivo = document.getElementById("motivo");
    var selectedMotive=motivo.options[motivo.selectedIndex].text;
    
    if(created==1&&selectedMotive=="Otro"){
        created=2;

        var OtroMotivo=CreateElement("input","Otro_Motivo","");
        OtroMotivo.placeholder="Escriba el motivo";
        ref.appendChild(OtroMotivo);

        var Algunas_palabras=CreateElement("textarea","Algunas_Palabras","");
        Algunas_palabras.placeholder="Escriba algunas lindas palabras para esa persona especial";
        ref.appendChild(Algunas_palabras);

    }
    if(created==1){
        created=2;

        var Algunas_palabras=CreateElement("textarea","Algunas_Palabras","");
        Algunas_palabras.placeholder="Escriba algunas lindas palabras para esa persona especial";
        ref.appendChild(Algunas_palabras);

        var Fecha_Label=CreateElement("label","fecha_label","Selecciona la fecha y hora de entrega");
        ref.appendChild(Fecha_Label);
        var Fecha=CreateElement("input","fecha","");
        Fecha.type="datetime-local";
        ref.appendChild(Fecha);


    }else if(created==2&&selectedMotive=="Selecciona el motivo"){
        created=1;

        var del = document.getElementById("Algunas_Palabras");
        var del2 = document.getElementById("Otro_Motivo");
        del.remove();
        del2.remove();
       
    }
}
*/
function MotiveSelected(){
    
    var referencia=document.getElementsByClassName("form");
    var ref=referencia[0];
    var motivo = document.getElementById("motivo");
    var selectedMotive=motivo.options[motivo.selectedIndex].text;
    
    if(selectedMotive=="Otro"){
        created=2;

        var OtroMotivo=CreateElement("input","Otro_Motivo","");
        OtroMotivo.placeholder="Escriba el motivo";
        motivo.insertAdjacentElement("afterend",OtroMotivo);

    }else if(created==2&&selectedMotive!="Otro"){
        created=1;
        var del2 = document.getElementById("Otro_Motivo"); 
        del2.remove();
       
    }
}
function ResponsiveNavBar() {
    var x = document.getElementById("NavBar__items");
    if (x.className === "NavBar__items") {
      x.className += " responsive";
    } else {
      x.className = "NavBar__items";
    }
  }