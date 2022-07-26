import React, { useState } from 'react';
import { Calendar } from 'react-date-range';
import moment from 'moment';
import DatePicker from 'react-date-picker';
import './styles.css';

const CustomCalendar2 = () => {
  const [time, setTime] = useState({
    hour: '00',
    minute: '00',
    second: '00',
    millisecond: '000',
  });
  const [dateSelected, setDateSelected] = useState('');
  const [value, onChange] = useState(new Date());

  console.log('date: ', moment(value).format('YYYY:MM:DD'));
  console.log('dateeeeeeeeeeee: ', moment(value).format('YYYY:MM:DD'));

  const handleChangeTime = (field, event) => {
    switch (field) {
      case 'hour':
        setTime({
          ...time,
          hour: event.target.value,
        });
        break;
      case 'minute':
        setTime({
          ...time,
          minute: event.target.value,
        });
        break;
      case 'second':
        setTime({
          ...time,
          second: event.target.value,
        });
        break;
      default:
        setTime({
          ...time,
          millisecond: event.target.value,
        });
    }
  };

  const handleApplyDate = () => {
    const formatDate = moment(value).format('YYYY:MM:DD');
    const formatTime = `${time.hour}:${time.minute}:${time.second}.${time.millisecond}`;
    setDateSelected(`${formatDate} ${formatTime}`);
  };

  return (
    <div className='calendar'>
      <h3 className='test'>
        {!dateSelected
          ? moment(value).format('YYYY:MM:DD') +
            ` ${time.hour}:${time.minute}:${time.second}.${time.millisecond}`
          : dateSelected}
      </h3>
      <DatePicker
        onChange={onChange}
        value={value}
        format='yyyy/MM/dd'
        className='rdp'
        calendarIcon={
          <img
            src='https://cdn-icons-png.flaticon.com/512/2693/2693560.png'
            width={20}
            height={20}
          />
        }
      />
      <div className='customTime'>
        <div className='itemTime'>
          Hour
          <select
            className='timeSelect'
            onChange={(e) => handleChangeTime('hour', e)}
          >
            <option value='00'>00</option>
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='03'>03</option>
          </select>
        </div>
        <div className='itemTime'>
          Minute
          <select
            className='timeSelect'
            onChange={(e) => handleChangeTime('minute', e)}
          >
            <option value='00'>00</option>
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='03'>03</option>
          </select>
        </div>
        <div className='itemTime'>
          Second
          <select
            className='timeSelect'
            onChange={(e) => handleChangeTime('second', e)}
          >
            <option value='00'>00</option>
            <option value='01'>01</option>
            <option value='02'>02</option>
            <option value='03'>03</option>
          </select>
        </div>
        <div className='itemTime'>
          Millisecond
          <input
            type='number'
            className='millisecondInput'
            placeholder='000'
            onChange={(e) => handleChangeTime('millisecond', e)}
          />
        </div>
      </div>
      <div style={{ width: '408px', margin: 'auto' }}>
        <button className='btnApply' onClick={handleApplyDate}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default CustomCalendar2;
