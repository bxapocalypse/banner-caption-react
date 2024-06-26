import { useEffect } from 'react'

const useIntersectionObserver = (classMappings) => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // const imgContainer = document.querySelector(
        //   '.banner-caption__img__title__container-img'
        // )
        classMappings.forEach(({ targetSelector, className }) => {
          if (entry.target.matches(targetSelector)) {
            if (entry.isIntersecting) {
              entry.target.classList.add(className)
            } else {
              entry.target.classList.remove(className)
            }
          }
        })
      })
    }
    const observerOptions = {
      root: null, // relative viewport
      rootMargin: '0px',
      threshold: 1, // trigger when you get 20% of the element is visible
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // const elements = document.querySelectorAll('.banner-caption-brackets');

    classMappings.forEach(({ targetSelector }) => {
      const elements = document.querySelectorAll(targetSelector)
      elements.forEach((element) => observer.observe(element))
    })

    // elements.forEach((element) => observer.observe(element))

    return () => {
      // elements.forEach((element) => observer.unobserve(element))
      classMappings.forEach(({ targetSelector }) => {
        const elements = document.querySelectorAll(targetSelector)
        elements.forEach((element) => observer.unobserve(element))
      })
    }
  }, [classMappings])
}

export default useIntersectionObserver
