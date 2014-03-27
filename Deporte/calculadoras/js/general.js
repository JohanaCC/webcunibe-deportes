//////////////////////////////////////////////////////////
////                                                  ////  
////      @ 1 9 9 9 * l a t i n s a l u d . c o m     ////  
////                                                  ////  
//////////////////////////////////////////////////////////


var strCaller="";
function gRegister(strFunctionCall){
  strCaller=strFunctionCall;
  return true;
}
function gUnregister(){
  strCaller="";
  return true;
}

function gIsNumber(strNumber,strMin,strMax){
/**
 *gIsNumber(strNumber,strMin,strMax)
 *strMin and strMax may be null.
 *if strMin and/or strMax are not null, all are verified as numbers,
 *and strMin<=strNumber and/or strNumber<=strMax
 */
  gRegister("gIsNumber");
  var strTempNumber=strNumber;  //make a copy
  strTempNumber=""+strTempNumber; //make sure copy is string
  if(strTempNumber.length==0) return false;
  for(i=0;i<strTempNumber.length;i++){
    if(!((strTempNumber.charAt(i)=="0")||
      (strTempNumber.charAt(i)=="1")||
      (strTempNumber.charAt(i)=="2")||
      (strTempNumber.charAt(i)=="3")||
      (strTempNumber.charAt(i)=="4")||
      (strTempNumber.charAt(i)=="5")||
      (strTempNumber.charAt(i)=="6")||
      (strTempNumber.charAt(i)=="7")||
      (strTempNumber.charAt(i)=="8")||
      (strTempNumber.charAt(i)=="9")||
      (strTempNumber.charAt(i)=="-")||
      (strTempNumber.charAt(i)=="."))){
      return false;
    }
  }
  if(strTempNumber.indexOf(".")!=-1){
    var strDecident=strTempNumber.substr(strTempNumber.indexOf("."));
    var blnBadDecident=false;
    if(strDecident==".") blnBadDecident=true;
    for(i=1;i<strDecident.length;i++){
      if((strDecident.charAt(i)==".")||
        (strDecident.charAt(i)=="-")){
        blnBadDecident=true;
      }
    }
    if(blnBadDecident){
      return false;
    }
  }

  if(strMin){
    var strTempMin=strMin;
    strTempMin=""+strTempMin;
    if(strTempMin.length==0) return false;
    for(i=0;i<strTempMin.length;i++){
      if(!((strTempMin.charAt(i)=="0")||
        (strTempMin.charAt(i)=="1")||
        (strTempMin.charAt(i)=="2")||
        (strTempMin.charAt(i)=="3")||
        (strTempMin.charAt(i)=="4")||
        (strTempMin.charAt(i)=="5")||
        (strTempMin.charAt(i)=="6")||
        (strTempMin.charAt(i)=="7")||
        (strTempMin.charAt(i)=="8")||
        (strTempMin.charAt(i)=="9")||
        (strTempMin.charAt(i)=="-")||
        (strTempMin.charAt(i)=="."))){
        return false;
      }
    }
    if(strNumber<parseFloat(strMin)) return false;
  }
  if(strMax){
    var strTempMax=strMax;
    strTempMax=""+strTempMax;
    if(strTempMax.length==0) return false;
    for(i=0;i<strTempMax.length;i++){
      if(!((strTempMax.charAt(i)=="0")||
        (strTempMax.charAt(i)=="1")||
        (strTempMax.charAt(i)=="2")||
        (strTempMax.charAt(i)=="3")||
        (strTempMax.charAt(i)=="4")||
        (strTempMax.charAt(i)=="5")||
        (strTempMax.charAt(i)=="6")||
        (strTempMax.charAt(i)=="7")||
        (strTempMax.charAt(i)=="8")||
        (strTempMax.charAt(i)=="9")||
        (strTempMin.charAt(i)=="-")||
        (strTempMax.charAt(i)=="."))){
        return false;
      }
    }
    if(strNumber>parseFloat(strMax)) return false;
  }
  gUnregister();
  return true;
}

function gMakeNumber(strNumber,strAltValue){
/**
 *gMakeNumber(strNumber,strAltValue)
 *If strNumber is a number, returns strNumber
 *else returns strAltValue
 */
  if(gIsNumber(strNumber)) return parseInt(strNumber)
  else return strAltValue;
}

