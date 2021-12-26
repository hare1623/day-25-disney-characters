//Create and Build and HTML element for body

document.body.innerHTML = `<div class="heading-container">
<h1>Disney Characters</h1>
<img class="icon" src="https://yt3.ggpht.com/ytc/AKedOLSOa__u4oFF-g8IiFFmphMc8EqzUWN19AYbeQSfXsE=s900-c-k-c0x00ffffff-no-rj" alt="Disney">
</div>
<div id="mainContainer" class="main-container"></div>
`;

// Accessing api link to get data from it using fetch

const getData = async () => {
  try {
    const data = await fetch("https://api.disneyapi.dev/characters")
    const characters = await data.json();

    mainContainer.innerHTML = "";
    characters.data.forEach(displayData)
  } catch (error) {
    console.log(error);
  }
};

getData();

//Create display method to show the data from api in clean way

const displayData = (obj) => {
  mainContainer.innerHTML += `
<div class="container">
<p class="para blue"> Name:<span>${obj.name}</span></p>
<img class="characterImage" src=${obj.imageUrl} >
</div>`;
};


