import { useContext } from 'react'
import { ChallengesContext } from './../contexts/ChallengesContext'

import { ContainerProfile } from '../styles/components/styledProfile'

function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <ContainerProfile>
      <img src="/Avatar.jpeg" alt="Tamara Organ" />
      <div>
        <strong>Tamara Organ</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ContainerProfile>
  )
}
export default Profile
