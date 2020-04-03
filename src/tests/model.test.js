const model = require("../model");
const test = require("tape");
const build = require("../database/testbuild");

// TESTS FOR deleteListing
// TESTS FOR deleteListing
// TESTS FOR deleteListing

test("Tape is working!", t => {
  t.equal(1, 1);
  t.end();
});

test("Check model is exporting the function deleteListing", t => {
  t.equal("deleteListing" in model , true);
  t.end();
});

test("Check deleteListing returns true", t => {
  t.equal("deleteListing" in model , true);
  t.end();
});

test("Check if delete(1) doesn't crash and delete's something!", t => {
    build().then( () => {
        model.deleteListing(1).then( result => {
          t.equal(result, true);
          t.end();
        });
    })
})


// The one we were struggling with !!!

test("Check if delete(1) deletes the correct thing!", t => {
    build().then( () => {
        model.deleteListing(1).then( () => {
            model.getOnlyPostsTable().then ( results => {
                t.equal( results.length, 3, "There should be only 3 results");
                results.forEach( item => { 
                    t.notEqual( item.id, 1, `ID ${item.id} not equal to 1`);
                });
                t.end();
            })
        })
    })
})


// TESTS FOR getAllUsers
// TESTS FOR getAllUsers
// TESTS FOR getAllUsers

test("Check model is exporting the function getAllUsers", t => {
  t.equal("getAllUsers" in model , true);
  t.end();
});

test("Check getAllUsers returns true", t => {
  t.equal("getAllUsers" in model , true);
  t.end();
});

test("Check if getAllUsers gets all users", t => {
  build().then( () => {
    model.getAllUsers().then(user => {
      const allUsers = user;
      t.equal(allUsers.length, 4);
      t.end();
    })  
  })
})


// TESTS FOR getAllListings
// TESTS FOR getAllListings
// TESTS FOR getAllListings

test("Check if getAllListings gets all listings", t => {
    build().then( () => {
        model.getAllListings({}).then( listings => {
            t.equal( listings[0].id, 4 );
            t.equal( listings[1].postcode, "SE2" );
            t.equal( listings[2].username, "ina245" );
            t.equal( listings[3].title, "Loads of toilet roll" );
            t.end();
        })  
    })
})


// TESTS FOR getListings
// TESTS FOR getListings
// TESTS FOR getListings

test("Check if getListing takes account of search term", t => {
    build().then( () => {
        let searchTerms = { search: "loads" };
        model.getListings(searchTerms).then( listings => {
            t.equal( listings.length, 2, "Exactly two listings returned" );
            t.equal( listings[0].id, 2, "First one has id 2" );
            t.equal( listings[0].title, "Loads of canned peas", "Post concerns peas" );
            t.equal( listings[1].id, 1, "Second has id 1" );
            t.equal( listings[1].username, "joe653", "Was posted by joe653" );
            t.end();
        })  
        .catch( err => {  console.log("SOMETHING'S UP!!!\n", err);   });
    })
});

test("Check if getListing takes account of search term 2", t => {
  build().then( () => {
      let searchTerms = { search: "socks" };
      model.getListings(searchTerms).then( listings => {
          t.equal( listings.length, 1, "Exactly 1 listing returned" );
          t.equal( listings[0].id, 3, "That listing has id 3" );
          t.equal( listings[0].post, "They are so warm", "The socks are warm" );
          t.end();
      })  
      .catch( err => {console.log("SOMETHING'S UP!!!\n", err); });
  })
});

test("Check if getListing copes with no search params", t => {
  build().then( () => {
      model.getListings().then( listings => {
          t.equal( listings.length, 4, "Exactly 4 listings returned" );
          t.end();
      })  
      .catch( err => {console.log("SOMETHING'S UP!!!\n", err); });
  })
});

test("Check if getListing copes with an empty object as its parameter", t => {
  build().then( () => {
      model.getListings({}).then( listings => {
          t.equal( listings.length, 4, "Exactly 4 listings returned" );
          t.end();
      })  
      .catch( err => { console.log("SOMETHING'S UP!!!\n", err); });
  })
});

test("Check if getListing copes with an empty string as its parameter", t => {
  build().then( () => {
      model.getListings({ search: "" }).then( listings => {
          t.equal( listings.length, 4, "Exactly 4 listings returned" );
          t.end();
      })  
      .catch( err => { console.log("SOMETHING'S UP!!!\n", err); });
  })
});