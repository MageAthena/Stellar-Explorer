

function init(){
    initStars()
    startGraphics()
}

function initStars(){
    starList = [];
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", "stellar-data.txt", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            const rawText = rawFile.responseText;
            var lines = rawText.split("\n")
            lines = lines.slice(3)

            for (var line of lines){
                if (line.slice(52,59).trim() !== "") {
                    starList.push(new Star(line))
                }
            }
        }
    };
    rawFile.send();
}