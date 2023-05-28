// able to change the page with nav bar
function navigateTo(route) {
    var contentDivs = document.querySelectorAll('#content > div');
    for (var i = 0; i < contentDivs.length; i++) {
        var div = contentDivs[i];
        if (div.id === route) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    }
}

// upload image with preview
function previewImage(event) {
    const imageUpload = event.target;
    const imagePreview = document.getElementById('imagePreview');
  
    if (imageUpload.files && imageUpload.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const image = new Image();
        image.src = e.target.result;
        image.onload = function() {
          const parentWidth = imagePreview.offsetWidth;
          const parentHeight = imagePreview.offsetHeight;
          const imageRatio = this.width / this.height;
          const parentRatio = parentWidth / parentHeight;
  
          let newWidth, newHeight;
          let offsetX = 0;
          let offsetY = 0;
  
          if (parentRatio > imageRatio) {
            newHeight = parentHeight;
            newWidth = newHeight * imageRatio;
            offsetX = (parentWidth - newWidth) / 2;
          } else {
            newWidth = parentWidth;
            newHeight = newWidth / imageRatio;
            offsetY = (parentHeight - newHeight) / 2;
          }
  
          image.style.width = `${newWidth}px`;
          image.style.height = `${newHeight}px`;
          image.style.marginLeft = `${offsetX}px`;
          image.style.marginTop = `${offsetY}px`;
          image.style.objectFit = 'cover';
  
          imagePreview.innerHTML = '';
          imagePreview.appendChild(image);
        };
      };
      reader.readAsDataURL(imageUpload.files[0]);
    }
}

// Create new div
function createNewDiv(event) {
    event.preventDefault();
  
    const textarea = document.getElementById('myTextarea');
    const select = document.getElementById('mySelect');
    const input = document.getElementById('myInput');
    const text = textarea.value;
    const selectedOption = select.value;
    const inputValue = input.value;
    const imageUpload = document.getElementById('imageUpload');
    const imageFile = imageUpload.files[0]; // The img file user uploaded

    // The img that users uploaded
    if (text.trim() !== '') {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `<span>${inputValue}</span><br>${text}`;
      newDiv.style.border = '1px solid black';

      const mealsList = document.getElementById('MealsList');
      mealsList.appendChild(newDiv);
    }
    
}
