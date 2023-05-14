function main() {
  const postsList = async () => {
    const { default: responseJson } = await import("./../DATA.json", {
      assert: { type: "json" },
    });
    renderAllPostsList(responseJson.restaurants);
  };


  const renderAllPostsList = (listfood) => {
    const postsItemElement = document.querySelector("#postsItem");

    postsItemElement.innerHTML = "";

    listfood.forEach((food) => {
      postsItemElement.innerHTML +=
      `<div href="#" class="card">
        <div class="card-image">
            <img src="${food.pictureId}" alt="${food.name}">
            <p tabindex="0" class="card-city">${food.city}</p>
            <p tabindex="0" class="card-rating" aria-label="food rating ${food.rating}"> ${food.rating} </p>
        </div>
        <div class="card-description">
            <h3 tabindex="0" class="card-title">${food.name}</h3>
            <p tabindex="0" class="description">${food.description}</p>
        </div>
  </div>
  `;
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    postsList();
  });
}

export default main;
