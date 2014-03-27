//////////////////////////////////////////////////////////
////                                                  ////  
////      @ 1 9 9 9 * l a t i n s a l u d . c o m     ////  
////                                                  ////  
//////////////////////////////////////////////////////////

var notZeen = 1;

function Food(nombre, cal_por_gr, porcion, amtXSM, amtSM, amtMED, amtLG, amtXLG){
  this.nombre = nombre;
  this.cal_por_gr = cal_por_gr;
  this.porcion = porcion;
  this.grDim = amtXSM;
  this.grPeq = amtSM;
  this.grMed = amtMED;
  this.grGde = amtLG;
  this.grGig = amtXLG;
  this.getFoodArray = BuildFoodArray;
}

function BuildFoodArray () {
    var FoodInfo = new Array(
    "('Diminuta ("+this.grDim+" g.)','"+Math.round(this.grDim * this.cal_por_gr)+"')",
    "('Chica ("+this.grPeq+" g.)','"+Math.round(this.grPeq * this.cal_por_gr)+"')",
    "('Media ("+this.grMed+" g.)','"+Math.round(this.grMed * this.cal_por_gr)+"')",
    "('Grande ("+this.grGde+" g.)','"+Math.round(this.grGde * this.cal_por_gr)+"')",
    "('Gigante ("+this.grGig+" g.)','"+Math.round(this.grGig * this.cal_por_gr)+"')"
    );
    return FoodInfo;
}

//  NombreInt                     nombre                cal/g   servicio   GrDim GrPeq  GrMed  GrGde  GrGig
var Hamburguer          = new Food("Hamburguesas",         2.73,   "",  "50", "80", "150",  "250", "450");
var Emp_Carne           = new Food("Empanadas de carne",   5.02,   "",  "50", "90", "150", "250", "450");
var Chorizos            = new Food("Chorizos",             2.40,   "",   "50", "100", "200", "300", "450");
var Milanesas           = new Food("Milanesas",            3.36,   "",   "50", "100", "200", "300", "450");
var Pascualina          = new Food("Pascualina",           1.25,   "",   "100", "150", "200", "300", "450");
var Pizz_Muzz           = new Food("Pizza de muzzarella",  1.95,   "",    "50", "100", "200", "300", "450");
var Guiso               = new Food("Guiso de carne",       2.25,   "",   "50", "100", "250", "400", "600");
var Chocolate_Cake      = new Food("Torta de chocolate",    3.67,   "",  "60", "170", "250", "340", "680");
var Chocolate_Mousse    = new Food("Mousse de chocolate",  2.21,   "",   "60", "170", "250", "340", "680");
var Flan                = new Food("Flan",                 1.44,   "",   "60", "170", "250", "340", "680");
var Lemon_Pie           = new Food("Lemon pie",            2.68,   "",  "60", "170", "250", "340", "680");
var Fruit_Salad         = new Food("Ensalada de frutas",    0.3,   "",   "60", "170", "250", "340", "680");
var Ice_Cream           = new Food("Helado de crema",      5.94,   "",   "60", "170", "250", "340", "680");
var Jello               = new Food("Gelatina",              .97,   "",   "85", "170", "225", "340", "910");


function populateAmt(whichFood, obj) {
  if (navigator.appVersion.indexOf('MSIE 3') == -1) {
    if (!whichFood) {return;} 

    var callerForm = obj.form;
    var whichItemSelected = callerForm.Lvl2.selectedIndex;

    var TheArray = eval(whichFood+".getFoodArray();");


    while (TheArray.length < callerForm.Lvl2.options.length) {
  	obj.form.Lvl2.options[(callerForm.Lvl2.options.length - 1)] = null;
    }

    for (var i=0; i < TheArray.length; i++) {
  	eval("callerForm.Lvl2.options[i]=new Option" + TheArray[i]);
    }


    callerForm.Lvl2.options[whichItemSelected].selected = true;

    notZeen = 0;
  } else { 
    if (!whichFood) {return;} 

    var callerForm = obj.form;
    var whichItemSelected = callerForm.Lvl2.selectedIndex;

    var TheArray = eval(whichFood+".getFoodArray();");

    notZeen = 0;
  }
}

function calculateIt(obj) {
  var hour = 0;
  var callerForm    = obj.form;
  var amountOfCals  = callerForm.Lvl2.options[callerForm.Lvl2.selectedIndex].value;
  var activityBurn  = callerForm.activity.options[callerForm.activity.selectedIndex].value;

  var timeToBurn = Math.round(amountOfCals / activityBurn);

  while (timeToBurn >= 60) {
      timeToBurn = timeToBurn - 60;
      hour++;
  }

  timeToBurn+='';
  if(timeToBurn.length<2) timeToBurn='0'+timeToBurn;
  callerForm.answertime.value=hour+':'+timeToBurn;
}

