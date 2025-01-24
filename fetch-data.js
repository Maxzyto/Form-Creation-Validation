async function fetchUserData(userID) {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (dataContainer) {
      dataContainer.innerHTML = ``;

      const userList = document.createElement("ul");

      data.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });

      dataContainer.appendChild(userList);
    }
  } catch (error) {
    dataContainer.innerHTML = ``;
    dataContainer.textContent = `failed to load user data`;
    console.error("Error fetching user data:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
