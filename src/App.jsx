import React, { useState } from 'react';

const App = () => {
    const [color, setColor] = useState(['text-success', 'text-danger', 'text-warning', 'text-primary', 'text-info']);
    const [pos, setPos] = useState('first');
    const [letter, setLetter] = useState([
        { chara: 'C', class: 'd-none' },
        { chara: 'O', class: 'd-none' },
        { chara: 'D', class: 'd-none' },
        { chara: 'I', class: 'd-none' },
        { chara: 'N', class: 'd-none' },
        { chara: 'G', class: 'd-none' },
        { chara: '  ', class: 'd-none' },
        { chara: 'X', class: 'd-none' },
        { chara: '  ', class: 'd-none' },
        { chara: 'S', class: 'd-none' },
        { chara: 'C', class: 'd-none' },
        { chara: 'H', class: 'd-none' },
        { chara: 'O', class: 'd-none' },
        { chara: 'O', class: 'd-none' },
        { chara: 'L', class: 'd-none' }
    ])
    const start = () => {
        let i = 0;
        setInterval(() => {

            let temp = [...letter];

            if (temp[i].chara !== 'X') {

                let random = Math.floor(Math.random() * color.length);

                (temp[i].class.includes('move') ? temp[i].class = 'd-none' : temp[i].class = color[random] + ' move bg-dark');
            } else {

                { temp[i].class === 'text-danger move bg-dark' ? temp[i].class = 'text-danger move d-none' : temp[i].class = 'text-danger move bg-dark'; }

            }

            setLetter(temp);
            console.log(i);

            if (i === letter.length - 1) {
                setPos('')
            }

            if (i <= 1) {
                setPos('first');
            }
            i++;
            i %= letter.length;

            // i = Math.floor(Math.random() * letter.length);

        }, 200);

    }
    return (

        <div className='text-center my-5'>
            <div id='code'>{pos === '' && <span className='blink'>|</span>}{letter.map((e, i) => <span className={'lettre mx-auto ' + e.class} key={i}>{e.chara}</span>)}{pos === 'first' && <span className='blink'>|</span>}</div><br />
            <button className='my-5 btn btn-dark' onClick={start}>Start</button>

        </div>
    )
};

export default App;