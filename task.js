import express from 'express';

const app = express();

const students = [

    "abdo",
    "mona",
    "ali",
    "salmaa"
    
];

const studentslis = (request , response) => {
    let output = "<ul>";

    for(let i = 0; i<students.length; i++){
        output += "<li><h1>" + students[i]+ "</h1></li>";
    }
    output += "</ul>";
    response.send(output);
};

app.get('/students', studentslis)

app.listen(5000);