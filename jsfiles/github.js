const githubButton = document.getElementById("git-hub");
githubButton.addEventListener("click", () => {
    if (confirm("ARE YOU SURE YOU WANT TO LEAVE?") == false)  {
        event.preventDefault();
    }
} )