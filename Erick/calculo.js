function calcular() {
    var alturavalor = document.calcForm.alturavalor.value;
    var basevalor = document.calcForm.basevalor.value;

    var areatotal = basevalor * alturavalor;
    document.calcForm.resareatotal.value = areatotal;
}