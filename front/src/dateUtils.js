import React from 'react';

function calculateDateDifference(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffInDays = Math.round(Math.abs((start - end) / oneDay));

  return diffInDays;
}

function formatDate(date, format) {
  const dateToFormat = new Date(date);
  const year = dateToFormat.getFullYear().toString().slice(-2);
  const formatted = format
    .replace('yyyy', dateToFormat.getFullYear())
    .replace('MM', ('0' + (dateToFormat.getMonth() + 1)).slice(-2))
    .replace('dd', ('0' + dateToFormat.getDate()).slice(-2))
    .replace('yy', year);

  return formatted;
}

export default function DateUtils() {
  return null; // Composant vide car il n'y a pas d'affichage visuel
}

export { calculateDateDifference, formatDate };
