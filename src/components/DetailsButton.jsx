export const DetailsButton = (props) => {
  return (
    <button
      onClick={() => {
        props.onClick()
      }}>
      {props.children}
    </button>
  )
}
