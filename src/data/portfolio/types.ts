
export type ContentType = 'text' | 'image'

export type Project = {
  projectName: string,
  projectDescription: string,
  projectBulletpoints: string[],
  projectsLinks: {
    icon: any,
    src: string,
  }[],
  projectColors: {
    background: string,
    logo: string,
    description: string,
    bulletpoints: {
      background: string,
      text: string,
    },
    links: {
      background: string,
      text: string,
    }
  },
  projectImage: string,
  projectLayout: {
    left: ContentType,
    right: ContentType,
  }
}
