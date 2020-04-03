const db = require("./database/connection");

// Delete items from the post table by id
function deleteListing(id) {
    return db.query("DELETE FROM posts WHERE id = $1", [id])
    .then(result => {
        return result.rowCount === 1;
    });
}

// Return every row of the posts table
function getOnlyPostsTable() {
    return db.query("SELECT * FROM posts;")
    .then(result => {
        return result.rows;
    });
}

// Return all users from the users table
function getAllUsers() {
   return db.query(`SELECT * FROM users;`)
    .then(result => {
        return result.rows;
    }); 
}

// Get all listings from the posts table
// function getAllListings() {
//     return db.query(
//         `SELECT posts.title, posts.time, posts.category, posts.post
//         FROM posts
//         RIGHT JOIN users
//         ON users.id = posts.user_id 

//         `
//         ).then(result => {
//          return result.rows;
//      }); 
//  }

// Get all listings from the posts table
function getAllListings() {
    return db.query(
        `SELECT posts.id, users.username, posts.title, posts.time, users.postcode, posts.post
        FROM users
        RIGHT JOIN posts
        ON users.id = posts.user_id
        ORDER BY posts.time DESC
        `
        ).then(result => {
         return result.rows;
     }); 
 }

 // Get all listings from the posts table including search filters
 function getListings(obj) {
     if(typeof obj !== typeof {} || !("search" in obj) || obj.search === "") {
        return getAllListings();
    } else {
        return db.query(
            `SELECT posts.id, users.username, posts.title, posts.time, users.postcode, posts.post
            FROM users
            RIGHT JOIN posts
            ON users.id = posts.user_id
            WHERE
            UPPER (posts.title) LIKE UPPER('%' || $1 || '%')
            OR
            UPPER (posts.post) LIKE UPPER('%' || $1 || '%')
            ORDER BY posts.time DESC
            `, [obj.search]
            )
            .then(result => {
                return result.rows;
            })
            .catch( err => { console.log("NAH!!!\n", err) });
    }
 }

module.exports = { deleteListing, getOnlyPostsTable, getAllUsers, getAllListings, getListings };
