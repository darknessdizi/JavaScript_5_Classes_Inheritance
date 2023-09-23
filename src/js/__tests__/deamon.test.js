import Daemon from '../daemon';

const standardObject = {
  name: 'Демон',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('Проверка создания объекта класса Daemon', () => {
  const obj = new Daemon('Демон');
  expect(obj).toEqual(standardObject);
});

test('Ошибка передачи типа объекта', () => {
  expect(() => new Daemon('Демон', 'WrongType')).toThrow();
});