function gIsDate(strDate,strMin,strMax){
/**
 *gIsDate(strDate,strMin,strMax)
 *strMin and strMax may be null.
 *if strMin and/or strMax are not null, all are converted to milliseconds since 1/1/1970,
 *and strMin<=strDate and/or strDate<=strMax
 */
  gRegister("gIsDate");
  if(!Date.parse(strDate)) return false;
  if(strMin){
    if(!Date.parse(strMin)) return false;
    if(Date.parse(strDate)<Date.parse(strMin)) return false;
  }
  if(strMax){
    if(!Date.parse(strMax)) return false;
    if(Date.parse(strDate)>Date.parse(strMax)) return false;
  }
  gUnregister();
  return true;
}

function gIsValidDate(strIncomingDateString){
/**
 *gIsValidDate(strIncomingDateString)
 *strIncomingDateString is a string literal to validate
 *
 *VALID FORMATS:
 *MM dd, yyyy** February 29, 2000
 *mm/dd/yyyy** 2/29/2000
 *dd MM yyyy** 29 February 2000
 *yyyy MM dd** 2000 February 29
 *yyyy/mm/dd** 2000/2/29
 *yyyy dd MM** 2000 29 February
 *MM yyyy dd** February 2000 29
 *dd yyyy MM** 29 2000 February
 *
 *dd/mm/yyyy NOT VALID**
 *yyyy/dd/mm NOT VALID**
 */
 
    //if JavaScript cannot convert it, toss it out
    if(gIsDate(strIncomingDateString)){
        var datConvertedDate=new Date(strIncomingDateString);    
    }else{
        return false;
    }

    //common strings to search for
    var strMonthAbbrevs=new Array('Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Set','Oct','Nov','Dic');
    var blnContainsMonthAbbrev=false;
    for(x=0;x<strMonthAbbrevs.length;x++){
        if(strIncomingDateString.indexOf(strMonthAbbrevs[x])!=-1){
        //if string is found
            blnContainsMonthAbbrev=true;
            if(datConvertedDate.getMonth()!=x){
            //if converted month is not same as string month
                return false;
            }else{
                return true;
            }
        }
    }

    //this is not robust, but tries to grab numerical dates
    if(!blnContainsMonthAbbrev){
        var intMonthPos=strIncomingDateString.length;
        //where to start searching from in the loop
        var intCurrentPointerPos=strIncomingDateString.length;
        //the current pointer in the string
        var intLastMonthFoundPos=strIncomingDateString.length;
        //where the last month was found
        var intLastMonthFound=0;
        //what the last month was found was
        var blnBreakBefore=false;
        //is there a break point before
        var blnBreakAfter=false;
        //is there a break point after
        for(x=1;x<13;){
            blnBreakBefore=false;
            blnBreakAfter=false;
            if(strIncomingDateString.lastIndexOf(x,intMonthPos)!=-1){
            //if a number between 1 and 12 exists before intMonthPos
                intCurrentPointerPos=strIncomingDateString.lastIndexOf(x,intMonthPos);
                //set intCurrentPointerPos = loc of number
                if(intCurrentPointerPos<intLastMonthFoundPos){
                //if closer to front than last month
                    if(intCurrentPointerPos-1>=0){
                    //if there's something before it
                        //if the character before the pointer is not a digit
                        if(!((strIncomingDateString.charAt(intCurrentPointerPos-1)=='1')||
                            (strIncomingDateString.charAt(intCurrentPointerPos-1)=='2')||
                            (strIncomingDateString.charAt(intCurrentPointerPos-1)=='3')||
                            (strIncomingDateString.charAt(intCurrentPointerPos-1)=='4')||
                            (strIncomingDateString.charAt(intCurrentPointerPos-1)=='5')||
                            (strIncomingDateString.charAt(intCurrentPointerPos-1)=='6')||
                            (strIncomingDateString.charAt(intCurrentPointerPos-1)=='7')||
                            (strIncomingDateString.charAt(intCurrentPointerPos-1)=='8')||
                            (strIncomingDateString.charAt(intCurrentPointerPos-1)=='9'))){
                            blnBreakBefore=true;
                        }else{
                            blnBreakBefore=false;
                        }
                    }else{
                    //if there's nothing before it
                        blnBreakBefore=true;
                    }
                    if(intCurrentPointerPos+(x.toString().length)<strIncomingDateString.length){
                    //if there's something after it
                        if(!((strIncomingDateString.charAt(intCurrentPointerPos+(x.toString().length))=='1')||
                            (strIncomingDateString.charAt(intCurrentPointerPos+(x.toString().length))=='2')||
                            (strIncomingDateString.charAt(intCurrentPointerPos+(x.toString().length))=='3')||
                            (strIncomingDateString.charAt(intCurrentPointerPos+(x.toString().length))=='4')||
                            (strIncomingDateString.charAt(intCurrentPointerPos+(x.toString().length))=='5')||
                            (strIncomingDateString.charAt(intCurrentPointerPos+(x.toString().length))=='6')||
                            (strIncomingDateString.charAt(intCurrentPointerPos+(x.toString().length))=='7')||
                            (strIncomingDateString.charAt(intCurrentPointerPos+(x.toString().length))=='8')||
                            (strIncomingDateString.charAt(intCurrentPointerPos+(x.toString().length))=='9')||
                            (strIncomingDateString.charAt(intCurrentPointerPos+(x.toString().length))=='0'))){
                            blnBreakAfter=true;
                        }else{
                            blnBreakAfter=false;
                        }
                    }else{
                    //if there's nothing after it
                        blnBreakAfter=true;
                    }
                    if((blnBreakBefore)&&(blnBreakAfter)){
                    //if there's breakpoints before and after
                        intLastMonthFound=x;
                        //set x as new best month
                        intLastMonthFoundPos=intCurrentPointerPos;
                        //set pointer as new best month pointer
                    }
                }
                if(intCurrentPointerPos-1>=0){
                //if there could be more
                    intMonthPos=intCurrentPointerPos-1;
                    //set new starting point
                }else{
                //advance to next number
                    intMonthPos=strIncomingDateString.length;
                    intCurrentPointerPos=strIncomingDateString.length;
                    x++;
                }
            }else{
            //advance to next number
                intMonthPos=strIncomingDateString.length;
                intCurrentPointerPos=strIncomingDateString.length;
                x++;
            }
        }
        if(datConvertedDate.getMonth()!=intLastMonthFound-1){
        //if converted month is not same as string month
            return false;
        }else{
            return true;
        }
    }
}

