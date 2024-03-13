Game.customCrate=[
  new Game.Achievement('Impostor','Name yourself <b>Opti</b> <q>please do not impersonate officials.</q>',[17,5]),Game.last.pool="shadow",
]

Game.customChecks=[
  function(){if (name=='opti') Game.Win('Impostor')},
]
