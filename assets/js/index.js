const accountManagerButtons = document.querySelectorAll('.ac-button');
const formSubmitButton = document.querySelector('.create-btn');

for (let i = 0; i < accountManagerButtons.length; i++) {
  accountManagerButtons[i].addEventListener('click', function() {
    console.log(accountManagerButtons[i].innerHTML);
  });
}

async function createImage(image, title, description) {
  const response = await fetch('https://api.tropii.xyz/create-images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "image": image,
      "title": title,
      "description": description,
    })
  });

  const data = await response.json();
  console.log(data);
}

async function uploadReview(imageId, review) {
  const response = await fetch('https://api.tropii.xyz/upload-review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "imageId": imageId,
      "review": review,
    })
  });

  const data = await response.json();
  console.log(data);
}

async function getImages() {
  const response = await fetch('https://api.tropii.xyz/get-images', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();
  console.log(data);
}

formSubmitButton.addEventListener('click', function() {
  const image = document.querySelector('.image').value;
  const title = document.querySelector('.title').value;
  const description = document.querySelector('.description').value;
  
  createImage(image, title, description);
});