import Undead from '../undead';

const standardObject = {
  name: 'Нежить',
  type: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

test('Проверка создания объекта класса Undead', () => {
  const obj = new Undead('Нежить');
  expect(obj).toEqual(standardObject);
});
