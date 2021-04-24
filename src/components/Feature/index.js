import React from 'react'
import menu from '../../images/menu2.jpg'
import {
  FeatureContainer,
  FeatureButton,
} from './FeatureElements'

export const Feature = () => {
  const getMenu = () => {
    window.open(menu, '_blank');
  }
  return (
    <FeatureContainer>
      <h1>Get our full menu here</h1>
      <FeatureButton onClick={getMenu}>Download</FeatureButton>
    </FeatureContainer>
  )
}
