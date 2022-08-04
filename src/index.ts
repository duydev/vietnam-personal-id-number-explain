import provinces from './provinces.json';
import countries from './countries.json';

const regex = /^(\d{3})(\d{1})(\d{2})(\d{6})$/;

interface IProvinces {
  [k: number]: string;
}

interface ICountries {
  [k: number]: string;
}

interface IResult {
  birthPlace: string | null;
  birthYear: number;
  centuryOfBirth: number;
  gender: string;
  randomNumber: string;
}

function explain(pid: string): IResult {
  const match = regex.exec(pid);

  if (!match) {
    throw Error('Invalid vietnam personal id number format');
  }

  let birthPlace: string | null = (<IProvinces>provinces)[parseInt(match[1])];

  if (!birthPlace) {
    birthPlace = (<ICountries>countries)[parseInt(match[1])];
  }

  if (!birthPlace) {
    birthPlace = null;
  }

  const gender = parseInt(match[2]) % 2 === 0 ? 'Male' : 'Female';
  const centuryOfBirth = 20 + Math.floor(parseInt(match[2]) / 2);
  const birthYear = parseInt(`${centuryOfBirth - 1}${match[3]}`);
  const randomNumber = match[4];

  return { birthPlace, birthYear, centuryOfBirth, gender, randomNumber };
}

export default explain;
module.exports = explain;
