        /*
        function makePhrases() {
            let words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
            let words2 = ["empowered", "value added", "oriented", "focused", "aligned"];
            let words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

            let rand1 = Math.floor(Math.random() * words1.length);
            let rand2 = Math.floor(Math.random() * words2.length);
            let rand3 = Math.floor(Math.random() * words3.length);

            let phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
            alert(phrase);
        }
        makePhrases();


        var scores = [60, 50, 60, 58, 54, 54,
58, 50, 52, 54, 48, 69,
34, 55, 51, 52, 44, 51,
69, 64, 66, 55, 52, 61,
46, 31, 57, 52, 44, 18,
41, 53, 55, 61, 51, 44];

var output;
var i = 0;

for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + "score: " + scores[i];
    console.log(output)
}


var scores = [60, 50, 60, 58, 54, 54,
58, 50, 52, 54, 48, 69,
34, 55, 51, 52, 44, 51,
69, 64, 66, 55, 52, 61,
46, 31, 57, 52, 44, 18,
41, 53, 55, 61, 51, 44];

var output;
var highscore = 0;

for (var i = 0; i < scores.length; i++)
    output = "Bubble solution #" + i + "score: " + scores;
    console.log(output)
    if (scores[i] > highscore) {
        highscore = score[i];
    }

    console.log("Bubble tests: " + scores[i]);
    console.log("Highest bubble score: " + highscore);
    console.log(output);
*/
var scores = [
    60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44
];

var highScore = 0;
var output;
for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
    highScore = scores[i];
    }
}
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = [];

for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}
console.log("Solutions with the highest score: " + bestSolutions);
    /*
    var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
    
    var highscore = 0;
    
    for (var i=0; i <scores.length; i++) { 
        scores[i];
        if (scores[i] > highscore)
        highscore = scores[i];
    }
    
    console.log(highscore)
    /*
    while (i < scores.length) {
        output = "Bubble Solution #" + i + " score: " + scores[i];
        console.log(output);
        i = i + 1;
    }
    
    
        var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
        var hasBubbleGum = [false, false, false, true];
    
        for (var i = 0; i < hasBubbleGum.length; i++) {
            if (hasBubbleGum[i]){
                console.log(products[i] + " contains bubble gum");
        }
    }
        /*
        while (i < hasBubbleGum.length) {
            if (hasBubbleGum[i]){
                console.log(products[i] + " contains bubble gum");
            }
            i = i + 1;
        }
        */