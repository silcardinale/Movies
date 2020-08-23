class Professional{

    constructor(photo, name, age, genre, weigth, height, hairColor,eyeColor,race, isRetired,nationality, oscarNumber,profession){

        this.photo = photo;
        this.name = name;
        this.age  = age;
        this.genre = genre;
        this.weight = weigth;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }

    MostrarAtributos(){
                   
        return "Name: " + this.name + " \n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" + "Weight: " + this.weight + "\n" + "Height" + this.height + "\n" + "Hair Color: " + this.hairColor + "\n" + "Eyes Color: " + this.eyeColor + "\n" + "Race: " + this.race +"\n" +"Retired?: " + this.isRetired + "\n" + "Nationality: " +  this.nationality + "\n" + "Oscars: " + this.oscarNumber + "\n"+ "Profession: " + this.profession;
    }
}

class Movie {

    constructor (title, nationality, releaseYear,genre, photo, language, platform,isMCU,mainCharacterName,director,distributor){

        this.title = title;
        this.nationality = nationality;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.photo = photo;
        this.actors= new Array();
        this.language =language;
        this.platform =platform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.director = new Array();
        this.distributor = distributor;
        
    }
    filmData(){
        
        return this.title + "," + this.nationality + " ," + this.releaseYear + ", " + this.genre +
        " ," + this.actors + ", " + this.nationality + " ," + this.language + ", " + this.platform + " ," +
        this.isMCU + ", " + this.mainCharacterName + " ," + this.director + ", " + this.distributor;
    }

}

class IMDB{

    constructor(peliculas){
        this.peliculas = peliculas;
    }
  
}

class NewMovie{
    constructor(titulo, estreno, actor,nacionalidad){
        this.titulo =titulo;
        this.estreno = estreno;
        this.actor = actor;
        this.nacionalidad =nacionalidad;
    }
}



let Emma = new Professional("https://www.google.com/search?q=emma+stone&sxsrf=ALeKk02IfqmSYl_6Bx1hxvZCYk3e71yUEw:1595261964108&tbm=isch&source=iu&ictx=1&fir=2yH-VFJJZ4gRtM%252Ce9pECq8B8MdhFM%252C_&vet=1&usg=AI4_-kRdfTS9IQk9UkEVrLsPDkySCbd6Jg&sa=X&ved=2ahUKEwiQxcb1ndzqAhVi6uAKHQZ_BhoQ_h0wGHoECBYQCQ#imgrc=2yH-VFJJZ4gRtM",
"Emma Stone",31,"Mujer",52,1.68,"rubia y pelirroja","verdes","Blanca",false,"USA",0,"Actriz y cantante");

let Ryan = new Professional("https://commons.wikimedia.org/wiki/File:Ryan_Gosling_in_2018.jpg","Ryan Thomas Gosling",39,"Hombre",76,1.84,"Pelo: Rubio","Ojos:Marrones","Piel: Blanca",false,"Nacionalidad canadiense","Oscars: 0","Actor, director, cantante, musico");

let Rami = new Professional ("https://commons.wikimedia.org/wiki/File:SXSW_2016_-_Rami_Malek_(25138464364)_(cropped_2).jpg", "Rami Said Malek",39,"Hombre", 71, 1.75, "Oscuro", "Blanco",false, "USA",1, "actor");

let leo = new Professional("https://commons.wikimedia.org/wiki/File:Leonardo_Dicaprio_Cannes_2019.jpg", "Leonardo Wilhelm DiCaprio","Hombre",45,76, 1.83,"Rubio","verdes","Blanco",false,"USA",2,"Actor, productor de cine, ambientalista, guionista, productor de televisión");

let martin = new Professional("https://commons.wikimedia.org/wiki/File:Martin_Scorsese_Berlinale_2010_(cropped).jpg","Martin Charles Scorsese",77,"hombre", 76,1.76,"Gris","marrones","blanco",false,"USA e Italia", 1, "Productor de cine, actor de cine, director de cine, guionista, editor de cine, actor de voz y director de televisión");

let lalaland = new Movie("Lalaland","Hollywood",2016,"Comedia Musical",);
lalaland.actors= [Emma,Ryan];
lalaland.language = "Ingles";
lalaland.director = "Damien Chazelle";
lalaland.distributor = "Summit Entertainment";
lalaland.isMCU = false;
lalaland.mainCharacterName ="Mia y Sebastian";

let bohemian  = new Movie("Bohemian Rhapsody","Hollywood",2018,"Drama biografico");
bohemian.language ="Ingles";
bohemian.director= "Bryann Singer";
bohemian.distributor = "New Regency";
bohemian.isMCU=false;
bohemian.mainCharacterName="Freddy Mercury";
bohemian.actors = Rami;

