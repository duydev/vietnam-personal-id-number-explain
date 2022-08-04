# Vietnam Personal ID Number Explain / Giải nghĩa mã số CCCD Việt Nam

[![CI](https://github.com/duydev/vietnam-personal-id-number-explain/actions/workflows/main.yml/badge.svg)](https://github.com/duydev/vietnam-personal-id-number-explain/actions/workflows/main.yml)

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

## References / Tài liệu tham khảo

- https://tulieuvankien.dangcongsan.vn/he-thong-van-ban/van-ban-quy-pham-phap-luat/thong-tu-so-072016tt-bca-ngay-01022016-cua-bo-cong-an-quy-dinh-chi-tiet-mot-so-dieu-cua-luat-can-cuoc-cong-dan-va-nghi-1527
- http://congan.thuathienhue.gov.vn/tin-tuc-su-kien/tin-ho-t-d-ng/1814-%C3%BD-ngh%C4%A9a-c%E1%BB%A7a-12-s%E1%BB%91-tr%C3%AAn-th%E1%BA%BB-c%C4%83n-c%C6%B0%E1%BB%9Bc-c%C3%B4ng-d%C3%A2n
- https://vietnamnet.vn/12-con-so-tren-can-cuoc-cong-dan-gan-chip-an-chua-thong-tin-gi-800537.html
