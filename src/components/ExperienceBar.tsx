import { useContext } from 'react'

import { ChallengesContext } from './../contexts/ChallengesContext'

import {
  HeaderExperienceBar,
  CurrentExperience
} from '../styles/components/styledExperienceBar'

function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  )

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <HeaderExperienceBar>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} px
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </HeaderExperienceBar>
  )
}
export default ExperienceBar
