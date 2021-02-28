import { useContext } from 'react'
import { CountdownContext } from './../contexts/CountdownContext'

import {
  ContainerCountdown,
  CountdownButton
} from '../styles/components/styledCountdown'

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext)
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <>
      <ContainerCountdown>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span> : </span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </ContainerCountdown>

      {hasFinished ? (
        <CountdownButton>Ciclo Encerrado</CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              type="button"
              className="active"
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </CountdownButton>
          ) : (
            <CountdownButton type="button" onClick={startCountdown}>
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </>
  )
}
export default Countdown