let lobo = new Movie("El Lobo de Wall Street","Hollywood",2013,"Comedia negra biografica");
lobo.actors = leo;
lobo.language= "Ingles";
lobo.director = martin;
lobo.distributor = "Paramount Pictures";
lobo.isMCU=false;
lobo.mainCharacterName= "Jordan Belfort";

let harry= new Movie("Harry Potter y las Reliquias de la Muerte","UK",2010,"Fantasia","https://www.google.com/search?q=harry+potter+y+las+reliquias+de+la+muerte+pelicula&sxsrf=ALeKk02F-r0FL7iqtqqv1nB8uEH9-rqKiw:1595590611193&tbm=isch&source=iu&ictx=1&fir=JI6_SctAzgifjM%252CqiDc4iYphtvXMM%252C%252Fm%252F02pth35&vet=1&usg=AI4_-kRQ2bUnFVz4EyWnjHakrk_MyVbARQ&sa=X&ved=2ahUKEwj78Nic5uXqAhWD3eAKHV8vCjsQ_B0wE3oECAcQAw#imgrc=JI6_SctAzgifjM","English","Hollywood",false,"Harry Potter, Hermaione Granger y Ron Weasley","David Yates","Warner Bros.");
let malefica=new Movie("Malefica","USA",2014,"Fantasia/Aventura","https://www.google.com/search?q=malefica&sxsrf=ALeKk02G-UIN6yS_GYJ7QEMDO7S6AyDDQw:1595593213598&tbm=isch&source=iu&ictx=1&fir=_1fZfsAWgvZlyM%252C5o7zZ32m0uy7oM%252C%252Fm%252F0k0tq97&vet=1&usg=AI4_-kTKkaUMtK5ry-ZM1eNaFeTCYOJa5g&sa=X&ved=2ahUKEwim9M717-XqAhUI8hQKHU4SDzkQ_B0wGHoECAwQAw#imgrc=_1fZfsAWgvZlyM","Ingles","Hollywood",false,"Malefica y Aurora","Robert Stromberg","Disney");
let avengers=  new Movie("Avangers: Los Vengadores","USA",2012,"Fantasia/Aventura","https://www.google.com/search?q=avengers&sxsrf=ALeKk02dga2R5Q1D-TmISx1RWhBQgXoG-g:1595593708363&tbm=isch&source=iu&ictx=1&fir=h7T_5tAme6fS0M%252CPGPZMmuc8X5-sM%252C%252Fg%252F11f2hl2c8y&vet=1&usg=AI4_-kSqDafsxqanoIv752jYd6geEK4ciw&sa=X&ved=2ahUKEwij-MTh8eXqAhX6BGMBHXGCCUIQ_B0wHXoECBEQAw#imgrc=h7T_5tAme6fS0M","Ingles","Hollywood",true,"Thor,Iron Man, Hulk, La viuda Negra, Hawk, El Capitan America","Joss Wheddon,Joe Russo, Anthony Russo", "Marvel");

let movie_list = new IMDB([lalaland,bohemian,lobo,harry,malefica,avengers])




function show_lalaland(){
   
    let result;

        result = "Titulo: " + lalaland.title + "\n" + "Genero: " + lalaland.genre + "," + " " +
        "Nacionalidad: " + lalaland.nationality + "," + " " + "Año de Estreno: " + lalaland.releaseYear + "\n" +
        "Actores: Emma Stone y Ryan Gosling" + "," + " Personajes: " + lalaland.mainCharacterName + "\n" + 
        "Idioma: " + lalaland.language + "," + " "+ "Distribuido por: " + lalaland.distributor;
        


    console.log(result);

    document.getElementById("info_lalaland").innerHTML = result;

}


function show_lobo(){

    let result;

    result = "Titulo: " + lobo.title + "\n"  + lobo.genre + "," + " " +
    "Nacionalidad: " + lobo.nationality + "," + " " + "Año de Estreno: " + lobo.releaseYear + "\n" +
    "Actores: Leonardo DiCaprio, Jonah Hill y Margot Robbie" + "," + " " + " Personaje Principal: " + lobo.mainCharacterName + "\n" + 
    "Idioma: " + lobo.language + + "\n" + "Distribuido por: " + lobo.distributor;

console.log(result);

document.getElementById("info_lobo").innerHTML = result;
}
    



function show_bohemian(){

    let result;
   
    result = "Titulo: " + bohemian.title + "\n"  + bohemian.genre + "," + " " +
    "Nacionalidad: " + bohemian.nationality + "," + " " + "Año de Estreno: " + bohemian.releaseYear + "\n" +
    "Actores: Rami Malek" + "," + " " + "Personaje Principal: " + bohemian.mainCharacterName + "\n" + 
    "Idioma: " + bohemian.language + "\n" + "Distribuido por: " + bohemian.distributor;

console.log(result);


document.getElementById("info_bohemian").innerHTML = result;
}

