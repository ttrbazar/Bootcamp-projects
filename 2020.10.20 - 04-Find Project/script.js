/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/

let streetNames = ["Abchurch Lane", "Adam's Court", "Addle Hill", "Addle Lane", "Alban Highwalk"];

const getLanes = strNames => strNames.filter(item => item.includes("Lane"));

console.log(getLanes(streetNames));