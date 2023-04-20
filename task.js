import express from 'express';

const app = express();

const students = [

    "abdo",
    "mona",
    "ali",
    "sama"
    
];

const studentslis = (request , response) => {
    let output = "<ul>";

    for(let i = 0; i<students.length; i++){
        output += "<li>" + students[i]+ "</h1>";
    }
    output += "</ul>";
    response.send(output);
};

app.get('/students', studentslis)

app.listen(5000);