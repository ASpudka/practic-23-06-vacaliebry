"use strict";

const dictionary = new Map();
dictionary.set("мир", "peace");
dictionary.set("небо", "sky");
dictionary.set("людина", "man");
dictionary.set("море", "sae");
dictionary.set("поїхали", "go");
dictionary.set("на", "on");
dictionary.set("як", "as");
dictionary.set("група", "group");
dictionary.set("навчання", "teaching");
dictionary.set("мова", "language");
dictionary.set("програмування", "programing");
dictionary.set("займатися", "engage in");

const str = "Група поїхала у суббота займатися програмування на Море";

const translate = (str, separator = ' ') => {
  //lowerCase - перевести в нижний регистр
  //split -> array
  //map -> get -> array
  // join
  return (
    str
      .toLowerCase()
      .split(separator)
      .map((word) => dictionary.has(word) ? dictionary.get(word) : word)
      //   if(dictionary.has(word) ) {
      //   return dictionary.get(word)}
      //   return word
      // })
      .join(separator)
  );
};

console.log(translate(str));
