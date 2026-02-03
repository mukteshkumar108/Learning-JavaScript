function getUsers() {
    console.log("Fetching users...");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            // response is NOT the data yet
            if (!response.ok) {
                throw new Error("Network response failed");
            }
            return response.json(); // convert to JS object
        })
        .then((data) => {
            // actual API data
            data.forEach(user => {
                console.log(user.name, "-", user.email);
            });
        })
        .catch((error) => {
            console.error("Error:", error.message);
        });
}

getUsers();
