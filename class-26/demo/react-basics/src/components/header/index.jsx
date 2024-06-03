function Header(props) {

  const styles = {
    color: props.options.secondaryColor,
    backgroundColor: props.options.primaryColor,
  }

  return (
    <h1 style={styles}>{props.options.dealerName}</h1>
  )

}

export default Header;
