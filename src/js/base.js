export default class Character {
  constructor(name, type) {
    this.nameVerification(name);
    this.typeCheck(type);
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  nameVerification(name) {
    const clearName = name.trim();
    if ((clearName.length < 2) || (clearName.length > 10)) {
      throw new Error(`Некорректное имя - "${name}"`);
    }
    this.name = clearName;
  }

  typeCheck(type) {
    if (!Character.typeUsers.includes(type)) {
      throw new Error(`Некорректный тип пользователя - "${type}"`);
    }
    this.type = type;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack += (20 * this.attack) / 100;
    this.defence += (20 * this.defence) / 100;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

Character.typeUsers = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];
