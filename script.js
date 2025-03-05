document.addEventListener("DOMContentLoaded", () => {
    fetch("items.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("items-container");
            data.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("item");
                div.innerHTML = `
                    <h2>${item.name}</h2>
                    <img src="${item.image}" alt="${item.name}">
                    <p>${item.description}</p>
                `;
                container.appendChild(div);
            });
        })
        .catch(error => console.error("Error loading items:", error));
});
