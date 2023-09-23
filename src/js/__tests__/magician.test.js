import Magician from '../magician';

const standardObject = {
  name: 'Маг',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('Проверка создания объекта класса Magician', () => {
  const obj = new Magician('Маг');
  expect(obj).toEqual(standardObject);
});

test('Ошибка передачи типа объекта', () => {
  expect(() => new Magician('Маг', 'WrongType')).toThrow();
});
