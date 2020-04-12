import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'


const images = [
  {
    src: img3,
    order: 1,
    author: 'Daniel van den Berg',
    link: 'https://unsplash.com/photos/0SoFH0IkBHg',
  },
  {
    src: img4,
    order: 2,
    author: 'Nicholas Punter',
    link: 'https://unsplash.com/@nickpunter',
  },
]

export default images.sort((prev, cur) => prev.order - cur.order)
