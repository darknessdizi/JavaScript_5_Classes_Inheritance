import Bowman from '../bowman';

const standardObject = {
  name: 'Лучник',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('Проверка создания объекта класса Bowman', () => {
  const obj = new Bowman('Лучник');
  expect(obj).toEqual(standardObject);
});
