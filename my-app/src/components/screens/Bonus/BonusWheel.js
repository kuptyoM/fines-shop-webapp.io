import React, { useState, useRef } from 'react'
import styles from './BonusWheel.module.css'


function BonusWheel() {
    const [result, setResult] = useState(null);
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

    const wheelRef = useRef(null);
    const indicatorRef = useRef(null);

    const spinWheel = () => {
        const randomIndex = Math.floor(Math.random() * items.length);
        const angle = 360 / items.length;
        const rotation = randomIndex * angle + 1440; // 1440deg for 4 full rotations

        setResult(items[randomIndex]);
        wheelRef.current.style.transform = `rotate(${rotation}deg)`;

        setTimeout(() => {
            wheelRef.current.classList.remove('spin');
        }, 5000); // 5 seconds for animation duration
    };

    return (
        <div>
            <div className="arrow" ref={indicatorRef}></div>
            <div ref={wheelRef} className="auction-wheel">
                {items.map((item, index) => (
                    <div key={index} className="auction-item" style={{ transform: `rotate(${index * (360 / items.length)}deg)` }}>{item}</div>
                ))}
            </div>
            <button onClick={() => {
                wheelRef.current.classList.add('spin');
                spinWheel();
            }}>Вращать колесо</button>
            {result && <p>Выпало: {result}</p>}
        </div>
    );
};


export default BonusWheel