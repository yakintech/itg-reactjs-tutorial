import React, { useState } from 'react'

function StateRandomNumbers() {

    const [numbers, setnumbers] = useState([3, 7, 22])

    //Butona her bastığında 1-30 arasında RASTGELE BİR TAM SAYI EKLENSİN. Eğer bu sayı dizide varsa ekrana uyarı versin. "Bu üretilen sayı dizide mevcut!"

    const addRandomNumber = () => {

        const randomNumber = Math.floor(Math.random() * 30)

        //ürettiğim randomNumber isimli sayı numbers dizisinde mevcut mudur?
        if(numbers.includes(randomNumber)){
            alert("Bu üretilen sayı dizide mevcut! " + randomNumber)
        }
        else{
            setnumbers([...numbers, randomNumber])
        }
       


    }
    return (<>
        <h1>Length: {numbers.length}</h1>
        <button onClick={() => addRandomNumber()}>Add Random Number</button>
        <hr />
        <ul>
            {
                numbers.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default StateRandomNumbers