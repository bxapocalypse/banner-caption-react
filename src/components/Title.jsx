import { AiOutlineArrowDown } from 'react-icons/ai'

const Title = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="banner-container">
      <h1 className="banner-title">React Observer Project</h1>
      <p className="title-par">Please Scroll Down</p>
      <AiOutlineArrowDown className="title-arrow" onClick={scrollToBottom} />
    </section>
  )
}
export default Title
