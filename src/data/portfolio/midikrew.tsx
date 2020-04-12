import React from 'react'
import Web from 'assets/icons/web'
import Github from 'assets/icons/github'
import midikrewImage from 'assets/images/midikrew.png'
import theme from 'global/theme'
import { Project } from './types'

export const midikrew: Project = {
  projectName: "Midikrew",
  projectDescription: "An electronic music sampler built with WebAudioAPI, React and Firebase.",
  projectBulletpoints: [
    "+ Export / Import your tracks as .json files",
    "+ MIDI beats with Reverb & Pitch FX",
  ],
  projectsLinks: [
    {
      icon: <Web />,
      src: 'https://midikrew.firebaseapp.com/',
    },
    {
      icon: <Github />,
      src: 'https://github.com/andrefcasimiro-vakt/midikrew/',
    },
  ],
  projectColors: {
    background: theme.colors.MIDIKREW_PRIMARY,
    logo: theme.colors.WHITE,
    description: theme.colors.WHITE,
    bulletpoints: {
      background: theme.colors.WHITE,
      text: theme.colors.DARK,
    },
    links: {
      background: theme.colors.WHITE,
      text: theme.colors.DARK,
    }
  },
  projectImage: midikrewImage,
  projectLayout: {
    left: 'image',
    right: 'text',
  }
}
