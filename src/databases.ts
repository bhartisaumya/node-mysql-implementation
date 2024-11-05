// import {createPool} from 'mysql2'


// const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '6862',
//     database: 'notes_app'
// }).promise()


// async function getNotes(){
//     const result = await pool.query("SELECT *FROM notes")
//     return result
// }

// const ans = getNotes()
// console.log(ans.then(result => console.log(result[0])))



let c = 0;

while(1){
    c++;
    console.log(c)
}