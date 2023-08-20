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

const renderedArticleEls = posts.map((currentObj, index) => renderPost(currentObj, index));
mainEl.append(...renderedArticleEls);

// Meet FunctionZilla, "King of the Functions"
function renderPost(postObj, index) {
    // Create elements
    const article = document.createElement('article');
    const postHeader = document.createElement('header');
    const avatarImg = document.createElement('img');
    const userDetailsDiv = document.createElement('div');
    const postNameHeading = document.createElement('h2');
    const postLocationParagraph = document.createElement('p');
    const postImg = document.createElement('img');
    const postFooter = document.createElement('footer');
    const buttonsList = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const heartIcon = document.createElement('img');
    const commentIcon = document.createElement('img');
    const directMessageIcon = document.createElement('img');
    const likesParagraph = document.createElement('p');
    const commentParagraph = document.createElement('p');
    const likesSpan = document.createElement('span');
    const usernameSpan = document.createElement('span');
    const postTextSpan = document.createElement('span');

    // Set classes
    postHeader.classList.add('post--header');
    avatarImg.classList.add('post--avatar');
    postNameHeading.classList.add('post--name');
    postImg.classList.add('post--img');
    postFooter.classList.add('post--footer');
    buttonsList.classList.add('post--buttons');
    heartIcon.classList.add('post--btn');
    commentIcon.classList.add('post--btn');
    directMessageIcon.classList.add('post--btn');
    postLocationParagraph.classList.add('post--location');
    likesParagraph.classList.add('post--likes', 'bold-type');
    commentParagraph.classList.add('post--comment');
    usernameSpan.classList.add('post--username', 'bold-type');
    
    // Set attributes
    avatarImg.setAttribute('src', `${postObj.avatar}`);
    avatarImg.setAttribute('alt', `${postObj.avatarAltText}`);
    postImg.setAttribute('src', `${postObj.post}`);
    postImg.setAttribute('alt', `${postObj.postImgAltText}`);
    heartIcon.setAttribute('src', 'images/icon-heart.png');
    heartIcon.setAttribute('alt', 'heart icon for like button');
    commentIcon.setAttribute('src', 'images/icon-comment.png');
    commentIcon.setAttribute('alt', 'chat bubble icon for comment button');
    directMessageIcon.setAttribute('src', 'images/icon-dm.png');
    directMessageIcon.setAttribute('alt', 'paper airplane icon for direct message button');
    heartIcon.setAttribute('data-index', index);
    likesSpan.setAttribute('id', `like--span${index}`);

    // Populate elements with object data
    postNameHeading.textContent = postObj.name;
    postLocationParagraph.textContent = postObj.location;
    likesSpan.textContent = postObj.likes;
    usernameSpan.textContent = `${postObj.username} `;
    postTextSpan.textContent = postObj.comment;
    
    // Event listener on the heart icon
    heartIcon.addEventListener('dblclick', () => {
        updateLikeCount(index);
    });
    
    likesParagraph.append(likesSpan);
    likesParagraph.insertAdjacentHTML('beforeend', ' likes'); 
    
    li1.append(heartIcon);
    li2.append(commentIcon);
    li3.append(directMessageIcon);
    buttonsList.append(li1, li2, li3);
    commentParagraph.append(usernameSpan, postTextSpan);
    userDetailsDiv.append(postNameHeading, postLocationParagraph);
    postHeader.append(avatarImg, userDetailsDiv);   
    postFooter.append(buttonsList, likesParagraph, commentParagraph);
    article.append(postHeader, postImg, postFooter);

    console.log(postObj.avatarAltText);

    return article;
}

function updateLikeCount(index) {
    const currentPost = posts[index];
    
    // Update object's like count and toggle liked state
    currentPost.likes = currentPost.liked ? currentPost.likes -= 1 : currentPost.likes += 1; 
    currentPost.liked = !currentPost.liked;

    // Update the DOM element
    document.getElementById(`like--span${index}`).textContent = currentPost.likes;
}