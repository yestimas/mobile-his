import React, { useState } from 'react';

function OnlineReservation() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform reservation logic here
        console.log('Reservation submitted:', name, date, time);
        // Reset form fields
        setName('');
        setDate('');
        setTime('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
                Date:
                <input type="date" value={date} onChange={handleDateChange} />
            </label>
            <br />
            <label>
                Time:
                <input type="time" value={time} onChange={handleTimeChange} />
            </label>
            <br />
            <button type="submit">Make Reservation</button>
        </form>
    );
}

export default OnlineReservation;