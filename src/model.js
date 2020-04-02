const db = require("./database/connection");

// functions that select/insert data to the DB go here

function deleteListing(id) {

    db.query("DELETE FROM posts WHERE id = $1", [id])
        .then(result => {
            // console.log("QUERY RESULTS:", result);
            return result.rowCount === 1;
        });

    return true;
}


async function getOnlyPostsTable() {
    db.query("SELECT * FROM posts;")
        .then(result => {
            console.log("IN QUERY", result.rows);
            return result.rows;
        });
}

module.exports = { deleteListing, getOnlyPostsTable };
