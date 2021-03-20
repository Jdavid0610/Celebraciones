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
function ServiceSelected(){
    
    var referencia=document.getElementsByClassName("container");
    var ref=referencia[0];
    //se trae lo seleccionado
    var servicio=document.getElementById("Servicio");
    var selected=servicio.options[servicio.selectedIndex].text;
    if (created==0){
        created=1;
        //----------------------------------------------------
        var selectmotive=CreateElement("select","motivo","");

        var option = CreateElement("option","","Seleccione el motivo")
        selectmotive.appendChild(option);

        option = CreateElement("option","","Cumpleaños")
        selectmotive.appendChild(option);

        option = CreateElement("option","","Aniversario")
        selectmotive.appendChild(option);

        option = CreateElement("option","","Graduación")
        selectmotive.appendChild(option);

        option = CreateElement("option","","Baby Shower")
        selectmotive.appendChild(option);

        option = CreateElement("option","","Primera Comunion")
        selectmotive.appendChild(option);

        option = CreateElement("option","","Otro")
        selectmotive.appendChild(option);
        ref.appendChild(selectmotive)
        
    }else if(created!=0&&selected=="Selecciona el servicio"){   
        created=0;
        var del = document.getElementById("motivo");
        del.remove();
    }
}