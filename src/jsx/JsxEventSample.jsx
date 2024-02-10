import React from 'react'

function JsxEventSample() {

    const hello = (name) => {
        alert("Hello Reactjs!")
    }


    return (<>
        <button onClick={hello}>Hello</button>
        <button onClick={() => hello()}>Hello - 2</button>
    </>
    )
}

export default JsxEventSample


//let, var and const


// const merhaba = () => "Merhaba Türkiye"

// function merhaba(){
//     return "Merhaba Türkiye"
// }