const index = document.getElementById("my-logo");
const projects = document.getElementById("projects");
const interests = document.getElementById("interests");
const contact = document.getElementById("contact");

index.addEventListener("click", () => {
    localStorage.setItem("index", "clicked");
})

projects.addEventListener("click", () => {
    localStorage.setItem("projects", "clicked");
})

interests.addEventListener("click", () => {
    localStorage.setItem("interests", "clicked");
})

contact.addEventListener("click", () => {
    localStorage.setItem("contact", "clicked");
})

if (localStorage.getItem("index") === "clicked")  {
    console.log("thank you");
    if (localStorage.getItem("projects") === "clicked")  {
        console.log("for");
        if (localStorage.getItem("interests") === "clicked")  {
            console.log("your");
        } else if (localStorage.getItem("contact") === "clicked")  {
            console.log("hard work <3");
        } 
    } 
} 