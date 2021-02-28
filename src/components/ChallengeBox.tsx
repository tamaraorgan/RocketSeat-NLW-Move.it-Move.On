import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from './../contexts/CountdownContext'

import { ContainerChallengeBox, ChallengeActive, ChallengNotActive,  ChallengeSuceededButton, ChallengeFailedButton } from '../styles/components/styledChallengeBox'

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  )
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown()
  }
  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <ContainerChallengeBox>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <ChallengeFailedButton
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </ChallengeFailedButton>
            <ChallengeSuceededButton
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ChallengeSuceededButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengNotActive >
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </ChallengNotActive>
      )}
    </ContainerChallengeBox>
  )
}
export default ChallengeBox