function gReturnY2KDate(Y2KDateObject){
/**
 *gReturnY2KDate(Y2KDateObject)
 *Y2KDateObject is a Date object.
 *Returns a four-digit integer for year.
 *EXAMPLE:
 * var someDate=new Date();
 * alert((someDate.getMonth()+1)+'/'+someDate.getDate()+'/'+gReturnY2KDate(someDate));
 * RETURNS "mm/dd/yyyy" in all browsers 3.0+
 */
  gRegister("gReturnY2KDate");
  currYearIndex=Y2KDateObject.getYear();
  var yearln=(currYearIndex+"").length;
  if(yearln<4)currYearIndex+=1900; //Fix Y2K
  gUnregister();
  return currYearIndex;
}

function gIsTime(strTime,strMin,strMax){
/**
 *gIsTime(strTime,strMin,strMax)
 *strMin and strMax may be null.
 *if strMin and/or strMax are not null, all are converted to dates by appending to 1/1/1970,
 *and strMin<=strDate and/or strDate<=strMax
 */
  gRegister("gIsTime");
  strTime="1/1/1970 "+strTime;
  if(!Date.parse(strTime)) return false;
  if(strMin){
    strMin="1/1/1970 "+strMin;
    if(!Date.parse(strMin)) return false;
    if(Date.parse(strTime)<Date.parse(strMin)) return false;
  }
  if(strMax){
    strMax="1/1/1970 "+strMax;
    if(!Date.parse(strMax)) return false;
    if(Date.parse(strTime)>Date.parse(strMax)) return false;
  }
  gUnregister();
  return true;
}

function gConvertNumberToPercent(strToConvert){
/**
 *gConvertNumberToPercent(strToConvert)
 *converts numbers and numeric strings to percent strings.
 *A value not either returns false.
 */
  gRegister("gConvertNumberToPercent");
  if(gIsNumber(strToConvert,null,null)){
    strToConvert=strToConvert*100;
    strToConvert=strToConvert+"%";
  }else{
    gUnregister();
    return false;
  }
  gUnregister();
  return strToConvert;
}

function gConvertPercentToNumber(strToConvert){
/**
 *gConvertPercentToNumber(strToConvert)
 *converts percent strings to numbers and numeric strings.
 *A value not either returns false.
 */
  gRegister("gConvertPercentToNumber");
  if(strToConvert.indexOf("%")==strToConvert.length-1){
  var strNewValue=strToConvert.substring(0,strToConvert.indexOf("%"));
  if(gIsNumber(strNewValue,null,null)){
      strToConvert=strNewValue/100;
  }
  }else{
  gUnregister();
  return false;
  }
  gUnregister();
  return strToConvert;
}

