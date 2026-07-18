const menuList = [
    [
        // HOT DRINKS
        [
            {"name": "Hot Choco", "price": "P50.00"},
            {"name": "Not Available", "price": "Not Available"},
            {"name": "Not Available", "price": "Not Available"},
            {"name": "Not Available", "price": "Not Available"}
        ],
        // BLENDED COFFEE
        [
            {"name": "Java Chip", "price": "P85.00"},
            {"name": "Coffee Jelly", "price": "P85.00"},
            {"name": "Not Available", "price": "Not Available"},
            {"name": "Not Available", "price": "Not Available"}
        ],
        // OVER ICE
        [
            {"name": "Not Available", "price": "Not Available"},
            {"name": "Not Available", "price": "Not Available"},
            {"name": "Not Available", "price": "Not Available"},
            {"name": "Not Available", "price": "Not Available"}
        ],
        // BLENDED CREAM
        [
            {"name": "choco", "price": "P85.00"},
            {"name": "Vanilla", "price": "P85.00"},
            {"name": "Cookies & Cream", "price": "P85.00"},
            {"name": "Not Available", "price": "Not Available"}
        ]
    ],
    [
        // KOREAN TOASTS
        [
            {"name": "Cabbage Sandwich", "price": "P75.00"},
            {"name": "Hotdog & Cheese", "price": "P75.00"},
            {"name": "Ham & Cheese", "price": "P75.00"},
            {"name": "Not Available", "price": "Not Available"}
        ],
        // RICE MEALS
        [
            {"name": "Ham, Egg, and Rice", "price": "P75.00"},
            {"name": "Hotdog, Egg, and Rice", "price": "P75.00"},
            {"name": "Shanghai, Egg, and Rice", "price": "P75.00"},
            {"name": "Nuggets, Egg, and Rice", "price": "P75.00"}
        ],
        // FRENCH FRIES
        [
            {"name": "Fries", "price": "P60.00"},
            {"name": "Not Available", "price": "Not Available"},
            {"name": "Not Available", "price": "Not Available"},
            {"name": "Not Available", "price": "Not Available"}
        ],
        // NACHOS
        [
            {"name": "Nachos", "price": "P75.00"},
            {"name": "Nachos 2", "price": "P85.00"},
            {"name": "Not Available", "price": "Not Available"},
            {"name": "Not Available", "price": "Not Available"}
        ]
    ]
];

function getImagePath(name) {
    if (name === "Java Chip") return "../img/firstmenu/java chip.png";
    if (name === "Vanilla") return "../img/firstmenu/vanilla.png";
    return "../img/firstmenu/" + name + ".png";
}

function renderMenu(type, contentNum) {
    const container = type === 0 
        ? document.getElementById("drinks-container") 
        : document.getElementById("foods-container");
    
    if (!container) return;
    
    container.innerHTML = "";
    
    const categoryItems = menuList[type][contentNum];
    const availableItems = categoryItems.filter(item => item.name !== "Not Available");
    
    if (availableItems.length === 0) {
        container.innerHTML = `
            <div class="no-items-message w-100 text-center py-5">
                <p class="h5 text-muted" style="color: whitesmoke !important;">More items coming soon!</p>
            </div>
        `;
        return;
    }
    
    availableItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "card light-menu-card-background";
        
        // Handle persistent light mode card styling
        if (localStorage.getItem("theme") === "light") {
            card.classList.add("light-mode-menu-card-background");
        }
        
        card.innerHTML = `
            <img class="card-img-top ${type === 0 ? 'first-menu-img' : 'second-menu-img'}" src="${getImagePath(item.name)}" alt="${item.name}">
            <div class="fade-in-slide-up-no-forwards price font-price-family ${type === 0 ? 'price-first' : 'price-second'}">${item.price}</div>
            <div class="card-header text-center">
                <p class="card-text ${type === 0 ? 'first-menu-text' : 'second-menu-text'}">${item.name}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function highlightTab(type, contentNum) {
    const sectionClass = type === 0 ? '.drinks' : '.foods';
    const links = document.querySelectorAll(`${sectionClass} .menu-link`);
    links.forEach((link, idx) => {
        if (idx === contentNum) {
            link.classList.add('active-tab');
        } else {
            link.classList.remove('active-tab');
        }
    });
}

function changeMenu(type, contentNum) {
    renderMenu(type, contentNum);
    highlightTab(type, contentNum);
}

// Initial render when the page loads
document.addEventListener("DOMContentLoaded", () => {
    renderMenu(0, 0);
    renderMenu(1, 0);
    highlightTab(0, 0);
    highlightTab(1, 0);
});