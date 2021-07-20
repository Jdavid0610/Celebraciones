var created=0;


function SendEmail(){
    window.open('mailto:jdavidortizy2k@gmail.com?subject=holi&body=exd');
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