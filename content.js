/**
 * Hides the YouTube comments section
 */
function hideComments() {
    const commentsSection = document.getElementById("comments");
    if (commentsSection && commentsSection.style.display !== "none") {
        commentsSection.style.display = "none";
        console.log("Comments section hidden successfully.");
    }
}

hideComments();

// Create a MutationObserver to watch for changes on the page
const observer = new MutationObserver((mutations) => {
    hideComments();
});

// Tell the observer to watch the entire body of the webpage for changes
observer.observe(document.body, { 
    childList: true, 
    subtree: true 
});