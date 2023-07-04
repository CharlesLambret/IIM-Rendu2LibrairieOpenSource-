import React, { useState } from 'react';
import { calculateDateDifference, formatDate } from './dateUtils';

function DateCalculator() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [difference, setDifference] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('yyyy-MM-dd');

  const handleDifferenceCalculation = () => {
    const diffInDays = calculateDateDifference(startDate, endDate);
    setDifference(diffInDays);
  };

  const handleDateFormatting = () => {
    const formatted = formatDate(startDate, selectedFormat);
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
        <button onClick={handleDifferenceCalculation}>Calculer</button>
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
        <button onClick={handleDateFormatting}>Formater</button>
        {formattedDate && <p>Date formatée: {formattedDate}</p>}
      </div>
    </div>
  );
}

export default DateCalculator;
