import React, { useState } from 'react';

function DateCalculator() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [difference, setDifference] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('yyyy-MM-dd');

  const calculateDifference = () => {
    const oneDay = 24 * 60 * 60 * 1000; // Nombre de millisecondes dans un jour
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculer la différence en jours
    const diffInDays = Math.round(Math.abs((start - end) / oneDay));

    setDifference(diffInDays);
  };

  const formatDate = () => {
    const dateToFormat = new Date(startDate);
    let format = selectedFormat;

    const formatted = format
      .replace('yyyy', dateToFormat.getFullYear())
      .replace('MM', ('0' + (dateToFormat.getMonth() + 1)).slice(-2))
      .replace('dd', ('0' + dateToFormat.getDate()).slice(-2));

    setFormattedDate(formatted);
  };

  return (
    <div>
      <h2>Calculateur de dates</h2>
      <div>
        <h3>Calculer la différence de jours</h3>
        <label>Date de début:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>Date de fin:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={calculateDifference}>Calculer</button>
        {difference && <p>La différence est de {difference} jours.</p>}
      </div>

      <div>
        <h3>Formater une date</h3>
        <label>Date à formater:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>Format:</label>
        <select
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value)}
        >
          <option value="yyyy-MM-dd">yyyy-MM-dd</option>
          <option value="dd/MM/yyyy">dd/MM/yyyy</option>
          <option value="MM-dd-yyyy">MM-dd-yyyy</option>
        </select>
        <button onClick={formatDate}>Formater</button>
        {formattedDate && <p>Date formatée: {formattedDate}</p>}
      </div>
    </div>
  );
}

export default DateCalculator;
