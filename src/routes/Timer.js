import React, { useState, useEffect } from "react"

import useMount from "../hooks/useMount"

function Clock() {
  const [hours, setHours] = useState(1)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(1)

  console.log(Boolean(1))
  console.log(Boolean(0))
  const isMount = useMount()

  useEffect(() => {
    if (!isMount) return

    const timer = setInterval(() => {
      setSeconds(seconds - 1)
    }, 1000)
    return () => clearInterval(timer)

    // eslint-disable-next-line
  }, [seconds])

  useEffect(() => {
    if (!isMount) return

    if (seconds === 0) {
      setMinutes(minutes - 1)
      setSeconds(59)
    }

    if (minutes === 0 && seconds === 0) {
      setHours(hours - 1)
      setMinutes(0)
    }

    if (hours && minutes && seconds) {
      alert('Tempo esgotado')
    }
    // eslint-disable-next-line
  }, [seconds, minutes, hours])

  const handleSeconds = (event) => {
    const input = event.target
    const value = Number(input.value)
    setSeconds(value)
    input.value = ''
  }

  const handleMinutes = (event) => {
    const input = event.target
    const value = Number(input.value)
    setMinutes(value)
    input.value = ''

  }

  const handleHours = (event) => {
    const input = event.target
    const value = Number(input.value)
    setHours(value)
    input.value = ''

  }

  return (
    <>
      <h1>Timer</h1>
      <p>{`${hours}h : ${minutes}min : ${seconds}s`}</p>
      <div>
        <input placeholder='Type the hours' onBlur={handleHours}></input>
        <input placeholder='Type the minutes' onBlur={handleMinutes}></input>
        <input placeholder='Type the seconds' onBlur={handleSeconds}></input>
      </div>
      <p>The timer works after insert a time!!</p>

    </>
  )
}

export default Clock