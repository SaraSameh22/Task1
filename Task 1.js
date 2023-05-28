import express from "express";
const app = express();
const students =[
 "Sara" ,
 "Sameh" ,
 "Noha" ,
 "Hani" ,
 "Eman" ,
 "Ali" ,
 "Amal" ,
 "Ahmed"  
];
const studentshow  = (request  ,response) => {
 console.log("Done");
    let output ="<ul>"
    for(let i=0 ; i<students.length ; i++){
        output += "<li>" + students[i] + "</li>";
    }
    output += "</ul>"
   response.send(output)
}

app.get("/students" , studentshow)
 app.listen(5000);