function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    
    }
function upLeft(height, evenColor, oddColor, symbol){
    var line = "";
    for (i = 0; i < height; i++){
        line += "<p>";
        for (spaces = height - 1 - i; spaces > 0; spaces--){
            line += "&nbsp;";
        }
        for (j = 0; j <= i; j++) {
            if (j % 2)
                line +="<span style='color:" + evenColor + ";'>" + symbol +"</span>";
            else
                line +="<span style='color:" + oddColor + ";'>" + symbol +"</span>";
        }
        line += "</p>";
    }
    document.getElementById("upLeft").innerHTML = line;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine ="";
    for (i = 0; i < pHeight; i++){
        rLine +="<p>";
        //Create each line on the Rhombus
        for(j = 0;j <= i; j++){

            //Is the position even or odd so we change the color
            if (j % 2)
            //even
                rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
            else
            //odd
            rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

        }
    rLine +="</p>";
    // console.log(rLine);

    }

    document.getElementById("upRight").innerHTML = rLine;
}

function downLeft(height, evenColor, oddColor, symbol){
    var line ="";
    for (i = height; i > 0; i--){
        line +="<p>";
        for (spaces = height - i; spaces > 0; spaces--){
            line += "&nbsp;";
 
        }
        //Create each line on the Rhombus
        for(j = 0; j < i;j++){

            //Is the position even or odd so we change the color
            if (j % 2)
                //even
                line +="<span style='color:" + evenColor + ";'>" + symbol +"</span>";
            else
            //odd
                line +="<span style='color:" + oddColor + ";'>" + symbol +"</span>";

        }
        line +="</p>";
        // console.log(rLine);

    }

    document.getElementById("downLeft").innerHTML = line;
}
function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine ="";
    for (i = pHeight; i > 0; i--){
        rLine +="<p>";
        //Create each line on the Rhombus
        for(j=0;j<i;j++){

            //Is the position even or odd so we change the color
            if (j%2)
                //even
                rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
            else
            //odd
            rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

        }
rLine +="</p>";
// console.log(rLine);

    }

    document.getElementById("downRight").innerHTML = rLine;
}