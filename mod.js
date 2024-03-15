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
