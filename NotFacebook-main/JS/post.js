document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.querySelector(".submit-button");
    const fileInput = document.querySelector("#file-input");
    const textArea = document.querySelector(".input-box");
    const postSection = document.querySelector(".post-profile");

    postButton.addEventListener("click", (event) => {
        event.preventDefault();

        const textContent = textArea.value.trim();
        const imageFile = fileInput.files[0];

        if (!textContent && !imageFile) {
            alert("Please write something or upload an image to post.");
            return;
        }

        if (imageFile) {
        
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result; 
                addPostToDOM(textContent, imageUrl);
            };
            reader.readAsDataURL(imageFile); 
        } else {
            
            addPostToDOM(textContent, null);
        }

        textArea.value = "";
        fileInput.value = "";
    });

    function addPostToDOM(text, imageUrl) {
        const postElement = document.createElement("div");
        postElement.className = "post";

        
        if (text) {
            const textElement = document.createElement("p");
            textElement.className = "post-text";
            textElement.textContent = text;
            postElement.appendChild(textElement);
        }

        if (imageUrl) {
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            imageElement.alt = "Uploaded Image";
            imageElement.className = "post-image";
            postElement.appendChild(imageElement);
        }


        postSection.appendChild(postElement);
    }
});
