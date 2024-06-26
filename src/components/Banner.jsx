import React from 'react'
import { bannerInfo } from '../data'
import useIntersectionObserver from './useIntersectionObserver'

const Banner = () => {
  useIntersectionObserver([
    { targetSelector: '.banner-caption-brackets', className: 'bringit' },
    {
      targetSelector: '.banner-caption__img__title__container-img',
      className: 'fader',
    },
    {
      targetSelector: '.banner-caption__img__title__container-title',
      className: 'second-fader',
    },
    {
      targetSelector: '.banner-caption__caption',
      className: 'third-fader',
    },
  ])
  return (
    <div class="banner-caption">
      {bannerInfo.map((info) => {
        const { id, img, first, second, degree, position, quote } = info
        return (
          <React.Fragment key={id}>
            <div class="banner-caption-brackets"></div>

            <div key={id} class="banner-caption__img__title__container">
              <img
                class="banner-caption__img__title__container-img"
                src={img}
                alt={first}
              />

              <div class="banner-caption__img__title__container-title">
                {first} {second}, {degree}
                <br />
                {position}
              </div>
            </div>

            <div class="banner-caption__caption">&ldquo;{quote}&rdquo;</div>
          </React.Fragment>
        )
      })}
    </div>
  )
}
export default Banner
