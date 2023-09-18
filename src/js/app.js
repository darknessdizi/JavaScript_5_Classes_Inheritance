import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Daemon from './daemon';
import Undead from './undead';
import Zombie from './zombie';

const listName = [
  { name: 'Liza', ClassName: Bowman },
  { name: 'Dizi', ClassName: Swordsman },
  { name: 'Jane', ClassName: Magician },
  { name: 'Nika', ClassName: Daemon },
  { name: 'Mila', ClassName: Undead },
  { name: 'Ariela', ClassName: Zombie },
  { name: 'Wu', ClassName: Swordsman },
  { name: 'Elizabet Smit', ClassName: Undead },
  { name: 'L', ClassName: Magician },
];

for (let i = 0; i < listName.length; i += 1) {
  try {
    const obj = new listName[i].ClassName(listName[i].name);
    console.log(obj);
  } catch (error) {
    if (error.name === 'Error') {
      console.log(error.message);
    } else {
      throw error;
    }
  }
}
