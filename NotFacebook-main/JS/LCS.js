const likeIcon = document.getElementById('likeIcon');
const likeCount = document.getElementById('likeCount');
let likes = 0;

likeIcon.addEventListener('click', () => {
  likes++;
  likeCount.textContent = likes;
  console.log('You liked this post!');
});

// Comment Functionality
const commentIcon = document.getElementById('commentIcon');
commentIcon.addEventListener('click', () => {
  const userComment = prompt('Enter your comment:');
  if (userComment) {
    console.log(`Comment added: "${userComment}"`);
    alert(`You commented: "${userComment}"`);
  }
});

// Share Functionality
const shareIcon = document.getElementById('shareIcon');
shareIcon.addEventListener('click', () => {
  alert('This post has been shared!');
  console.log('Post shared!');
});