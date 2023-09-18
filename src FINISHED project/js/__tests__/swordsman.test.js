import Swordsman from '../swordsman';

const standardObject = {
  name: 'Шпага',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

test('Проверка создания объекта класса Swordsman', () => {
  const obj = new Swordsman('Шпага');
  expect(obj).toEqual(standardObject);
});
