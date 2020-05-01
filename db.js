const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./projeto.db')

db.serialize(function(){
    
    // criar 
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS ideas(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         title TEXT,
    //         category TEXT,
    //         description TEXT,
    //         link TEXT
    //     );
    // `)

    
    //  inserir
    // const query = `
    //     INSERT INTO ideas (
    //         image,
    //         title,
    //         category,
    //         description,
    //         link
    //     )VALUES (?,?,?,?,?);
    // // `
    // const values = [
    //     "https://image.flaticon.com/icons/svg/2729/2729036.svg",
    //     "Cursos Online",
    //     "Estudo",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     "https://www.udemy.com"
    // ]

    // db.run(query, values, function(err) {
    //     if (err) return console.log(err)

    //     console.log(this)
    // })


    // consultar
    // db.all(`SELECT * FROM ideas`, function(err, rows){
    //     if (err) return console.log(err)

    //     console.log (rows)
    // })


    // //deletar
    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err){
    //     if (err) return console.log (err)

    //     console.log("DELETEI", this)
    // })
})

module.exports = db