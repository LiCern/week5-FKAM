<<<<<<< HEAD
const template = document.getElementById("template")
const listings = document.getElementById("listings")
const search = document.getElementById("search")
const searchForm = document.getElementById("searchForm")

function getPosts() {

    let filterBy = {
        search: search.value,
        food: false,
        toiletries: false,
        household: false,
        other: false,
    };

    let fetchParams = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filterBy)
    };

    fetch("/getposts", fetchParams)
        .then(res => {
            if(!res.ok) throw new Error("Bad response from Server")
            return res;
        })
        .then(res => res.json())
        .then(data => { 
            listings.innerHTML = "";
            Object.keys(data).forEach( key => {

                const listing = data[key];
                const newListing = template.content.cloneNode(true);

                let title = newListing.querySelector(".listing__title");
                title.textContent = listing.title;

                let name = newListing.querySelector(".listing__name");
                name.textContent = listing.username;

                let postcode = newListing.querySelector(".listing__postcode");
                postcode.textContent = listing.postcode;

                let textbox = newListing.querySelector(".listing__textbox");
                textbox.textContent = listing.post;

                let date = newListing.querySelector(".listing__date");
                date.value = listing.time;

                let deleteButton = newListing.querySelector(".listing-remove__button");
                deleteButton.addEventListener("click", event => {
                    event.preventDefault();
                    fetch("/delete", { method: "DELETE", body: listing.id })
                    .then(location.reload());
            })
                listings.appendChild(newListing);
            });
        })
        .catch(err => console.error(err))
}

getPosts();

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    getPosts();
});
=======
>>>>>>> d61d42e2d1ea8996a7fab3b498ec736e0096bbca
