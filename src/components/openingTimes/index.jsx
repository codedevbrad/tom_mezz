import React from 'react';
import {data} from '../../data'

const OpeningTimes = () => {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Opening Hours</h3>
      <ul style={styles.list}>
        {data.openingDays.map(({ day, open, close }) => (
          <li key={day} style={styles.item}>
            <span style={styles.day}>{day}</span>
            <span style={styles.time}>
              {open && close ? `${open} – ${close}` : 'Closed'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpeningTimes;

const styles = {
  container: {
    padding: '2rem',
    background: '#f8f8f8',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '0 auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    fontFamily: 'system-ui, sans-serif',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#333',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #ddd',
  },
  day: {
    fontWeight: 600,
    color: '#222',
    paddingRight: '10px'
  },
  time: {
    color: '#555',
  },
};
