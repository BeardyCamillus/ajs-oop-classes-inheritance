import Bowman from '../bowman';
import Character from '../character';

test('Создание персонажа с именем меньше 2 символов', () => {
  expect(() => {
    const character = new Bowman('A');
    return character;
  }).toThrow(new Error('Имя должно содержать минимум 2 символа!'));
});

test('Создание персонажа с именем больше 10 символов', () => {
    expect(() => {
      const character = new Bowman('Abcdefghijklm');
      return character;
    }).toThrow(new Error('Имя может содержать максимум 10 символов!'));
  });

test('Создание персонажа с неверным типом', () => {
  expect(() => {
    const character = new Character('Test', 'Orc');
    return character;
  }).toThrow(new Error('Неверный тип персонажа!'));
});