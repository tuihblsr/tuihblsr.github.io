Game.registerMod("vtyansMod",{
  init:function(){
    Game.registerHook('create',function(){
      new Game.Achievement('Imposter',loc("Name yourself <b>v_tyan</b>.",1)+'<q>Please do not impersonate officials.</q>',[17,5]);Game.last.pool='shadow';
    });
    Game.registerHook('check',function(){
      if (Game.bakeryName=='v_tyan') Game.Win('Imposter');
    });
    Game.registerHook('click',function(){Game.Notify(choose(['A shitty click','A good click.','A solid click.','A mediocre click.','An excellent click!']),'',0,0.5);});
  },
  save:function(){
    
  },
  load:function(){
    
  },
})

