import React, { useState, useEffect } from "react"

function Clock() {
  const [hoursNow, setHoursNow] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setHoursNow(new Date().toLocaleTimeString())
    }, 1000);
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <h1>Local Watch</h1>
      <p>{hoursNow} :</p>
    </>
  )
}

export default Clock