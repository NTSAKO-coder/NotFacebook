let likeCount = 0;
let shareCount = 0;

function updateLikeCount() {
    likeCount++; 
    document.querySelector('.like-count').textContent = likeCount; 
}

function updateShareCount() {
    shareCount++;
    document.querySelector('.share-count').textContent = shareCount;
}

