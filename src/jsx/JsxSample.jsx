import React from 'react'

function JsxSample() {

  let name = "Çağatay"
  let age = 18
  let onlineStatus = true

  //3 types -> string, numeric, boolean

  let cities = ["İstanbul", "İzmir", "Ankara", "Aydın"]

  return <>
    <h1>Name: {name}</h1>
    <h1>Age: {age}</h1>
    {
        onlineStatus == true ? <h1>User Online!</h1> : <h1>User Offline</h1>
    }

    <ul>
        {
            cities.map(item => <li>{item}</li>)
        }
    </ul>
  </>
}

export default JsxSample