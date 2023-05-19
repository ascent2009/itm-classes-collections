/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {
  isEmail(str) {
    if (str.match(/^\S+@\S+\.\S+$/)) {
      return true;
    }
    return false;
  }
  isDomain(str) {
    if (str.match(/^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/)) {
      return true;
    }
    return false;
  }
  isDate(str) {
    if (str.match(/[0-9]{2}.[0-9]{2}.[0-9]{4}/)) {
      return true;
    }
    return false;
  }
  isPhone(str) {
    if (str.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
      return true;
    }
    return false;
  }
}

const validator = new Validator();

console.log(validator.isEmail("phphtml@mail.ru"));
console.log(validator.isDomain("phphtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("+375 (29) 817-68-92")); //тут можете формат своей страны
