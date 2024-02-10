import React, { useState } from 'react'

function StateRandomColor() {

    const [color, setcolor] = useState("red")


    const randomColors = ["red", "blue", "white", "orange", "yellow", "brown", "purple", "black","green", "tomato"]

    const changeColor = () => {
        let randomNumber = Math.floor(Math.random() * randomColors.length) // 4
        const randomColor =  randomColors[randomNumber] //yellow

        setcolor(randomColor)
    }

    return (<>

        <button onClick={() => changeColor()}>Change Color</button>
        <hr />
        <div style={{ width: 200, height: 200, backgroundColor: color }}>

        </div>

    </>
    )
}

export default StateRandomColor