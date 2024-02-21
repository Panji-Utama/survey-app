// Login Maker
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginFormMaker");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    console.log(email, password);
    try {
      const response = await fetch("http://localhost:3000/user/maker/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const token = await response.json();
        console.log(token);
        localStorage.setItem("token", token)
        window.location.href = 'maker_dashboard.html'
      } else {
        // Handle unsuccessful login (show error message, etc.)
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  });
});

// Login Filler
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginFormFiller");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    console.log(email, password);
    try {
      const response = await fetch("http://localhost:3000/user/filler/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        window.location.href = "filler_dashboard.html";
      } else {
        // Handle unsuccessful login (show error message, etc.)
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  });
});
