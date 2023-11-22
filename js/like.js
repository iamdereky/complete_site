let likeCount1 = 0, likeCount2 = 0, likeCount3 = 0, likeCount4 = 0, likeCount5 = 0;
let likeCounts = [likeCount1, likeCount2, likeCount3, likeCount4, likeCount5];
let isLiked1 = false, isLiked2 = false, isLiked3 = false, isLiked4 = false, isLiked5 = false;
let isLiked = [isLiked1, isLiked2, isLiked3, isLiked4, isLiked5];

function toggleLike(index) {
    // Toggle like status
    isLiked[index] = !isLiked[index];

    // Update like count and button text
    likeCounts[index] = isLiked[index] ? likeCounts[index] + 1 : likeCounts[index] - 1;
    document.getElementById('likeCount' + (index + 1)).textContent = likeCounts[index];
    document.getElementById('likeButton' + (index + 1)).textContent = isLiked[index] ? 'Unlike' : 'Like';
    document.getElementById('likeButton' + (index + 1)).classList.toggle("like-animation");
}
