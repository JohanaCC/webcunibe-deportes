// DECTECION DE BROWSER PARA CSS
function detectionBrowserCSS (flag1)
{
 if (flag1 =="0")
  directorio = ""
 if (flag1 =="1")
  directorio = "../"  
 if (navigator.appName == "Netscape")
 {
  document.write("<link rel='stylesheet' type='text/css' href='"+String(directorio)+"style/styleNS.css'>");
 }
 else
 {
  document.write("<link rel='stylesheet' type='text/css' href='"+String(directorio)+"style/style2.css'>");     
 }
}

// IMAGEN DE BANNER ARRIBA
function imgBanner (flag1)
{
 if (flag1=="0")
  directorio = "imagenes/deportes.gif";
 if (flag1=="1")
  directorio = "../imagenes/deportes.gif";
 document.write("<table width='684' border='0' cellspacing='2' cellpadding='0' align='center'>");
 document.write("<tr><td colspan='3'><div align='center'>");
 document.write("<img src='"+String(directorio)+"' alt='Coordinaci&oacute;n de Deportes' height='80' width='682' border='0'>");
 document.write("</div></td></tr></table>");
}

// LOGO EN MENU LATERAL
function logoMenuLateral (flag1)
{
 porDefecto ="CUNIBE - Coordinación de Deportes";
 if (flag1=="0")
  logo = "imagenes/logodeportes1.jpg";
 if (flag1=="1")
  logo = "../imagenes/logodeportes1.jpg";  
  document.write("<br><img src='"+String(logo)+"' alt='"+String(porDefecto)+"' height='128' width='122' border='0'><br><br>");
}

// MENU LATERAL 
function menuLateral (flag1)
{
 porDefecto ="CUNIBE - Coordinación de Deportes";
 Eventos1 ="EXPOECOLOGÍA";
 Eventos2 ="GRUPEXCU";
 Eventos3 ="Murales Ecológicos";
 Servicios1 ="Calculadoras";
 Servicios2 ="Enlaces";
 if (flag1=="0")
  Directorio=""
 if (flag1=="1")
  Directorio="../"  
 document.write("<div align='center'>");
 document.write("<div id='menuLateralTitulo'>ART&Iacute;CULOS DE INTER&Eacute;S</div>");
// document.write("<font size='-2' color='#000000' face='Verdana,Arial,sans-serif'><b>ART&Iacute;CULOS DE INTER&Eacute;S</b></font>"); 
 document.write("<hr noshade size='1'>");
 document.write("<table border='0' cellpadding='0' cellspacing='0' width='159'>");
 document.write("<tr><td height='52' width='90%'><div align='left'>");
 document.write("<div id='menuLateralItem'>Eventos</div>");
 document.write("<img src='"+String(Directorio)+"imagenes/derecha.gif' alt='' height='7' width='7' border='0'>&nbsp;<a id='menuLateralVinculo' title='"+String(Eventos1)+"' href='"+String(Directorio)+"expoecologia.html' target='_self' onmouseover='window.status=String(Eventos1); return true;' onmouseout='window.status=String(porDefecto); return true;'>"+String(Eventos1)+"</a><br>");
 document.write("<img src='"+String(Directorio)+"imagenes/derecha.gif' alt='' height='7' width='7' border='0'>&nbsp;<a id='menuLateralVinculo' title='"+String(Eventos2)+"' href='"+String(Directorio)+"grupexcu.html' target='_self' onmouseover='window.status=String(Eventos2); return true;' onmouseout='window.status=String(porDefecto); return true;'>"+String(Eventos2)+"</a><br>");
 document.write("<img src='"+String(Directorio)+"imagenes/derecha.gif' alt='' height='7' width='7' border='0'>&nbsp;<a id='menuLateralVinculo' title='"+String(Eventos3)+"' href='"+String(Directorio)+"murales.html' target='_self' onmouseover='window.status=String(Eventos3); return true;' onmouseout='window.status=String(porDefecto); return true;'>"+String(Eventos3)+"</a><br>");
 document.write("</div></td></tr>");
 document.write("</table>");
 document.write("<hr noshade size='1'>");
 document.write("<table border='0' cellpadding='0' cellspacing='0' width='159'>");
 document.write("<tr><td height='52' width='90%'><div align='left'>");
 document.write("<div id='menuLateralItem'>Servicios</div>");
 document.write("<img src='"+String(Directorio)+"imagenes/derecha.gif' alt='' height='7' width='7' border='0'>&nbsp;<a id='menuLateralVinculo' title='"+String(Servicios1)+"' href='"+String(Directorio)+"calculadora.html' target='_self' onmouseover='window.status=String(Servicios1); return true;' onmouseout='window.status=String(porDefecto); return true;'>"+String(Servicios1)+"</a><br>");
 document.write("<img src='"+String(Directorio)+"imagenes/derecha.gif' alt='' height='7' width='7' border='0'>&nbsp;<a id='menuLateralVinculo' title='"+String(Servicios2)+"' href='"+String(Directorio)+"enlaces.html' target='_self' onmouseover='window.status=String(Servicios2); return true;' onmouseout='window.status=String(porDefecto); return true;'>"+String(Servicios2)+"</a><br>");
 document.write("</div></td></tr>");
 document.write("</table>");
 document.write("<hr noshade size='1'><p></p>");
 document.write("</div>");
}

