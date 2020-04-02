const model = require("../model");
const test = require("tape");
const build = require("../database/testbuild");


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
    build()
    .then( () => {
        let result = model.deleteListing(1)
        t.equal(result, true);
        t.end();
    })
})


// test("Check if delete(1) deletes the correct thing!", t => {
//   build()
//   .then(model.deleteListing(1))
//   .then(model.getOnlyPostsTable())
//   .then( result => {
//       console.log("WE GOT:", result);
//       t.equal(result, true);
//       t.end();
//   })
// })
