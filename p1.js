function ValidarEmail(entrada) {
    if (document.getElementById("email1").value == "") {
        oError("emailFormato", "email1");
        return true;
    }
    else {
        var formato = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (document.getElementById("email1").value.match(formato)) {
            document.getElementById("email1").focus();
            oError("emailFormato", "email1");
            return true;
        }
        else {
            mError("emailFormato", "email1");
            document.getElementById("email1").focus();
            return false;
        }
    }
}

function CoincideEmail(entrada) {
    if (document.getElementById("email2").value == document.getElementById("email1").value) {
        document.getElementById("email2").focus();
        oError("emailCoincide", "email2");
        return true;
    }
    else {
        mError("emailCoincide", "email2");
        document.getElementById("email2").focus();
        return false;
    }
}

function LongContra(entrada) {
    if (document.getElementById("contraseña").value == "") {
        oError("lContra", "contraseña");
        return true;
    }
    else {
        var elem = document.getElementById("contraseña");
        var elemTam = elem.value.length;
        if (elemTam >= 6) {
            oError("lContra", "contraseña");
            document.getElementById("contraseña").focus();
            return true;
        }
        else {
            mError("lContra", "contraseña");
            document.getElementById("contraseña").focus();
            return false;
        }
    }
}

function CoincideContra(entrada) {
    if (document.getElementById("contraseña").value == document.getElementById("confcontraseña").value) {
        oError("cContra", "confcontraseña");
        document.getElementById("confcontraseña").focus();
        return true;
    }
    else {
        mError("cContra", "confcontraseña");
        document.getElementById("confcontraseña").focus();
        return false;
    }
}

function RangoAño(entrada) {
    if (document.getElementById("año").value == "") {
        oError("rAño", "año");
        return true;
    }
    else {
        if (document.getElementById("año").value > 1900 && document.getElementById("año").value < 2016) {
            oError("rAño", "año");
            document.getElementById("año").focus();
            return true;
        }
        else {
            mError("rAño", "año");
            document.getElementById("año").focus();
            return false;
        }
    }
}

function EsNumero(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    else {
        return true;
    }
}

function LongTel(entrada) {
    if (document.getElementById("telefono").value == "") {
        oError("lTel", "telefono");
        return true;
    }
    else {
        if (document.getElementById("telefono").value.length == 9) {
            oError("lTel", "telefono");
            document.getElementById("telefono").focus();
            return true;
        }
        else {
            mError("lTel", "telefono");
            document.getElementById("telefono").focus();
            return false;
        }
    }
}

function mError(idError, idCampo) {
    document.getElementById(idError).style.display = "block";
    document.getElementById(idCampo).style.border = "1px solid red";
}

function oError(idError, idCampo) {
    document.getElementById(idError).style.display = "none";
    document.getElementById(idCampo).style.border = "2px inset #BDBDBD";
}

function confirmaEnvio() {
    if ((document.getElementById("php").checked != '1' && document.getElementById("url").checked != '1') || (document.getElementById("post").checked != '1' && document.getElementById("get").checked != '1') || (document.getElementById("app").checked != '1' && document.getElementById("multi").checked != '1')) {
        alert("Debe seleccionar método de envío, tipo de codificación y URL a la que se enviará.");
        return false;
    }
    else {
        if (ValidarEmail() && CoincideEmail() && LongContra() && CoincideContra() && RangoAño() && LongTel()) {
            if (document.getElementById("php").checked == '1') {
                document.formulario.action = "p1.php";
            }
            else {
                document.formulario.action = "/~sintprof/p1.php";
            }
            if (document.getElementById("post").checked == '1') {
                document.formulario.method = "POST";
            }
            else {
                document.formulario.method = "GET";
            }

            if (document.getElementById("app").checked == '1') {
                document.formulario.enctype = "application/x-www-form-urlencoded";
            }
            else {
                document.formulario.enctype = "multipart/form-data";
            }
            return true;
        }
        else {
            alert("Ha habido un error, compruebe que no existen fallos de introducción de datos y vuelva a intentarlo.");
            return false;
        }
    }
}