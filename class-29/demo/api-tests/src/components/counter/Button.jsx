function Button(props) {

  return (
    <>
      <button data-testid={props.label} onClick={props.handleClick}>{props.label}</button>
    </>
  )

}

export default Button;
