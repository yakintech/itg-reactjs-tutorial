import React, { useEffect } from 'react'

function Home() {


  useEffect(() => {

    let interval = setInterval(() => {
      console.log('Hello');
    }, 1000);

    return () => {
      clearInterval(interval)
    }

  }, [])



  return (
    <div>Home</div>
  )
}

export default Home