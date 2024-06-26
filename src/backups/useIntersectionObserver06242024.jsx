import { useEffect } from 'react'

const useIntersectionObserver = (bringit) => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // const imgContainer = document.querySelector(
        //   '.banner-caption__img__title__container-img'
        // )
        if (entry.isIntersecting) {
          entry.target.classList.add(bringit)
        } else {
          entry.target.classList.remove(bringit)
        }
      })
    }
    const observerOptions = {
      root: null, // relative viewport
      rootMargin: '0px',
      threshold: 0.1, // trigger when you get 10% of the element is visible
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const elements = document.querySelectorAll('.banner-caption-brackets')
    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
    }
  }, [bringit])
}

export default useIntersectionObserver
