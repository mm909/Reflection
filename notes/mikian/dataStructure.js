let user = {
  "_id": "UNIQUEID",
  "name": "Mikian",
  "numreflections": 3,
  "numAnswers" : 6,
  "settings": {
    "x" : X,
    "y" : Y
   }
}

let reflection = {
  "_id": "UNIQUEID",
  "user_id": "UNIQUEUSERID",
  "numAnswers" : 2,
  "time": {
    "date": "2016-05-18T16:00:00Z",
    "offset": 420
  },
  "answers": [
    {
      "question": "Something good:",
      "question_id": 0,
      "answertext": "I learned alot."
    },
    {
      "question": "Something Bad:",
      "question_id": 1,
      "answertext": "It took a long time."
    }
  ]
}

let question = {
  "_id": "UNIQUEID",
  "text": "Something good:",
  "numberOfTimesAnswered" : 2
}






//eof
