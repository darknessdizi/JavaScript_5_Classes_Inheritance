import Zombie from '../zombie';

const standardObject = {
  name: 'Зомби',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Проверка создания объекта класса Zombie', () => {
  const obj = new Zombie('Зомби');
  expect(obj).toEqual(standardObject);
});
