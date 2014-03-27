//////////////////////////////////////////////////////////
////                                                  ////  
////      @ 1 9 9 9 * l a t i n s a l u d . c o m     ////  
////                                                  ////  
//////////////////////////////////////////////////////////

function checkform(obj) {
  var form = obj.form;

  if (form.age.value == null || form.age.value.length == 0) {
    var isNumber = false;
  } else {
    var isNumber = gIsNumber(form.age.value);
  }

  if ((obj.name == "change_focus") && (form.age.value == null || form.age.value.length == 0)) {
    alert('Imposible calcular su ritmo cardiaco ideal si no ingresa su edad');
    form.age.focus();
    form.age.select();
    return false;
  } else if (isNumber == false) {
    alert("Edad incorrecta: Ingresela nuevamente.");
    form.age.focus();
    form.age.select();
    return false;
  } else if (parseFloat(form.age.value) <= 0) {
    alert("Edad incorrecta: Ingresela nuevamente.");
    form.age.focus();
    form.age.select();
    return false;
  } else if (parseFloat(form.age.value) > 119) {
    alert("Edad incorrecta: Ingresela nuevamente.");
    form.age.focus();
    form.age.select();
    return false;
  } else {
    return true;
  }
}

function computeform(obj) {
  var baseNum = 220;
  var callerForm = obj.form;
  var secondsSelected = callerForm.seconds.selectedIndex;

  if (checkform(obj)) {
      if (callerForm.Gender[1].checked) baseNum = 222;
      var age = callerForm.age.value;
      var maxHR = (baseNum - age);

      callerForm.max_thr.value = Math.round(((maxHR * 0.6)/60) * (callerForm.seconds.options[secondsSelected].value));
      callerForm.min_thr.value = Math.round(((maxHR * 0.85)/60) * (callerForm.seconds.options[secondsSelected].value));

      callerForm.hrmax.value = Math.round((maxHR/60) * (callerForm.seconds.options[secondsSelected].value));

    if (obj.name == "change_focus" ) {callerForm.max_thr.focus()}
  }
}


