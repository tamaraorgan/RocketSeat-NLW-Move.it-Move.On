import { useContext } from 'react';
import { ChallengesContext } from './../contexts/ChallengesContext';

import {Overlay, Container} from '../styles/components/styledLevelUpModal'

function LevelUpModal() {
  const { level, closeLevalModalOpen } = useContext(ChallengesContext)
  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevalModalOpen}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </Container>
    </Overlay>
  )
}
export default LevelUpModal
