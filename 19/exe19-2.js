const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const body = document.querySelector('body')
const ol = document.createElement('ol')
body.appendChild(ol)

users.forEach(user => {
    const li = document.createElement('li')
    li.innerText = user.firstName + " " + user.lastName
    li.style.listStyle ="none"
    const dataId = document.createAttribute("data-id")
    dataId.value = `${user.id}`
    li.setAttribute("data-Id",  dataId.value)
    ol.append(li)
})