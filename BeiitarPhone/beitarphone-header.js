function headerPhone(newList) {
    var screen = document.getElementById('result').innerHTML = "";

    for (let i = 0; i < newList.length; i += 92) {
        var newdiv = document.createElement("div");
        let firstName = newList[i][0].A;
        let firstName2 = cutName(firstName);
        let lastName = newList[i + 90][0].A;
        let lastName2 = cutName(lastName);

        let line = document.createTextNode(firstName2 + " - " + lastName2);
        console.log(line);

        newdiv.appendChild(line);
        $('#result').append(newdiv);

    }
}

function cutName(words) {
    let newWord = words.split(" ");
    let str =  newWord[0];
    if (str.length <=2) {
        return newWord[0] + " " + newWord[1];
    } else if(!newWord){
        return words;
    }
    else{
        return newWord[0];
    }

}


var newtable2 = headerPhone(newList);