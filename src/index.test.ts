import { expect } from 'chai';
import explain from './index';

describe('explain', () => {
  it('should return value', () => {
    const result = explain('037153000257');

    expect(result).to.be.deep.equal({
      birthPlace: 'Ninh Bình',
      birthYear: 1953,
      centuryOfBirth: 20,
      gender: 'Female',
      randomNumber: '000257'
    });
  });

  it('should return value', () => {
    const result = explain('080205000257');

    expect(result).to.be.deep.equal({
      birthPlace: 'Long An',
      birthYear: 2005,
      centuryOfBirth: 21,
      gender: 'Male',
      randomNumber: '000257'
    });
  });

  it('should throw error', () => {
    expect(() => {
      explain('asdfi');
    }).throw('Invalid vietnam personal id number format');
  });

  it('should return value', () => {
    const result = explain('101205000257');

    expect(result).to.be.deep.equal({
      birthPlace: 'Afghanistan',
      birthYear: 2005,
      centuryOfBirth: 21,
      gender: 'Male',
      randomNumber: '000257'
    });
  });

  it('should return value with null birthplace', () => {
    const result = explain('999205000257');

    expect(result).to.be.deep.equal({
      birthPlace: null,
      birthYear: 2005,
      centuryOfBirth: 21,
      gender: 'Male',
      randomNumber: '000257'
    });
  });
});
