/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
  reverse = (string) => {
    return string.split("").reverse().join("");
  };
  ucFirst = (string) => {
    return string.substring(0, 1).toUpperCase() + string.substring(1);
  };
  ucWords = (string) => {
    return string
      .split(" ")
      .map((el) => el.substring(0, 1).toUpperCase() + el.substring(1))
      .join(" ");
  };
}

const str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'
