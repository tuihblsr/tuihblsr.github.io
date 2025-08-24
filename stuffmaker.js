// Elements
const console_element = document.getElementById("console");

const credits_display = document.getElementById("credits");
const stuff_display = document.getElementById("stuff");
const junk_display = document.getElementById("junk");

const scavenge_btn = document.getElementById("scavenge");
const buy_thingy_btn = document.getElementById("buy-thingy");

// Game Loop
let last_time = null;
let total_time = 0;
setInterval(function gameLoop() {
    const current_time = performance.now();
    if (last_time == null) {
        last_time = current_time;
    }
    const delta_time = current_time - last_time;
    total_time += delta_time;
    last_time = current_time;
    updateMyGame(delta_time, total_time);
}, 1000 / 60); // 60 frames per second (16.67 milliseconds)

// Game Info & Updating
const state = {
    credits: { amount: 0, total: 0 },
    stuff: { amount: 0, total: 0 },
    junk: { amount: 0, total: 0 },
    producers: {
        thingy: {
            name: "Thingy",
            cost: 10,
            base_sps: 0.0001, // 0.1 per second,
            multipliers: 1,
            count: 0
        },
        scavenge_thingy: {
            name: "Scavenger Thingy",
            cost: 5,
            base_sps: 0.0001,
            multipliers: 1,
            count: 0
        }
    }
}
function updateMyGame(delta_time, total_time) {
    state.stuff.amount += ((state.producers.thingy.base_sps * state.producers.thingy.multipliers) * state.producers.thingy.count) * delta_time;
    state.junk.amount += ((state.producers.scavenge_thingy.base_sps * state.producers.scavenge_thingy.multipliers) * state.producers.scavenge_thingy.count) * delta_time;
    updateUI();
}

// Utility
function updateUI() {
    credits_display.textContent = "$" + state.credits.amount.toFixed(2);
    stuff_display.textContent = state.stuff.amount.toFixed(2);
    junk_display.textContent = state.junk.amount;
    buy_thingy_btn.disabled = state.credits.amount < state.producers.thingy.cost;
    sell_junk_btn.disabled = state.junk.amount <= 0;
    sell_stuff_btn.disabled = state.stuff.amount <= 0;
}
function logToConsole(message) {
    const message_element = document.createElement("p");
    message_element.textContent = message
    console_element.appendChild(message_element);
    console_element.scrollTop = console_element.scrollHeight;
    // if (console_element.children.length > 50) {
    //     console_element.removeChild(console_element.firstChild);
    // }
}
function capitalize(word) {
    return word.charAt(0),toUpperCase() + string.slice(1);
}
window.addEventListener("load", () => {
    logToConsole("Welcome to Stuff Maker!")
});

// Right-click to sell
document.querySelectorAll(".resource-item").forEach(item => {
    item.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        const type = item.getAttribute("data-type");
        if (type === "stuff" && state.stuff.amount > 0) {
            const stuff_to_sell = state.stuff.amount;
            const earnings = stuff_to_sell * 10;
            state.credits.amount += earnings;
            state.stuff.amount = 0;
            logToConsole("You sold some stuff for $" + earning.toFixed(2) + "!");
        } else if (type === "junk" && state.junk.amount > 0) {
            const junk_to_sell = state.junk.amount;
            const earnings = junk_to_sell * 2;
            state.credits.amount += earnings;
            state.junk.amount = 0;
            logToConsole("You sold some junk for $" + earnings.toFixed(2) + "!");
        }
    });
});

// Buttons
scavenge_btn.addEventListener("click", () => {
    const chance = [
        { item: "nothing", weight: 10 },
        { item: "junk", weight: 5 },
        { item: "credits", weight: 5 },
    ]
    const total_weight = chance.reduce((sum, entry) => sum + entry.weight, 0);
    const random_number = Math.random() * total_weight;
    let cumulative_weight = 0;
    const found_item = chance.find(({ weight }) => {
        cumulative_weight += weight;
        return random_number < cumulative_weight;
    })?.item;
    if (found_item === "junk") {
        state.junk.amount++;
        logToConsole("You found a piece of junk! It'll fetch a few credits.");
    } else if (found_item === "credits") {
        state.credits.amount += (Math.random() * 5) + 1;
        logToConsole("You found a wad of cash! You now have $" + state.credits.amount.toFixed(2) + ".");
    } else {
        logToConsole("You scavenge around but find nothing of value.");
    }
});
buy_thingy_btn.addEventListener("click", () => {
    if (state.credits.amount >= state.producers.thingy.cost) {
        state.credits.amount -= state.producers.thingy.cost;
        state.producers.thingy.count++;
        state.producers.thingy.cost = Math.ceil(state.producers.thingy.cost * 1.15);
        buy_thingy_btn.textContent = "Buy a Thingy (Cost: $" + state.producers.thingy.cost + " ) - You own: " + state.producers.thingy.count;
        logToConsole("A new Thingy arrives in shrinkwrap. Awwww it looks so cute!");
    }
});
