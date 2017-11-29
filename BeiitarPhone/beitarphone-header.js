function headerPhone(tableHeader) {
    // var screen = document.getElementById('result').innerHTML = "";

    for (let i = 0; i < tableHeader.length; i+92) {
        // var newdiv = document.createElement("div");
        let firstName = tableHeader[i].A;
        // let firstName2 = firstName.substr(firstName.indexOf(" ")+1);
        let lastName = tableHeader[i+91].A;        
        // let lastName2 = lastName.substr(firstName.indexOf(" ")+1);
        
        // let line = document.createTextNode(firstName + " - " + lastName);
        // newdiv.appendChild(line);
        // $('#result').append(newdiv);
        
    }
}


var newtable = headerPhone(tableHeader);
//  creaTable(newtable);