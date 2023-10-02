// connect with body element
const body = document.querySelector("body");

//creating menu bar
const nav = document.createElement("nav");
body.appendChild(nav);
body.style.margin = 'auto'
body.style.maxWidth = '80%'
const ol = document.createElement("ol");
nav.appendChild(ol);
//menu items
const menuItems = ["Home", " About us", "Movies", "Contact us"];
const menuClass = document.createAttribute("class");
menuClass.value = "navigationBar";
ol.setAttribute("class", menuClass.value);

menuItems.forEach((menuItem) => {
  const li = document.createElement("li");
  li.innerText = menuItem;
  const itemClass = document.createAttribute("class");
  itemClass.value = "navSection";
  li.setAttribute("class", itemClass.value);
  ol.append(li);
});

// adding an cards - flexed by row
//  card database object
const cards = [
  {
    title: "Fast Five",
    img: {
      src: "https://upload.wikimedia.org/wikipedia/en/0/0c/Fast_Five_poster.jpg",
      alt: "Fast Five Photo",
    },
    Cast: ["Vin Diesel", "Paul Walker", "Dwayne Johnson"],
  },
  {
    title: "Mad Max: Fury Road",
    img: {
      src: "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
      alt: "Mad Max: Fury Road photo",
    },
    Cast: ["Tom Hardy"],
  },
  {
    title: "Ride Along",
    img: {
      src: "https://upload.wikimedia.org/wikipedia/en/d/d8/Ride_Along_poster.jpg",
      alt: "Ride Along photo",
    },
    Cast: ["Ice Cube", "Kevin Hart"],
  },
  {
    title: "Undisputed 3: Redemption",
    img: {
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Undisputed_III_Redemption.jpg/220px-Undisputed_III_Redemption.jpg",
      alt: "Undisputed 3: Redemption photo",
    },
    Cast: ["Scott Adkins", "Mykel Shannon Jenkins"],
  },
];

// building a title with specific style (style as js only)
const mainSection = document.createElement('section')
mainSection.innerHTML = "Movies Cards" 
mainSection.style. marginTop = "100px"
mainSection.style.textAlign="Center"
mainSection.style.fontSize='50px'
body.appendChild(mainSection)

// my card has an img a title (movie name) and list (actors)
cards.forEach((card) => {
  const cardSection = document.createElement('section');
  cardSection.classList = "card";
  cardSection.style.backgroundColor = 'beige'
  body.appendChild(cardSection)
  const img = document.createElement('img')
  img.src=card.img.src
  const movieName = document.createElement('h3')
  movieName.innerText=`${card.title}`
  movieName.style.color = 'steelblue'
  const cast = document.createElement('ul')
  cardSection.append(img , movieName , cast)
  card.Cast.forEach((actors) => {
    const actor = document.createElement('li')
    actor.innerText = actors
    actor.style.color = "steelblue"
    cast.appendChild(actor)
  })
})
