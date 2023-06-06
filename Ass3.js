// able to change the page with nav bar
function navigateTo(route) {
  var contentDivs = document.querySelectorAll('#content > div');
  for (var i = 0; i < contentDivs.length; i++) {
    var div = contentDivs[i];
    if (div.id === route) {
      if (route === 'MealsList') {
        div.style.display = 'flex';
      } else {
        div.style.display = 'block';
      }
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

function createNewDiv(event) {
  event.preventDefault();

  const textarea = document.getElementById('myTextarea');
  const textarea2 = document.getElementById('myTextarea2');
  const select = document.getElementById('mySelect');
  const input = document.getElementById('myInput');
  const select1 = document.getElementById('mySelect1');
  const select2 = document.getElementById('mySelect2');
  const select3 = document.getElementById('mySelect3');

  const text = textarea.value;
  const ingredients = textarea2.value;
  const selectedOption = select.value;
  const inputValue = input.value;
  const sauce1 = select1.value;
  const sauce2 = select2.value;
  const sauce3 = select3.value;

  if (text.trim() !== '') {
    const newDiv = document.createElement('div');
    newDiv.className = 'my-div';
    newDiv.innerHTML = `<span>Humburger Name:${inputValue}</span>
    <br>Introduction:${text}
    <br>Ingredients:${ingredients}
    <br>Bread:${selectedOption}
    <br>Sauce: ${sauce1}, ${sauce2}, ${sauce3}`;
    newDiv.style.transition = 'transform 0.3s ease';
    newDiv.setAttribute('onmouseover', 'enlargeBox(this)');
    newDiv.setAttribute('onmouseout', 'resetBox(this)');

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'DELETE THIS BURGER';
    deleteButton.style.display = 'block';
    deleteButton.style.fontSize = '12px';
    deleteButton.style.borderRadius = '10px';
    deleteButton.style.background = 'none';
    deleteButton.style.cursor = 'pointer';
    deleteButton.style.padding = '5%';
    deleteButton.style.margin = '6% auto 5%';
    deleteButton.style.backgroundColor = 'rgb(252, 144, 83, 0.8)';
    deleteButton.addEventListener('click', function() {
      newDiv.remove();
    });

    // Add transition effect on hover
    deleteButton.style.transition = 'background-color 0.3s ease';
    deleteButton.addEventListener('mouseenter', function() {
      deleteButton.style.backgroundColor = 'rgb(252, 144, 83, 0.2)';
    });
    deleteButton.addEventListener('mouseleave', function() {
      deleteButton.style.backgroundColor = 'rgb(252, 144, 83, 0.8)';
    });

    newDiv.appendChild(deleteButton);

    const mealsList = document.getElementById('MealsList');
    mealsList.appendChild(newDiv); 
  }
}

function enlargeBox(element) {
  element.style.transform = 'scale(1.2)';
}

function resetBox(element) {
  element.style.transform = 'scale(1)';
}