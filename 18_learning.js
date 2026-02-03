function createLoginTracker(maxAttempts) {
    let attempts = 0; // private variable (closure)

    return function login(password) {
        if (attempts >= maxAttempts) {
            console.log("Account locked ❌");
            return;
        }

        if (password === "admin123") {
            console.log("Login successful ✅");
            attempts = 0; // reset on success
        } else {
            attempts++;
            console.log(`Wrong password ⚠️ Attempts left: ${maxAttempts - attempts}`);
        }
    };
}

// usage
const loginUser = createLoginTracker(3);

loginUser("123");
loginUser("abc");
loginUser("admin123");
loginUser("wrong");
loginUser("wrong");
loginUser("wrong");