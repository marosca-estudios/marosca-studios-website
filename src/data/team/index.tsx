import React from 'react'
import Github from 'assets/icons/github'
import Linkedin from 'assets/icons/linkedin'
import andre from 'assets/images/andre.jpg'
import iorran from 'assets/images/iorran.jpg'
import { TeamMember } from './types'

export const team: TeamMember[] = [
  {
    fullName: 'André Fernandes',
    functions: [
      "+ Project manager",
      "+ UX / UI developer",
      "+ Full-stack developer",
    ],
    links: [
      {
        icon: <Github />,
        src: "https://github.com/andrefcasimiro-vakt",
      },
      {
        icon: <Linkedin />,
        src: "https://www.linkedin.com/in/andrefcasimiro/",
      }
    ],
    photo: andre,
  },
  {
    fullName: 'Iorran Marcolino',
    functions: [
      "+ Full-stack developer",
      "+ Mobile developer",
    ],
    links: [
      {
        icon: <Github />,
        src: "https://github.com/iorran",
      }
    ],
    photo: iorran,
  }
]

