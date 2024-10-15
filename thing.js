G.AddData({
name:'v_tyans mod',
author:'v_tyan',
desc:'Adds random stuff to the game',
engineVersion:1,
manifest:'modManifest.js',
requires:['Default dataset*'],
sheets:{'imageSheet':'https://file.garden/Xbm-ilapeDSxWf1b/magixmod.png'},
func:function()
{
  new G.Res({
    name:'chocolate',
    desc:'[chocolate] is loved by many all around the world.',
    icon:[0,0,'imageSheet'],
    turnToByContext:{'eat':{'health':0.01,'happiness':0.08},'decay':{'spoiled food':0.9}},
    partOf:'food',
    category:'food',
  });

  G.getDict('grass').res['gather']['chocolate']=3;
}
});