// TABLA DE CONTACTOS 
function tablaDeContactos ()
{
 web = "¡Contacta al Webmaster de CUNIBE!"
 deporte ="¡Contacta a la Coordinación de Deportes de CUNIBE!"
 porDefecto ="CUNIBE - Coordinación de Deportes" 
 document.write("<table border='0' cellpadding='0' cellspacing='0' width='100%'><tbody>");
 document.write("<tr><td height='9' width='90%'>");
 document.write("<div id='menuLateralItem'>Contactanos</div>");
 document.write("</td></tr>");
 document.write("<tr><td height='9' width='90%'><div align='left'>");
 document.write("<font color='#000000' face='tahoma,arial' size='1'><a id='menuLateralVinculo' href='mailto:webmaster@cunibe.org?subject=Inquietud sobre la P&aacute;gina del Colegio Univesitario Dr. Rafael Belloso Chacín' target='_self' onmouseover='window.status=String(web); return true;' onmouseout='window.status=String(porDefecto); return true;' title='Webmaster'>Webmaster</a></font>");
 document.write("</div></td></tr>");
 document.write("<tr height='52'><td height='52' width='90%'><div align='left'>");
 document.write("<div id='tablaContactosData'>TELFS.: (Central)<br></div><div id='tablaContactosInfo'>58-261-7911252<br>58-261-7911352<br>58-261-7915567<br></div>");
// document.write("<font face='Tahoma' size='1'><b>TELFS.: (Central)<br></b>58-261-7911252<br>58-261-7911352<br>58-261-7915567<br></font>"); 
 document.write("</div></td>	</tr>");
 document.write("<tr height='13'><td height='13' width='90%'><div align='left'>");
 document.write("<div id='tablaContactosData'>Extensiones:</div><div id='tablaContactosInfo'>140</div>");
// document.write("<font face='Tahoma' size='1'><b>Extensiones:</b>140</font>"); 
 document.write("</div></td>	</tr>");
 document.write("<tr height='13'><td height='13' width='90%'><div align='left'>");
 document.write("<div id='tablaContactosData'>FAX: </div><div id='tablaContactosInfo'>(0261) 7939749 </div>");
 //document.write("<font face='Tahoma' size='1'><b>FAX: </b>(0261) 7939749 </font>"); 
 document.write("</div></td>	</tr>");
 document.write("<tr><td height='2' width='90%'><div align='left'>");
// document.write("<font face='Tahoma' size='1'><b>Correo Electr&oacute;nico:</b><br><a id='menuLateralVinculo' href='mailto:deporte@cunibe.org?subject=Cometarios sobre la P&aacute;gina Web de la Coordinaci&oacute;n de Deportes' target='_self'  onmouseover='window.status=String(deporte); return true;' onmouseout='window.status=String(porDefecto); return true;' title='Coordinaci&oacute;n de Deportes'>deporte@cunibe.org</a></font><br>"); 
 document.write("<div id='tablaContactosData'>Correo Electr&oacute;nico:</div><div id='tablaContactosInfo'><a id='menuLateralVinculo' href='mailto:deporte@cunibe.org?subject=Cometarios sobre la P&aacute;gina Web de la Coordinaci&oacute;n de Deportes' target='_self'  onmouseover='window.status=String(deporte); return true;' onmouseout='window.status=String(porDefecto); return true;' title='Coordinaci&oacute;n de Deportes'>deporte@cunibe.org</a></div>");
 document.write("</div></td></tr>");
 document.write("<tr height='52'><td height='52' width='90%'><div align='left'>");
 document.write("<div id='tablaContactosData'>Direcci&oacute;n F&iacute;sica:<br></div><div id='tablaContactosInfo'>(Sede CUNIBE II)<br>Calle 75 Esq. Ave. 3 H,<br>Edificio # 76 -74.<br></div>");
// document.write("<font face='Tahoma' size='1'><b>Direcci&oacute;n F&iacute;sica:<br>(Sede CUNIBE II)<br></b>Calle 75 Esq. Ave. 3 H,<br>Edificio # 76 -74.<br></font>"); 
 document.write("</div></td></tr>");
 document.write("</tbody></table>");
}

// PIE DE PAGINA
function pieDePagina ()
{
 document.write("<table width='679' border='0' cellPadding='2' cellSpacing='3' align='center'>");
 document.write("<tr><td bgcolor='#3184bd'><div align='center'>");
 document.write("<table border='0' cellpadding='4' bgcolor='#3184bd' height='24' width='679'>");
 document.write("<tr><td bgcolor='#FFFFFF'><div align='center'>");
// document.write("<b><font color='#000000' face='tahoma,arial' size='2'>Colegio Universitario Dr. Rafael Belloso Chac&iacute;n - Coordinaci&oacute;n de Deportes<br>Todos los Derechos Reservados &copy; Estado Zulia, Maracaibo, Venezuela - 1998, 2004</font></b><br>"); 
 document.write("<div id='pieDePagina'>Colegio Universitario Dr. Rafael Belloso Chac&iacute;n - Coordinaci&oacute;n de Deportes<br>Todos los Derechos Reservados &copy; Estado Zulia, Maracaibo, Venezuela - 1998, 2004</div>");
 document.write("</div></td></tr>");
 document.write("</table>");
 document.write("</div></td>	</tr>");
 document.write("</table>");
}