import styles from './DetailsButton.module.css'

export const DetailsButton = (props) => {
  return (
    <button
      className={styles.detailsButton}
      onClick={() => {
        props.onClick()
      }}>
      {props.children}
    </button>
  )
}
