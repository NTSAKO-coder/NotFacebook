function toggleInfo() {
    var info = document.getElementById('moreInfo'); 

    if (info.style.display === 'none' || info.style.display === '') {
        info.style.display = 'block'; 
    } else {
        info.style.display = 'none'; 
    }
}