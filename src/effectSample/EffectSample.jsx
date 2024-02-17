import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [number, setnumber] = useState(0)

    useEffect(() => {
        var randomNumber = Math.random() * 1000
        setnumber(randomNumber);
    }, [])


    return (<>
        <h1>{number}</h1>
    </>
    )
}

export default EffectSample

//props, state, effect