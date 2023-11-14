const url = "https://api.github.com/users";
const resultUsers = document.getElementById('result')

const searchUser = document.getElementById("user-input");
const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", () => {
  fetchUsersData(searchUser.value);
});
const fetchUsersData = async (input) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch data. status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    showUsers(data.filter((user) => user.login.includes(input)));
  } catch (error) {
    console.log(error);
  }
};


function showUsers(users) {
    resultUsers.innerText = ""
  if(users.length > 0){
  users.map(user => {
    const userCard = document.createElement("section")
    userCard.className = 'card'

    const userImg = document.createElement("img");
    const userNameLink = document.createElement("a");
    const userName = document.createElement("h2");
    const userId = document.createElement("section");

    userImg.src = user.avatar_url;
    userImg.alt = userName + "photo"

    userNameLink.href = user.html_url
    userNameLink.target = true
    userName.innerText = user.login
    userId.innerText = user.id

    userNameLink.appendChild(userName)
    userCard.append(userImg , userNameLink , userId)
    resultUsers.append(userCard)
    searchUser.value = ""
  });
}else{
    const error = document.createElement("h1")
    error.innerText = "username is not found!"     
    resultUsers.append(error)
  }
}
