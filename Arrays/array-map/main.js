const destinations = [
  {
    name: "Temeri Jant",
    region: "Saloum",
    country: "Senegal",
    address: "3 Boulevard des Palmiers, Dakar, Senegal",
    phone: "221775554655",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
    imgUrl: "https://source.unsplash.com/2gOxKj594nM/600x400",
  },
  {
    name: "The Golden Thread",
    region: "California",
    country: "USA",
    address: "5 Maple Street, Los Angeles, CA, 90000",
    phone: "2125552345",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
    imgUrl: "https://source.unsplash.com/UBe-M4bBxjw/600x400",
  },
  {
    name: "Sine Sine",
    region: "Florida",
    country: "USA",
    address: "3669 Elm Street, Miami, 30000",
    phone: "7075559087",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
    imgUrl: "https://source.unsplash.com/RDnYlufMFAw/600x400",
  },
  {
    name: "Petites Caraïbes",
    region: "Praia",
    country: "Cap Vert",
    address: "1 Kings Place, Atlanta, GA, 30000",
    phone: "6785553125",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
    imgUrl: "https://source.unsplash.com/O5rFo-cJu94/600x400",
  },
  {
    name: "Dragon Shower",
    region: "Kedougou",
    country: "Senegal",
    address: "3 Boulevard des Palmiers, Kedougou, Senegal",
    phone: "221775554655",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
    imgUrl: "https://source.unsplash.com/pHANr-CpbYM/600x400",
  },
  {
    name: "The 3 Queens",
    region: "California",
    country: "USA",
    address: "5 Maple Street, Los Angeles, CA, 90000",
    phone: "2125552345",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
    imgUrl: "https://source.unsplash.com/_A7H-ujstEc/600x400",
  },
  {
    name: "Seljalandsfoss",
    region: "South Coast",
    country: "Iceland",
    address: "3669 Great Views, Seljalandsfoss Waterfall, Iceland",
    phone: "7075559087",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
    imgUrl: "https://source.unsplash.com/zNN6ubHmruI/600x400",
  },
  {
    name: "Tuxedo Beach",
    region: "Cape Town",
    country: "South Africa",
    address: "1 Mandela Blvd, Cape Town, South Africa",
    phone: "6785553125",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipis. Integer lipsum  sit amet",
    imgUrl: "https://source.unsplash.com/EjW1VKoaHMs/600x400",
  },
];

const cardContainer = document.querySelector('#cards')
const loader = document.createElement('img')

const newList = destinations.map(destination => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = `
    <figure>
      <img
        class="card-img"
        src="${destination.imgUrl}"
        alt="${destination.name}"
      />
    </figure>
    <h3 class="card-title">${destination.name}</h3>
    <p class="card-label">${destination.about}</p>
  `
  return card
})

window.onload = () => {
  loader.src = "/spinner.gif"
  cardContainer.appendChild(loader)

  // simulate slow connexion 😁️
  setTimeout(() => {
    cardContainer.removeChild(loader)
    newList.forEach(el => cardContainer.appendChild(el))
  }, 3000)
}

