function headerPhone(newList) {
    var screen = document.getElementById('result').innerHTML = "";

    for (let i = 0; i < newList.length; i += 92) {
        var newdiv = document.createElement("div");
        let firstName = newList[i][0].A;
        let firstName2 = cutName(firstName);
        let lastName = newList[i + 92][0].A;
        let lastName2 = cutName(lastName);

        let line = document.createTextNode(firstName2 + " - " + lastName2);
        console.log(line);

        newdiv.appendChild(line);
        $('#result').append(newdiv);

    }
}

function cutName(words) {
    var n = words.split(" ");
    return n[0];

}


var newtable2 = headerPhone(newList);