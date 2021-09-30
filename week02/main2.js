const newParagraph = document.createElement('p');
newParagraph.innerText = 'Added with Javascript!';
document.body.appendChild(newParagraph);

const newImage = document.createElement('img');
newImage.setAttribute('src', 'path/to/image.jpg');
newImage.setAttribute('alt', 'Description of image');
document.body.appendChild(newImage);

const newDiv = document.createElement('div');
newDiv.innerHTML = '<ul><li>One</li><li>Two</li><li>Three</li></ul>';
document.body.appendChild(newDiv);

const cse121b = document.createElement('section');
cse121b.innerHTML = '<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>';
document.body.appendChild(cse121b);