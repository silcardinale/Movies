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
  database:"IMDB" 

});

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Conexion establecida con exito.")
    }
    
});

//Profesionales

//Mostrar los datos de un porfesional especifico
app.get('/profesionales/:prof_id', (req, res) => {
    const { prof_id } = req.params; 
    connection.query('SELECT * FROM professsional WHERE prof_id = ?', [prof_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
        console.log(rows);
      } else {
        console.log(err);
      }
    });
});

//Mostrar los datos todos los profesionales
app.get("/profesionales",function(req,res){
    
    connection.query("SELECT * FROM professsional",function(err,result){
        if(!err){
           res.send(result);
        }else{
            console.log(err);
        }
    
    }


)});

//Agregar un profesional
app.post("/profesionales",function(req,res){

    var insert = "INSERT INTO professsional (prof_id,name,age,genre,height,hair_color,eyes_color,race,is_retired,nationality,oscar_number,profession) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    var array = [req.body.prof_id,req.body.name,req.body.age,req.body.genre,req.body.height,req.body.hair_color,req.body.eyes_color,req.body.race,req.body.is_retired,req.body.nationality,req.body.oscar_number,req.body.profession];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

//Modificar los datos de un profesional
app.put("/profesionales",function(req,res){

    var insert = "UPDATE professsional SET name = ?,age = ?,genre = ?,height = ?,hair_color = ?,eyes_color = ?,race = ?,is_retired =?,nationality = ?,oscar_number = ?,profession = ? WHERE prof_id = ?";
    var array = [req.body.name,req.body.age,req.body.genre,req.body.height,req.body.hair_color,req.body.eyes_color,req.body.race,req.body.is_retired,req.body.nationality,req.body.oscar_number,req.body.profession,req.body.prof_id];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

// Eliminiar un profesional de profesionales
app.delete("/profesionales/:prof_id",function(req,res){
  
    var insert = "DELETE FROM professsional WHERE prof_id = "+req.params.prof_id+"";
   
    connection.query(insert,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

//PRODUCTORAS

//Mostrar los datos de una productora especifica
app.get('/producer/:producer_id', (req, res) => {
    const { producer_id } = req.params; 
    connection.query('SELECT * FROM producer WHERE producer_id = ?', [producer_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
        console.log(rows);
      } else {
        console.log(err);
      }
    });
});

//Mostrar los datos de todas las procutoras
app.get("/producer",function(req,res){
    
    connection.query("SELECT * FROM producer",function(err,result){
        if(!err){
           res.send(result);
        }else{
            console.log(err);
        }
    
    }


)});

//Agregar una productora
app.post("/producer",function(req,res){

    var insert = "INSERT INTO producer (producer_id,name,start_year,country) VALUES (?,?,?,?)";
    var array = [req.body.producer_id,req.body.name,req.body.start_year,req.body.country];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

//Modificar los datos de una productora
app.put("/producer",function(req,res){

    var insert = "UPDATE producer SET name = ?,start_year = ?, country = ? WHERE producer_id = ?";
    var array = [req.body.name,req.body.start_year,req.body.country,req.body.producer_id];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

//Eliminar una productora
app.delete("/producer/:producer_id",function(req,res){
  
    var insert = "DELETE FROM producer WHERE producer_id = "+req.params.producer_id+"";
  
    connection.query(insert,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

//Peliculas

app.get("/peliculas",function(req,res){
    
    connection.query("SELECT * FROM movie",function(err,result){
        if(!err){
           res.send(result);
        }else{
            console.log(err);
        }
    
    }


)});

// Seleccionar la informacion de una pelicula
app.get('/peliculas/:movie_id', (req, res) => {
    const { movie_id } = req.params; 
    connection.query('SELECT * FROM movie WHERE movie_id = ?',[movie_id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
        console.log(rows);
      } else {
        console.log(err);
      }
    });
});

//Seleccionar los datos de los actores de una pelicula
app.get("/pelicula/actor/:movie_id",function(req,res){
    const { movie_id } = req.params; 
    connection.query("SELECT * FROM professsional JOIN movie_professional ON professsional.prof_id = movie_professional.prof_id  WHERE professsional.profession = 'actor' AND movie_id = ?", [movie_id],function(err,result){
        if(!err){
           res.send(result);
           console.log(result);
        }else{
            console.log(err);
        }
    
    }


)});

//Seleccionar los datos del director de una pelicula
app.get("/pelicula/director/:movie_id",function(req,res){
    const { movie_id } = req.params; 
    connection.query("SELECT * FROM professsional JOIN movie_professional ON professsional.prof_id = movie_professional.prof_id  WHERE profession = 'director' AND movie_id =?",[movie_id],function(err,result){
        if(!err){
           res.send(result);
           console.log(result);
        }else{
            console.log(err);
        }
    
    }


)});


//Seleccionar los datos del guionista de la pelicula
app.get("/pelicula/guionista/:movie_id",function(req,res){
    const { movie_id } = req.params; 
    connection.query("SELECT * FROM professsional JOIN movie_professional ON professsional.prof_id = movie_professional.prof_id  WHERE profession = 'guionista' AND movie_id =?",[movie_id],function(err,result){
        if(!err){
           res.send(result);
           console.log(result);
        }else{
            console.log(err);
        }
    
    }


)});

//Seleccionar los datos de la productora de una pelicula
app.get("/pelicula/producer/:movie_id",function(req,res){
    const { movie_id } = req.params; 
    connection.query("SELECT * FROM producer JOIN movie ON producer.movie_id = movie.movie_id  WHERE movie_id =?",[movie_id],function(err,result){
        if(!err){
           res.send(result);
           console.log(result);
        }else{
            console.log(err);
        }
    
    }


)});

//Insertar una pelicula
app.post("/peliculas",function(req,res){

    var insert = "INSERT INTO movie (movie_id,title,release_year,nationality,language,platform,isMCU,main_charac_name,producer_id,genre) VALUES (?,?,?,?,?,?,?,?,?,?)";
    var array = [req.body.movie_id,req.body.title,req.body.release_year,req.body.nationality,req.body.language,req.body.platform,req.body.isMCU,req.body.main_charac_name,req.body.producer_id,req.body.genre];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

//Insert un actor en una pelicula
app.post("/peliculas/actor",function(req,res){

    var insert = "INSERT INTO professsional (prof_id,name,age,genre,height,hair_color,eyes_color,race,is_retired,nationality,oscar_number,profession) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    var array = [req.body.prof_id,req.body.name,req.body.age,req.body.genre,req.body.height,req.body.hair_color,req.body.eyes_color,req.body.race,req.body.is_retired,req.body.nationality,req.body.oscar_number,req.body.profession];
    
    connection.query(insert,array,function(err,result){
        if(!err){
            var insert2 = "INSERT INTO movie_professional (movie_id,prof_id) VALUES (?,?)";
            var array2 =[req.body.movie_id,req.body.prof_id];
            connection.query(insert2,array2,[movie_id,result.insertId],function(err,result){
                if(!err){
                    res.send(result);
                    console.log(result);
                }else{
                    res.send(err);
                }
            })
         }
    })

});

//Inserta un director en una pelicula
app.post("/peliculas/director",function(req,res){

    var insert = "INSERT INTO professsional (prof_id,name,age,genre,height,hair_color,eyes_color,race,is_retired,nationality,oscar_number,profession) VALUES (?,?,?,?,?,?,?,?,?,?,?,'director')";
    var array = [req.body.prof_id,req.body.name,req.body.age,req.body.genre,req.body.height,req.body.hair_color,req.body.eyes_color,req.body.race,req.body.is_retired,req.body.nationality,req.body.oscar_number,req.body.profession];
    
    connection.query(insert,array,function(err,result){
        if(!err){
            var insert2 = "INSERT INTO movie_professional (movie_id,prof_id) VALUES (?,?)";
            var array2 =[req.body.movie_id,req.body.prof_id];
            connection.query(insert2,array2,[movie_id,result.insertId],function(err,result){
                if(!err){
                    res.send(result);
                    console.log(result);
                }else{
                    res.send(err);
                }
            })
        }
    })

});

//Inserta un guioinista en una pelicula

app.post("/peliculas/guionista",function(req,res){

    var insert = "INSERT INTO professsional (prof_id,name,age,genre,height,hair_color,eyes_color,race,is_retired,nationality,oscar_number,profession) VALUES (?,?,?,?,?,?,?,?,?,?,?,'guionista')";
    var array = [req.body.prof_id,req.body.name,req.body.age,req.body.genre,req.body.height,req.body.hair_color,req.body.eyes_color,req.body.race,req.body.is_retired,req.body.nationality,req.body.oscar_number,req.body.profession];
    
    connection.query(insert,array,function(err,result){
        if(!err){
            var insert2 = "INSERT INTO movie_professional (movie_id,prof_id) VALUES (?,?)";
            var array2 =[req.body.movie_id,req.body.prof_id];
            connection.query(insert2,array2,[movie_id,result.insertId],function(err,result){
                if(!err){
                    res.send(result);
                    console.log(result);
                }else{
                    res.send(err);
                }
            })
         }
    })

});

//Actualiza los datos de una pelicula

app.put("/peliculas",function(req,res){

    var insert = "UPDATE movie SET title = ?,release_year = ?, nationality = ?,language = ?,platform = ?,isMCU = ?,main_charac_name = ?,producer_id =?,genre = ? WHERE movie_id = ?";
    var array = [req.body.title,req.body.release_year,req.body.nationality,req.body.language,req.body.platform,req.body.isMCU,req.body.main_charac_name,req.body.producer_id,req.body.genre,req.body.movie_id];
    connection.query(insert,array,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

//Elimina una pelicula

app.delete("/pelicula/:movie_id",function(req,res){
  
    var insert = "DELETE FROM movie WHERE movie_id = "+req.params.movie_id+"";
  
    connection.query(insert,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

//Elimina un actor de una pelicula
app.delete("/peliculas/actor/:movie_id",function(req,res){
  
    var insert = "DELETE FROM movie_professional WHERE prof_id = "+req.body.prof_id+" AND movie_id = "+req.body.movie_id+""; 
  
    connection.query(insert,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});


//Elimina un director de una pelicula

app.delete("/peliculas/director",function(req,res){
  
    var insert = "DELETE FROM movie_professional WHERE prof_id = "+req.body.prof_id+" AND movie_id = "+req.body.movie_id+""; 
  
    connection.query(insert,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

//Elimina un guionista de una pelicula
app.delete("/peliculas/guionista/:movie_id",function(req,res){
  
    var insert = "DELETE FROM movie_professional WHERE prof_id = "+req.body.prof_id+" AND movie_id = "+req.body.movie_id+""; 
  
    connection.query(insert,function(err,result){
        if(!err){
            res.send(result);
            console.log(result);
         }else{
            res.send(err);
         }
    })

});

app.listen(3004);