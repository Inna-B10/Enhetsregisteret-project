export const DetailsButton = (props) => {
  //	console.log(props)
  return (
    <button
      // className={'btn btn-' + props.color}
      onClick={() => {
        props.onClick()
      }}>
      {props.children}
    </button>
  )
}
