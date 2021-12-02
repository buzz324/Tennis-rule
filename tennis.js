
let firstPlayerName;
let firstPlayerSetScore=0;
let firstPlayerWins=0;
let firstPlayerScore =0;
let firstPlayerGameScore=0;

let secondPlayerName;
let secondPlayerSetscore=0;
let secondPlayerWins=0;
let secondPlayerScore =0;
let secondPlayerGameScore=0;

let totalPlayed=0;

const lineReader = require('line-reader');

//DO something for each line
lineReader.eachLine('./txt.txt',(line,last)=>{

    //End of file so print out the whole result
    if(last ===true){

    console.log("EOF\n")
    
    console.log(firstPlayerName +" defeated " +secondPlayerName)
    console.log(firstPlayerSetScore+" sets to "+secondPlayerSetscore)
    console.log(firstPlayerWins +" "+(totalPlayed-firstPlayerWins))


    }
    // console.log("last is : " + last)
    var words = line.split(" ");

    //Match game finder
    if (words[0] =="Match:"){
        console.log("Score "+line);
    }

    //Find a players
    else if(words[0] =="Person"){
        firstPlayerName = words[0]+" "+words[1];
        secondPlayerName = words [3]+" "+words[4];
        console.log("Games Player "+words[0]+" "+words [1])
    }

    //Case where first player wins
    else if(line==0){
        totalPlayed ++;
        firstPlayerScore ++;
        firstPlayerWins ++;

        //Case when the first players won the game
        if (firstPlayerScore>=4 &&firstPlayerScore>secondPlayerScore+1){
            firstPlayerGameScore++;

            //Reset for the next game
            firstPlayerScore =0;
            secondPlayerScore=0;
            // console.log(firstPlayerGameScore)
        }

        //Won the set game
        if(firstPlayerGameScore==6){
            firstPlayerSetScore++;
            //Reset the game score
            firstPlayerGameScore=0;
            
        }

        //Game ends
        if(firstPlayerSetScore==2){return}
    }

    //Case where second player wins
    else if (line ==1){

        totalPlayed ++;
        secondPlayerScore ++;
        secondPlayerWins ++;


        //Case when second player won the game
        if (secondPlayerScore>=4 &&secondPlayerScore>firstPlayerScore+1){
            secondPlayerGameScore++;

            //Reset for the next game
            firstPlayerScore =0;
            secondPlayerScore=0;
            // console.log(firstPlayerGameScore)

        }

        //Won the set game
        if(secondPlayerGameScore==6){
            secondPlayerSetscore++;

            //Reset the game score
            secondPlayerGameScore=0;
            
        }

        //Game ends
        if(secondPlayerSetscore==2){return}

    }

    //Error handling
    else{
        return
    }

})

