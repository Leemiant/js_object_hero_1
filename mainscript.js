  /*let user = {
    name: "Artyom",
    hp: 10,
    damage: 1
  };
  

if( user.hp!=0){
  
  console.log(user.hp-user.damage)
}*/


  

/*function createHero(args){
    return({
      name: args.name || "Hero",
      rank: args.rank || 300,
      hp: args.hp || 100,
      getDamage: function(damage) {
        this.hp-=damage
      }
      });
                                                                                                                                                                                                                                                          
  }
  valueOf(){ 
    return this._mark 
  } */


  class Hero{ 
    constructor(name,rank,hp){ 
      this._name = name; 
      this.rank = rank; 
      this.hp = hp 
    } 
    randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    valueOf(){ 
      return this.rank 
    }

  }
  let arr = [ 
    s2 = new Hero("Tom",randomInteger(100,500),130),
    s3 = new Hero("Bob",randomInteger(100,500),120),
    s3 = new Hero("Ken",randomInteger(100,500),120),
    s3 = new Hero("Aron",randomInteger(100,500),120),
    s3 = new Hero("Neeko",randomInteger(100,500),120),
    s3 = new Hero("Atrox",randomInteger(100,500),120),
    s3 = new Hero("Jhin",randomInteger(100,500),120),
  ]
////////////////
s1 = new Hero("Artyom", 250,100), 
console.log(arr)
function sort(){
  console.log(
    arr.sort( (a, b) => Math.abs(s1 - a) - Math.abs(s1 - b) )[0]
  );
}
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
/*
  function opponent(){
    function arrayRandElement(arr) {
      let rand = Math.floor(Math.random() * arr.length);
      return arr[rand];
  }
  let opp = arrayRandElement(arr)
  console.log("Ваш соперник: " + opp.name)
  console.log("hp: " +opp.hp)
  console.log("rank: " + opp. rank)
  }

  function start(){ 

    function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

  while(opp.hp!=0 && opp.hp>0 || myhero.hp!=0 && myhero.hp>0){
    opp.getDamage(randomInteger(1, 3))
    myhero.getDamage(randomInteger(1, 3))

    //console.log(`hp ${opp.name}`)
    console.log(`Your hp ${myhero.hp} `)


  }

  /*if(hero.hp==0 && heroTwo.hp){
    console.log(hero.name + ": Умер!")
  }*/