function gCurrency(strToConvert){
/**
 *gCurrency(strToConvert)
 *converts numbers and numeric strings to currency.
 *A value not either returns false.
 */
  gRegister("gCurrency");
  if(gIsNumber(strToConvert,null,null)){
      strToConvert=strToConvert*100;
  strToConvert=Math.round(strToConvert);
  strToConvert=strToConvert/100;
  if(gCommify(strToConvert)) strToConvert=gCommify(strToConvert);
      strToConvert="$"+strToConvert;
  if(strToConvert.indexOf(".")==-1) strToConvert+=".";
  var intDecidentLength=strToConvert.length-(strToConvert.lastIndexOf(".")+1);
  for(i=0;i<2-intDecidentLength;i++){
      strToConvert=strToConvert+"0";
  }
  }else{
  gUnregister();
  return false;
  }
  gUnregister();
  return strToConvert;
}

function gDeCurrency(strToConvert){
/**
 *gDeCurrency(strToConvert)
 *convert currency strings to numbers.
 *A value not either returns false.
 */
  gRegister("gDeCurrency");
  if(strToConvert.indexOf("$")!=-1){
      strToConvert=strToConvert.substring(strToConvert.indexOf("$")+1);
  if(gDeCommify(strToConvert)) strToConvert=gDeCommify(strToConvert);
  }else{
  gUnregister();
  return false;
  }
  gUnregister();
  return strToConvert;
}

function gCommify(strToConvert){
/**
 *gCommify(strToConvert)
 *commifies numbers and numeric strings.
 *A non-numeric string without commas returns false.
 */
  gRegister("gCommify");
  var strNewValue=strToConvert;
  if(gIsNumber(strNewValue,null,null)){
      strNewValue=strNewValue.toString();
  if(strNewValue.indexOf(".")!=-1){
      var strDecident=strNewValue.substring(strNewValue.indexOf("."));
      strNewValue=strNewValue.substring(0,strNewValue.indexOf("."));
  }
  var intLength=strNewValue.length;
//        var intComma=((strNewValue.length-1)-((strNewValue.length-1) % 3))/3;  //finds number of commas.
      for(i=3;i<intLength;i=i+3){
  strNewValue=strNewValue.substring(0,intLength-i)+","+strNewValue.substring(intLength-i);
      }
  if(strDecident) strNewValue=strNewValue+strDecident;
  strToConvert=strNewValue;
  }else{
  gUnregister();
      return false;
  }
  gUnregister();
  return strToConvert;
}

function gDeCommify(strToConvert){
/**
 *gDeCommify(strToConvert)
 *decommifies strings.
 *A number or string without commas returns false.
 */
  gRegister("gDeCommify");
  var strNewValue=strToConvert;
  strNewValue=strNewValue.toString();
  if(strNewValue.indexOf(",")!=-1){
  while(strNewValue.indexOf(",")!=-1){
      strNewValue=strNewValue.substring(0,strNewValue.indexOf(","))+strNewValue.substring(strNewValue.indexOf(",")+1);
  }
      strToConvert=strNewValue;
  }else{
  gUnregister();
  return false;
  }
  gUnregister();
  return strToConvert;
}

function gToInches(strMt,strCm){   

  gRegister("gToInches");
  if(!gIsNumber(strMt)) return false;
  if(!gIsNumber(strCm)) return false;
  strCm+=(strMt*100);
  var strInches=strCm*0.3937;   //Converts it to inches
  gUnregister();
  return strInches;
}

function gToFeetAndInches(strInches,strMin,strMax){
/**
 *gToFeetAndInches(strInches,strMin,strMax)
 *strMin and strMax may be null.
 *if strMin and/or strMax are not null, return a string of x'y",
 *where x=feet and y=inches,
 *and strMin<=strDate and/or strDate<=strMax
 */
  gRegister("gToFeetAndInches");
  if(!gIsNumber(strInches)) return false;
  if(strMin){
  if(!gIsNumber(strMin)) return false;
      if(strInches<strMin) return false;
  }
  if(strMax){
  if(!gIsNumber(strMax)) return false;
  if(strInches>strMax) return false;
  }
  var strReturnValue='';
  var strCm = Math.ceil(strInches/0.3937);
  strReturnValue=(strCm-(parseInt(strCm)%100))/100+' m '+(parseInt(strCm)%100)+' cm';
  gUnregister();
  return strReturnValue;
}
