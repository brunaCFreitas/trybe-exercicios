const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorne o dano do Dragão, com o mínimo de 15 e o máximo no valor da propriedade strength

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);
  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return dragonDmg;
};

// Crie uma função que retorne o dano causado por Warrior, o dano será um número aleatório entre o valor do atributo strength (Min) e o valor de strength * weaponDmg (max)

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
  return warriorDamage;
};