/**

 * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObject - объект с примитивными значениями
 * @param {Object<string | number>} secondObject - объект с примитивными значениями
 * @returns {Object}
 */

export const intersection = (firstObject, secondObject) => {
  // throw new Error(`Напишите здесь свое решение ${firstObject}, ${secondObject}`);
  const firstObjEntries = Object.entries(firstObject).map((el) => el.join(""));
  const secondObjEntries = Object.entries(secondObject).map((el) =>
    el.join("")
  );
  const common = firstObjEntries
    .filter((item, index) => secondObjEntries.indexOf(item) === index)
    .map((item) => item.split(""));
  const newObject = {};
  common.forEach(function (element) {
    newObject[elem[0]] = elem[1];
  });
  return newObject;
};

const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }
