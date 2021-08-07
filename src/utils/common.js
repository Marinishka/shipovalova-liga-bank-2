import {WordForms} from "../const";

export const getNumberWithSpaces = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ` `);
};

export const getWordForm = (number, wordForms) => {
  number = Math.abs(number) % 100;
  const n1 = number % 10;
  if (number > 10 && number < 20) {
    return wordForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return wordForms[1];
  }
  if (n1 === 1) {
    return wordForms[0];
  }
  return wordForms[2];
};

export const getStrToNum = (str) => {
  return Number(str.replace(/ +/g, ``).match(/\d+/)[0]);
};

export const getPhrase = (number, measure) => {
  return getNumberWithSpaces(number) + getWordForm(number, WordForms[measure]);
};
