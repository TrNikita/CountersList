import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь', price: 200},
        {id: 1, value: 4, name: 'Ложка'},
        {id: 3, value: 0, name: 'Вилка'},
        {id: 4, value: 0, name: 'Тарелка'},
        {id: 5, value: 0, name: 'Набор минималиста'},
    ];

    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter(i => id !== i.id);
        setCounters(newCounters);
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        setCounters(
            counters.map((item) => {
                if (item.id === id) item.value++;
                return item;
            }),
        );
    };

    const handleDecrement = (id) => {
        setCounters(
            counters.map((item) => {
                if (item.id === id) item.value--;
                return item;
            }),
        );
    };

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onDecrement={handleDecrement}
                    onIncrement={handleIncrement}
                />
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </>
    );
};

export default CountersList;