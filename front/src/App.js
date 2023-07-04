import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { getDifferenceInDays, formatDate } from './fonctions/dateUtils';

function App() {
  const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [format, setFormat] = useState('fr-FR');
  return (
    <div>
            <input type="date" onChange={e => setDate1(new Date(e.target.value))} />
            <input type="date" onChange={e => setDate2(new Date(e.target.value))} />
            <p>Difference in days: {getDifferenceInDays(date1, date2)}</p>

            <input type="text" onChange={e => setFormat(e.target.value)} />
            <p>Formatted date1: {formatDate(date1, format)}</p>
            <p>Formatted date2: {formatDate(date2, format)}</p>
    </div>
  );
}

export default App;