function show_harry(){
   
    let result;

        result = "Titulo: " + harry.title + "\n"+ "," + "Genero: " + harry.genre + "," + " " +
        "Nacionalidad: " + harry.nationality + "," + + "Año de Estreno: " + lalaland.releaseYear + "\n" +
        "Actores: Daniel Radcliffe, Emma Watson y Rupert Grint " + "," + " Personajes: " + harry.mainCharacterName + "\n" + 
        "Idioma: " + harry.language + "," + " "+ "Distribuido por: " + lalaland.distributor;
        


    console.log(result);

    document.getElementById("movie_1").innerHTML = result;

}

function show_avengers(){
   
    let result;

        result = "Titulo: " + avengers.title + "\n" +","+ "Genero: " + avengers.genre + "," + " " +
        "Nacionalidad: " + avengers.nationality + "," + "Año de Estreno: " + avengers.releaseYear + "\n" +
        "Actores: Scarlett Johansson, Robert Downey Jr., Chris Hemsworth, Chris Evans, Mark Ruffalo y Jeremy Renner"  +  "," + " Personajes: " + avengers.mainCharacterName + "\n" + 
        "Idioma: " + avengers.language + "," + " "+ "Distribuido por: " + avengers.distributor;
        


    console.log(result);

    document.getElementById("movie_2").innerHTML = result;

}

function show_malefica(){
   
    let result;

        result = "Titulo: " + malefica.title + "\n" + "," + "Genero: " + malefica.genre + "," + " " +
        "Nacionalidad: " + malefica.nationality + "," + " " + "Año de Estreno: " + malefica.releaseYear + "\n" +
        "Actores: Angelina Jolie "  + "," + " Personajes: " + malefica.mainCharacterName + "\n" + 
        "Idioma: " + malefica.language + "," + " "+ "Distribuido por: " + malefica.distributor;
        


    console.log(result);

    document.getElementById("movie_3").innerHTML = result;

}



function agregar_pelicula(){
    
    var nueva_pelicula = new NewMovie(document.getElementById("input_titulo").value, 
                        document.getElementById("inputEstreno").value, document.getElementById("inputActor").value, 
                        document.getElementById("inputNacionalidad").value);

    console.log(nueva_pelicula);
   
    
   // document.getElementById("new_movie").innerHTML= "Titulo: " + nueva_pelicula.titulo + "," + "Año de Estreno: " + nueva_pelicula.estreno +
    //"," + nueva_pelicula.actor + "," + nueva_pelicula.nacionalidad;

    //$("#btn_pelicula").html(nueva_pelicula.titulo);

    //$("#info_movie").html("Titulo: " + nueva_pelicula.titulo + ","+ " Año de Estreno: " + nueva_pelicula.estreno + "," + " Actor Principal: " + nueva_pelicula.actor + "," + " Nacionalidad: " + nueva_pelicula.nacionalidad);

    $("#t1").html(nueva_pelicula.titulo);
    $("#t2").html(nueva_pelicula.estreno);
    $("#t3").html(nueva_pelicula.actor);
    $("#t4").html(nueva_pelicula.nacionalidad);
}


$(function()
    {
    
    $("#ocult1").on("click",
        function()
        {
            $("#ocult1,#movie_1").hide(1000)
            
        }
    )   

    $("#mostrar1").on("click",
        function()
        {
            $("#ocult1,#movie_1").show(1000)
            
        }
    ) 
});
   
$(function()
    {
    
    $("#ocult2").on("click",
        function()
        {
            $("#ocult2,#movie_2").hide(1000)
            
        }
    )   

    $("#mostrar2").on("click",
        function()
        {
            $("#ocult2,#movie_2").show(1000)
            
        }
    ) 
});
$(function()
    {
    
    $("#ocult3").on("click",
        function()
        {
            $("#ocult3,#movie_3").hide(1000)
            
        }
    )   

    $("#mostrar3").on("click",
        function()
        {
            $("#ocult3,#movie_3").show(1000)
            
        }
    ) 
});

$(function()
    {
    

    $("#agregar").on("click",
        function()
        {
            $("#t0").show(1000)
            
        }
    ) 
});

/*
$(document).ready(function(){
    $("#btn1").click(function(){
      $("#").append(" <b>Appended text</b>.");
    });
  
    $("#btn2").click(function(){
      $("ol").append("<li>Appended item</li>");
    });
  });
*/