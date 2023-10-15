class pokemon {
  constructor(name,attack, défense,hp,luck) {
     this.name = name
     this.attack = attack
     this.défense = défense
     this.hp = hp
     this.luck = luck
  }
}

let ronflex = new pokemon("ronflex", 12,31,32,43)
let leviator = new pokemon("leviator",32,34,47,73)
ronflex.attackpokemon(leviator)

while (ronflex.hp > 0 && leviator.hp>0) {
  moustillon.attackpokemon(leviator)
 if (ronflex.hp<=0) {console.log("ronflex a perdu le combat, il est K.O")
break
}
leviator.attackpokemon(ronflex)
if (ronflex.hp <= 0) {
  console.log("moustillon a perdu le combat, il est K.O")
  break;
}
}
