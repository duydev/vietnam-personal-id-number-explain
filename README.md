# Vietnam Personal ID Number Explain / Giải nghĩa mã số CCCD Việt Nam

## Installation / Cài đặt

```
$ npm add vietnam-personal-id-number-explain
$ yarn add vietnam-personal-id-number-explain
```

## Using / Sử dụng

```
const explain = require('vietnam-personal-id-number-explain');

const result = explain('037153000257');

console.log(result);

//  Output:
//
//  {
//      birthPlace: 'Ninh Bình',
//      birthYear: 1953,
//      centuryOfBirth: 20,
//      gender: 'Female',
//      randomNumber: '000257'
//  }

```