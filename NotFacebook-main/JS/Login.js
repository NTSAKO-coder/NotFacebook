function skipSplash() {
    localStorage.setItem("skipSplash", "true");
}
window.onload = function() {
    if (localStorage.getItem("skipSplash") === "true") {
        
        document.getElementById("splash").style.display = "none";
        document.getElementById("loginForm").style.display = "block";
    } else {
        
        document.getElementById("splash").style.display = "block";
        setTimeout(function() {
            document.getElementById("splash").style.display = "none";
            document.getElementById("loginForm").style.display = "block";
        }, 2000);
    }
};
