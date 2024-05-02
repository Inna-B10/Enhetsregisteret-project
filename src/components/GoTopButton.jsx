import { useEffect, useState } from 'react'
import toTopIcon from '../assets/toTop.svg'
import styles from './GoTopButton.module.css'

export function GoTopButton() {
  const [showGoTop, setShowGoTop] = useState(false)

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 600)
  }

  const handleScrollUp = () => {
    document.querySelector('main').scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton)
  }, [])

  return (
    <div
      className={showGoTop ? '' : styles.goTopHidden}
      onClick={handleScrollUp}>
      <img src={toTopIcon} role='button' className={styles.goTop} />
    </div>
  )
}
