function createtemps(table) {
    var screen = document.getElementById('result').innerHTML = "";

    for (let i = 0; i < table.length; i++) {
        var para = document.createElement("div");
        var tableC = table[i].C;
        var tableD = table[i].D;

        if (tableC == "") {
            var node = document.createTextNode(table[i].A + "tab" + table[i].D);
            para.appendChild(node);
            $('#result').append(para);
            var b = document.createElement("p");
            var bode = document.createTextNode(table[i].B);
            b.style.fontSize = "12px";
            b.appendChild(bode);

        } else if (tableD == "") {
            var node = document.createTextNode(table[i].A + "tab" + table[i].C);
            para.appendChild(node);
            $('#result').append(para);
            var b = document.createElement("p");
            var bode = document.createTextNode(table[i].B);
            b.style.fontSize = "12px";
            b.appendChild(bode);

        } else {
            var node = document.createTextNode(table[i].A + "tab" + table[i].C + " | " + table[i].D);
            para.appendChild(node);
            $('#result').append(para);
            var b = document.createElement("p");
            var bode = document.createTextNode(table[i].B);
            b.style.fontSize = "12px";
            b.appendChild(bode);
        }


        $('#result').append(b);

    }
    console.log(table);
}



var newtable = createtemps(table);
//  creaTable(newtable);