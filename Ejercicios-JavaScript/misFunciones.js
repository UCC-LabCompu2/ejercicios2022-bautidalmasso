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