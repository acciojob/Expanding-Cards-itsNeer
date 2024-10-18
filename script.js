//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    let arr = [
        { link: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", text: "Explore the world", id: "panel-1" },
        { link: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", text: "Wild Forest", id: "panel-2" },
        { link: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80", text: "Sunny Beach", id: "panel-3" },
        { link: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80", text: "City on Winter", id: "panel-4" },
        { link: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", text: "Mountain Cloud", id: "panel-5" }
    ]

    let container = document.createElement("div")
    container.className = "container"
    document.body.append(container);

    arr.forEach((t, i) => {
        let panel = document.createElement("div")
        panel.classList.add("panel")
        panel.id = t.id
        panel.innerHTML = 
        `
            <img src="${t.link}" alt="">
            <p class="img-text">${t.text}</p>
        `;
        container.append(panel);

        if (i === 0) {
            panel.classList.add("active")
        }

        panel.addEventListener("click", () => {
            removeActive();
            panel.classList.add("active");
            console.log(panel);
        });
        
    });
    
    console.log(document.querySelectorAll(".panel"));
    function removeActive() {
        document.querySelectorAll(".panel").forEach(panel => {
            panel.classList.remove("active");
        });
    }



})