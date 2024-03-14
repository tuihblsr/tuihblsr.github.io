Game.registerMod("vtyansMod",{
  init:function(){
    Game.registerHook('create',function(){});
    Game.registerHook('click',function(){Game.Notify(choose(['A good click.','A solid click.','A mediocre click.','An excellent click!']),'',0,0.5);});
  },
  save:function(){
    
  },
  load:function(){
    
  },
})

