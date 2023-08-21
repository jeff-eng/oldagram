const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        avatarAltText: 'young Vincent van Gogh portrait',
        postImgAltText: 'portrait painting of Vincent van Gogh',
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        avatarAltText: 'Gustave Courbet portrait',
        postImgAltText: 'portrait painting of Gustave Courbet',
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        avatarAltText: 'Joseph Ducreux portrait',
        postImgAltText: 'portrait painting of Joseph Ducreux',
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
];

// Queried elements
const mainEl = document.getElementById('posts');

// Render posts and append to DOM
const renderedArticleEls = posts.map((currentObj, index) => renderPost(currentObj, index));
mainEl.append(...renderedArticleEls);

function renderPost(postObj, index) {
    const article = document.createElement('article');

    article.innerHTML = `
        <header class="post--header">
            <img class="post--avatar" src="${postObj.avatar}" alt="${postObj.avatarAltText}">
            <div><h2 class="post--name">${postObj.name}</h2><p class="post--location">${postObj.location}</p></div>
        </header>
        <img class="post--img" src="${postObj.post}" alt="${postObj.postImgAltText}">
        <footer class="post--footer">
            <ul class="post--buttons">
                <li><img class="post--btn" src="images/icon-heart.png" ondblclick="updateLikeCount(${index})" alt="heart icon for like button" data-index="${index}"></li>
                <li><img class="post--btn" src="images/icon-comment.png" alt="chat bubble icon for comment button"></li>
                <li><img class="post--btn" src="images/icon-dm.png" alt="paper airplane icon for direct message button"></li>
            </ul>
            <p class="post--likes bold-type"><span id="like--span${index}">${postObj.likes}</span> likes</p>
            <p class="post--comment"><span class="post--username bold-type">${postObj.username} </span><span>${postObj.comment}</span></p>
        </footer>
    `;

    return article;
}

function updateLikeCount(index) {
    const currentPost = posts[parseInt(index)];
    
    // Update object's like count and toggle liked state
    currentPost.likes = currentPost.liked ? currentPost.likes -= 1 : currentPost.likes += 1; 
    currentPost.liked = !currentPost.liked;

    // Update the DOM element
    document.getElementById(`like--span${index}`).textContent = currentPost.likes;
}