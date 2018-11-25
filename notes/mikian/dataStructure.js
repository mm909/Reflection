let users = {
  "_id": "UNIQUEID",
  "name": "example",
  "numreflections": 3
}

let reflections = {
  "_id": "UNIQUEID",
  "user_id": "UNIQUEUSERID",
  "numanswers": 2,
  "time": {
    "date": "2016-05-18T16:00:00Z",
    "offset": 420
  },
  "answers": [{
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

let questions = {
  "_id": "UNIQUEID",
  "text": "Something good:"
}

// Using date and offset
// https://docs.mongodb.com/manual/tutorial/model-time-data/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset

// One to many relationships
// https://docs.mongodb.com/manual/tutorial/model-referenced-one-to-many-relationships-between-documents/