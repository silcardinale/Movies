const express = require ("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:null,
  database:"Escenario_Trabajo" 

});

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Conexion establecida con exito.")
    }
    
});

app.get('/alumnos/:student_id', (req, res) => {
    const { student_id } = req.params; 
    connection.query('SELECT * FROM students WHERE student_id = ?', [student_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});


app.get("/alumnos",(req,res) =>{
    
    connection.query("SELECT * FROM students",(err,rows,fields)=>{
        if(!err){
           res.json(rows);
        }else{
            console.log(err);
        }
    
    }


)});


app.post("/alumnos",function(req,res){

    var insert = "INSERT INTO students (student_id,first_name,last_name,group_id,ingreso) VALUES (?,?,?,?,?)";
    var array = [req.body.student_id,req.body.first_name,req.body.last_name,req.body.group_id,req.body.ingreso];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })

});

app.put("/alumnos",function(req,res){

    var insert = "UPDATE students SET first_name = ?,last_name=?, group_id=?,ingreso=? WHERE student_id = ?";
    var array = [req.body.first_name,req.body.last_name,req.body.group_id,req.body.ingreso,req.body.student_id];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })


});

app.delete("/alumnos",function(req,res){
  
    var insert = "DELETE FROM students WHERE student_id = ?";
    var id = req.params.student_id;
    connection.query(insert,id,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })

});

//PROFESORES

app.get('/profesores/:teacher_id', (req, res) => {
    const { teacher_id } = req.params; 
    connection.query('SELECT * FROM teachers WHERE teacher_id = ?', [teacher_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});


app.get("/profesores",function(req,res){
    
    connection.query("SELECT * FROM teachers",function(err,result){
        if(!err){
           res.send(result);
        }else{
            res.send(err);
        }
    
    }


)});


app.post("/profesores",function(req,res){

    var insert = "INSERT INTO teachers (teacher_id,first_name,last_name) VALUES (?,?,?)";
    var array = [req.body.teacher_id,req.body.first_name,req.body.last_name];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })

});

app.put("/profesores",function(req,res){

    var insert = "UPDATE teachers SET first_name = ?,last_name=? WHERE teacher_id = ?";
    var array = [req.body.first_name,req.body.last_name,req.body.teacher_id];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })


});

app.delete("/profesores/:teacher_id",function(req,res){
  
    var insert = "DELETE FROM teachers WHERE teacher_id = ?";
    var id = [req.params.teacher_id];
    connection.query(insert,id,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })

});

//GRUPOS

app.get('/grupos/:group_id', (req, res) => {
    const { group_id } = req.params; 
    connection.query('SELECT * FROM groups WHERE group_id = ?', [group_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});


app.get("/grupos",function(req,res){
    
    connection.query("SELECT * FROM groups",function(err,result){
        if(!err){
           res.send(result);
        }else{
            res.send(err);
        }
    
    }


)});


app.post("/grupo",function(req,res){

    var insert = "INSERT INTO groups (group_id,name) VALUES (?,?)";
    var array = [req.body.group_id,req.body.name,];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })

});

app.put("/grupos",function(req,res){

    var insert = "UPDATE groups SET name = ? WHERE group_id = ?";
    var array = [req.body.name,req.body.group_id];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })


});

app.delete("/grupos/:group_id",function(req,res){
  
    var insert = "DELETE FROM groups WHERE group_id = ?";
    var id = [req.params.group_id];
    connection.query(insert,id,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })

});


//Asignaturas

app.get('/asignaturas/:subject_id', (req, res) => {
    const { subject_id } = req.params; 
    connection.query('SELECT * FROM asignaturas WHERE subject_id = ?', [subject_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});


app.get("/asignaturas",function(req,res){
    
    connection.query("SELECT * FROM subjects",function(err,result){
        if(!err){
           res.send(result);
        }else{
            res.send(err);
        }
    
    }


)});


app.post("/asignaturas",function(req,res){

    var insert = "INSERT INTO subjects (subject_id,title) VALUES (?,?)";
    var array = [req.body.subject_id,req.body.title,];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })

});

app.put("/asignaturas",function(req,res){

    var insert = "UPDATE subjects SET title = ? WHERE subject_id = ?";
    var array = [req.body.title,req.body.subject_id];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })


});

app.delete("/asignaturas/:subject_id",function(req,res){
  
    var insert = "DELETE FROM subjects WHERE subject_id = ?";
    var id = [req.params.subjects_id];
    connection.query(insert,id,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })

});

//NOTAS

app.get('/notas/:mark_id', (req, res) => {
    const { mark_id } = req.params; 
    connection.query('SELECT * FROM marks WHERE mark_id = ?', [mark_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});


app.get("/notas",function(req,res){
    
    connection.query("SELECT * FROM marks",function(err,result){
        if(!err){
           res.send(result);
        }else{
            res.send(err);
        }
    
    }


)});


app.post("/notas",function(req,res){

    var insert = "INSERT INTO marks(mark_id,student_id,subject_id,date,mark) VALUES (?,?,?,?,?)";
    var array = [req.body.mark_id,req.body.student_id,req.body.subject_id,req.body.date,req.body.mark];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })

});

app.put("/notas",function(req,res){

    var insert = "UPDATE marks SET student_id = ?, subject_id = ?, date = ? , mark = ? WHERE mark_id = ?";
    var array = [req.body.mark_id,req.body.student_id,req.body.subject_id,req.body.date,req.body.mark];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })


});

app.delete("/notas/:mark_id",function(req,res){
  
    var insert = "DELETE FROM marks WHERE mark_id = ?";
    var id = [req.params.mark_id];
    connection.query(insert,id,function(err,result){
        if(!err){
            res.send(result);
         }else{
            res.send(err);
         }
    })

});


app.get('/media/:student_id', (req, res) => {
    const { student_id } = req.params; 
    connection.query('SELECT AVG(mark) FROM marks WHERE student_id = ?', [student_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});

app.get('/apuntadas/:student_id', (req, res) => {
    const { student_id } = req.params; 
    connection.query('SELECT subject_id FROM marks WHERE student_id = ?', [student_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});

app.get('/apuntadas', function(req, res) {
    
    connection.query('SELECT students.first_name, students.last_name, subjects.title FROM students JOIN marks ON students.student_id = marks.student_id JOIN subjects ON marks.subject_id = subjects.subject_id', function (err, result) {
      if (!err) {
        res.send(result);
        console.log(result);
      } else {
        res.send(err);
      }
    });
});


app.get('/impartidas', function(req, res) {
    
    connection.query('SELECT teachers.first_name, teachers.last_name, subjects.title FROM teachers JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id JOIN subjects ON subject_teacher.subject_id = subjects.subject_id', function (err, result) {
      if (!err) {
        res.send(result);
        console.log(result);
      } else {
        res.send(err);
      }
    });
});

app.get('/impartidas/:teacher_id', (req, res) => {
    const { teacher_id } = req.params; 
    connection.query('SELECT title FROM `subject_teacher` JOIN subjects ON (subject_teacher.subject_id=subjects.subject_id) WHERE teacher_id = ?', [teacher_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });
app.listen(3003);

