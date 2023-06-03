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

// const AddNewItem = document.getElementById("AddNewItem")
// const MealsList = document.getElementById("MealsList")

// var mealsList = [];

// function addMeal(name, description, ingredients, bread, sauce1, sauce2, sauce3) {
//   let meal = {
//     name,
//     description,
//     id: Date.now(),
//     date: new Date().toISOString(),
//     ingredients,
//     bread,
//     sauce1,
//     sauce2,
//     sauce3
//   }
//   MealsList.push(meal);
//   displayTask(meal);
// }

// AddNewItem.addEventListener("submit", function(event) {
//   event.preventDefault();
//   addMeal{
//     AddNewItem.elements.name.value;
//     AddNewItem.elements.description.value;
//     AddNewItem.elements.ingredients.value;
//     AddNewItem.elements.bread.value;
//     AddNewItem.elements.sauce1.value;
//     AddNewItem.elements.sauce2.value;
//     AddNewItem.elements.sauce3.value
//   }
// })

// function displayMeal(meal) {
//   let item = document.createElement("div");
//   item.setAttribute("data-id", meal.id);
//   item.innerHTML =
//     `<p><strong>${meal.name}</strong><br>${meal.description}</p>`;
//   MealsList.appendChild(item);

//   AddNewItem.reset();
// }