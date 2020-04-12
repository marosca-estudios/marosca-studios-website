export default (target: any, smoothTime: number = 100): void => {

  const isDone = setInterval(() => {
    const atTop = (document.body.scrollTop || document.documentElement.scrollTop) <= 0

    if (atTop) {
      clearInterval(isDone)
    } else {
      window.scrollBy({ top: -50 })
    }
  }, 1)
}
