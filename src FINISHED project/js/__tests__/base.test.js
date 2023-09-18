import Character from '../base';
import Bowman from '../bowman';

// Тест на попытку создания объектов родительского класса Character
test('Создание объекта родительского класса Character', () => {
  expect(() => new Character('Parent', 50, 50)).toThrow();
});

// Тест на создание объектов с разной длиной имени
const listName = ['N', 'Na', ' N ', 'Nam', 'Name', 'Full  Name', 'LoooongName', '     Na    '];
const testName = test.each(listName);
testName('Создание объекта Bowman с именем %s', (name) => {
  const clearName = name.trim();
  if ((clearName.length >= 2) && (clearName.length <= 10)) {
    const user = new Bowman(clearName);
    expect(user).toBeInstanceOf(Bowman);
  } else {
    expect(() => new Bowman(clearName)).toThrow();
  }
});

// Проверка метода levelUp на живом объекте
test('Живой объект повышает уровень', () => {
  const user = new Bowman('Лучник');
  user.health = 80;
  user.levelUp();
  expect(user).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

// Проверка метода levelUp на мертвом объекте
test('Мертвый объект повышает уровень', () => {
  const user = new Bowman('Лучник');
  user.health = 0;
  expect(() => user.levelUp()).toThrow();
});

// Проверка метода damage
test('Объект получает урон', () => {
  const user = new Bowman('Лучник');
  user.damage(50);
  expect(user).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 62.5,
    level: 1,
    attack: 25,
    defence: 25,
  });
  user.damage(1000);
  expect(user.health).toBe(0);
});
