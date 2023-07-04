

const { getDifferenceInDays, formatDate } = require('../fonctions/dateUtils');
const assert = require('assert');

describe('Date Utils', () => {
    it('should return the correct difference in days', () => {
        const date1 = new Date(2023, 6, 4);
        const date2 = new Date(2023, 6, 10);
        assert.strictEqual(getDifferenceInDays(date1, date2), 6);
    });

    it('should format the date correctly', () => {
        const date = new Date(2023, 6, 4);
        assert.strictEqual(formatDate(date, 'fr-FR'), '4 juillet 2023');
    });
});
