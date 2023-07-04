# Date Utils

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Date Utils est une mini bibliothèque JavaScript qui fournit des fonctionnalités pour calculer la différence de jours entre deux dates et formater une date dans différents formats.

## Installation


## Utilisation

Importez les fonctions nécessaires depuis la bibliothèque :

```
const { calculateDateDifference, formatDate } = require('date-utils-library');
```

Calculer la différence de jours :
```
const startDate = '2022-01-01';
const endDate = '2022-01-10';
const diff = calculateDateDifference(startDate, endDate);
console.log(diff); // Output: 9
```

Formater une date :
```
const date = '2022-05-15';
const format = 'dd/MM/yyyy';
const formatted = formatDate(date, format);
console.log(formatted); // Output: 15/05/2022
```
