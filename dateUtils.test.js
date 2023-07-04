const { calculateDateDifference, formatDate } = require('./dateUtils');

describe('calculateDateDifference', () => {
  it('calcule correctement la différence en jours entre deux dates', () => {
    const startDate = '2022-01-01';
    const endDate = '2022-01-10';
    const diff = calculateDateDifference(startDate, endDate);
    expect(diff).toBe(9);
  });

  it('gère correctement l\'ordre inverse des dates', () => {
    const startDate = '2022-01-10';
    const endDate = '2022-01-01';
    const diff = calculateDateDifference(startDate, endDate);
    expect(diff).toBe(9);
  });

  it('gère correctement les mêmes dates de début et de fin', () => {
    const startDate = '2022-01-01';
    const endDate = '2022-01-01';
    const diff = calculateDateDifference(startDate, endDate);
    expect(diff).toBe(0);
  });

  it('gère correctement les dates avec un format différent', () => {
    const startDate = '2022/01/01';
    const endDate = '2022/01/10';
    const diff = calculateDateDifference(startDate, endDate);
    expect(diff).toBe(9);
  });
});

describe('formatDate', () => {
  it('formate correctement la date selon le format spécifié', () => {
    const date = '2022-05-15';
    const format = 'dd/MM/yyyy';
    const formatted = formatDate(date, format);
    expect(formatted).toBe('15/05/2022');
  });

  it('gère correctement différents formats avec la même date', () => {
    const date = '2022-05-15';
    const format = 'MM-dd-yyyy';
    const formatted = formatDate(date, format);
    expect(formatted).toBe('05-15-2022');
  });

  it('gère correctement différents formats avec des mois et jours sur un seul chiffre', () => {
    const date = '2022-02-03';
    const format = 'MM/dd/yy';
    const formatted = formatDate(date, format);
    expect(formatted).toBe('02/03/22');
  });

  it('formate correctement la date avec des mois et jours sur un seul chiffre', () => {
    const date = '2022-02-03';
    const format = 'dd/MM/yy';
    const formatted = formatDate(date, format);
    expect(formatted).toBe('03/02/22');
  });

  it('gère correctement un format sans année complète', () => {
    const date = '2022-05-15';
    const format = 'dd/MM';
    const formatted = formatDate(date, format);
    expect(formatted).toBe('15/05');
  });
});
