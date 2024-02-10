function addPost() {
    var postContent = document.getElementById("post-content").value;
    var feedPost = document.getElementById("feed-post");

    var newPost = document.createElement("div");
    newPost.className = "post";
    newPost.innerHTML = '<img src="assets/profile_image.png" alt="profile-pic">' +
        '<p id="username">Username</p>' +
        '<p id="userId">User Id</p>' +
        '<br>' +
        '<p class="post-text">' + postContent + '</p>' +
        '<div class="actions">' +
        '<img src="assets/heart.png" alt="" class="action-icons heart" onmouseover="changeToFilledHeart(this)" onmouseout="changeToOriginalHeart(this)" onclick="toggleRedHeart(this)">' +
        '<img src="assets/comment.png" alt="" class="action-icons comment" onclick="addComment(this)">' +
        '<img src="assets/delete.png" alt="" class="delete-btn" onclick="showDeleteConfirmation(this.parentNode.parentNode)">' +
        '</div>';

    feedPost.insertBefore(newPost, feedPost.firstChild);
    document.getElementById("post-content").value = "";
    updateCharacterCount();
}

function addComment(commentButton) {
    var commentText = prompt("Enter your comment:");
    if (commentText) {
        var parentPost = commentButton.parentNode.parentNode;

        var newComment = document.createElement("div");
        newComment.className = "post comment";
        newComment.innerHTML = '<img src="assets/profile_image.png" alt="profile-pic">' +
            '<p id="username">Username</p>' +
            '<p id="userId">User Id</p>' +
            '<br>' +
            '<p class="post-text">' + commentText + '</p>' +
            '<div class="actions">' +
            '<img src="assets/heart.png" alt="" class="action-icons heart" onmouseover="changeToFilledHeart(this)" onmouseout="changeToOriginalHeart(this)" onclick="toggleRedHeart(this)">' +
            '<img src="assets/comment.png" alt="" class="action-icons comment" onclick="addComment(this)">' +
            '<img src="assets/delete.png" alt="" class="delete-btn" onclick="showDeleteConfirmation(this.parentNode.parentNode)">' +
            '</div>';

        newComment.style.backgroundColor = "#f5f5f5";
        newComment.style.marginLeft = "20px";

        parentPost.parentNode.insertBefore(newComment, parentPost.nextSibling);
    }
}

function showDeleteConfirmation(postElement) {
    var modal = document.getElementById("deleteModal");
    modal.style.display = "block";
    modal.postElement = postElement;
}

function hideDeleteConfirmation() {
    var modal = document.getElementById("deleteModal");
    modal.style.display = "none";
}

function deletePost() {
    var modal = document.getElementById("deleteModal");
    modal.style.display = "none";
    modal.postElement.remove();
}

function toggleHeart(heartIcon) {
    heartIcon.classList.toggle("clicked");
    if (heartIcon.classList.contains("clicked")) {
        heartIcon.src = "assets/state_clicked.png";
    } else {
        heartIcon.src = "assets/heart.png";
    }
}

function changeToFilledHeart(heartIcon) {
    if (!heartIcon.classList.contains("clicked")) {
        heartIcon.src = "assets/state_clicked.png";
    }
}

function changeToOriginalHeart(heartIcon) {
    if (!heartIcon.classList.contains("clicked")) {
        heartIcon.src = "assets/heart.png";
    }
}

function updateCharacterCount() {
    var postContent = document.getElementById("post-content").value;
    if (postContent.length > 100) {
        alert("Post content cannot exceed 100 characters");
        document.getElementById("post-content").value = postContent.substring(0, 100);
        postContent = document.getElementById("post-content").value;
    }
    var characterCount = document.getElementById("character-count");
    characterCount.textContent = postContent.length + " characters";
}
