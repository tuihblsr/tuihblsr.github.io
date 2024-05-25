import { E } from "emath.js";
import { Game } from "emath.js/game";

// For CDN usage:
// const { E, Game } = eMath; 

// Initialize game
const coinGame = new Game();

// Create a new currency with upgrades
const coins = coinGame.addCurrency("coins", [
    {
        id: "upg1Coins", // Unique ID
        cost: level => level.mul(10), // Cost of 10 times the level
        maxLevel: E(1000),
        effect: (level, upgradeContext, currencyContext) => {
            // `currencyContext` is the context of the currency (coins in this case)

            // Access the `boost` object to add a boost
            currencyContext.boost.setBoost({
                id: "boostUpg1Coins", // Unique ID of the boost
                // Effect of the boost, which is additive, 11 times the level of the upgrade
                value: n => n.plus(level.mul(11)).sub(1),
            });
        },
    },
    // Add more upgrades here ...
]);

// Initialize / Load game
coinGame.init();
coinGame.dataManager.loadData();

// Gain coins
coins.static.gain();

// Buy (max) upgrades
coins.static.buyUpgrade("upg1Coins");

// Hotkeys
coinGame.keyManager.addKey([
    {
        id: "gainCoins",
        name: "Gain Coins",
        key: "g",
        onDownContinuous: () => coins.static.gain(),
    },
    {
        id: "buyUpgrades",
        name: "Buy Upgrades",
        key: "b",
        onDownContinuous: () => coins.static.buyUpgrade("upg1Coins"),
    },
]);

// Saving and Loading
window.addEventListener("beforeunload", () => {
    coinGame.dataManager.saveData();
});
coinGame.eventManager.setEvent("autoSave", "interval", 30000, () => {
    coinGame.dataManager.saveData();
    console.log("Auto Saved!");
});
