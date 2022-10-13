

function callExposition() {
    var words1 = ["Greetings!", 
              "Well, hello...", 
              "Ahhh.... tis yourself!", 
              "Hail friend,",
              "Well met,", 
              "Goodday"]
    var words2 = [" All quiet here mostly on the western front, although.....",
               " ....there's been a few whisperings lately....",
               " fine day ain't it?",
                "The Saints preserve us!"]            
    var words3 = [" There be strange things afoot....", 
              " Have you heard about what went on down them mines?",
              " I hear there be a carnival setting up down by the coast", 
              " Too many strangers round these parts of late"              
                ]
    var words4 = [" Ain't nothing good can come of it I tell ye",
                " lily-livered plain ol' tom-foolery if you asks me",
                " Has more than the sheep a'worrying I'd say",
                " Much a do about nothing I reckons"]

var rand1 = Math.floor(Math.random() * words1.length);
var rand2 = Math.floor(Math.random() * words2.length);
var rand3 = Math.floor(Math.random() * words3.length);
var rand4 = Math.floor(Math.random() * words4.length);

var phrase = words1[rand1] + words2[rand2] + words3[rand3] + words4[rand4];
console.log(phrase)
            }

callExposition()