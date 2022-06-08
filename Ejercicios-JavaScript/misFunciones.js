/**
 * Conversion de unidades, de metros, yardas, pulgadas y pies.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metro, yardas, pulgada y pie
 * @param {number} valor - El valor los inputs de metro, yardas, pulgada y pie
 * @return
 */

function CambiarUnidades(id, valor) {

    if (isNaN(valor)){
        alert("Se ingreso un valor invalido");
        document.LasUnidades.unid_metro.value = "";
        document.LasUnidades.unid_pulgada.value = "";
        document.LasUnidades.unid_pie.value = "";
        document.LasUnidades.unid_yarda.value = "";
    }
    else if(id=="metro"){
        document.LasUnidades.unid_pulgada.value = 39.3701*valor;
        document.LasUnidades.unid_pie.value = 3.28084*valor;
        document.LasUnidades.unid_yarda.value = 1.09361*valor;
    }

    else if (id=="pulgada"){
        document.LasUnidades.unid_metro.value = 0,0254*valor;
        document.LasUnidades.unid_pie.value = 0.0833333*valor;
        document.LasUnidades.unid_yarda.value = 0.0277778*valor;
    }

    else if (id=="yarda"){
        document.LasUnidades.unid_metro.value = 0.9144*valor;
        document.LasUnidades.unid_pie.value = 3*valor;
        document.LasUnidades.unid_pulgada.value = 36*valor;
    }

    else if (id=="pie"){
        document.LasUnidades.unid_metro.value = 0.3048*valor;
        document.LasUnidades.unid_yarda.value = 0.333333*valor;
        document.LasUnidades.unid_pulgada.value = 12*valor;

    }


}

function convertirGR(id){
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;

    }
    else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI
    }
    Document.getElementById("grados").value = grad;
    Document.getElementById("radianes").value = rad;

}

function mostrar_ocultar(valorMO){

    if (valorMO=="val_mostrar"){
      document.getElementById("divMo").style.display = 'block';

    } else if(valorMO=="val_ocultar"){
        document.getElementById("divMo").style.display = 'none';
    }

}

function calcularSuma(){

    var num1, num2;
    num1= document.getElementsByName("sum_num1")[0].value;
    num2= document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value= Number(num1)+ Number(num2);


}

function calcularResta(){

    var num1, num2;
    num1= document.getElementsByName("res_num1")[0].value;
    num2= document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value= Number(num1)- Number(num2);

}

function calcularMultiplicacion(){

    var num1, num2;
    num1= document.getElementsByName("mul_num1")[0].value;
    num2= document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value= Number(num1) * Number(num2);


}

function calcularDivision(){

    var num1, num2;
    num1= document.getElementsByName("div_num1")[0].value;
    num2= document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value= Number(num1) / Number(num2);
}