import { useContext } from 'react'
import { ChallengesContext } from './../contexts/ChallengesContext'

import { ContainerCompletedChallenges } from '../styles/components/styledCompletedChallenges'

function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)
  return (
    <ContainerCompletedChallenges>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </ContainerCompletedChallenges>
  )
}
export default CompletedChallenges
