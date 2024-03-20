/*
Game.registerMod("vtyansMod",{});
    this.createAchievements=function(){
        this.achievements = []
        this.achievements.push(new Game.Achievement("Imposter", "Name yourself <b>v_tyan</b>"+'<q>Please do not impersonate officials.</q>',[0,0]));Game.last.pool='shadow'
                
        Game.Achievements['Imposter'].order=100
                LocalizeUpgradesAndAchievs()
            }
            this.checkAchievements=function(){
                name=Game.bakeryName.toLowerCase();
                if (name=='v_tyan') Game.Win('Imposter');
            }
            if(Game.ready) this.createAchievements()
            else Game.registerHook("create", this.createAchievements)
            Game.registerHook("check", this.checkAchievements)
*/

import * as Cppkies from "cppkies"
const prefix = "https://github.com/Cppkies-Team/examples/tree/master/static" // A link to your building's art.
Cppkies.onLoad.push(() => {
    Cppkies.buildingLink = `${prefix}/buildingBigIcon.png` // Building big icons
    Cppkies.iconLink = `${prefix}/buildingIcons.png` // Building normal icons
    new Cppkies.Building(
        "Thinker", // The Name of your building
        "think tank|think tanks|thought about|[X] extra neural pathway|[X] extra neural pathways", // Name of your building in a sentence, and then it's plural, then what boosts your building when a sugar lump is added, then it's plural
        "Generates cookies by thinking really, really hard about them.", // How your building generates cookies
        [0, 0], // The coords for the default icon for your building
        {
            bg: `${prefix}/buildingBg.png`, // The background for your building on the building screen
            pic: `${prefix}/buildingBrain.png`, // The actual building pic on the building screen
            xV: 16, // The amount your building can move left and right on the building screen in pixels
            yV: 64, // The amount your building can move up and down on the building screen in pixels
        },
        Cppkies.DEFAULT_CPS, // Building's CPS
		Cppkies.DEFAULT_ONBUY, // The function to call when your building gets bought
        {
            name: "Brain",
            desc: "The top of your cookie hierarchy",
            icon: [1, 0],
        }, // Your building's data on business day
        ["Brainstorm", "Brain fart"]
    )
})