function Header(props) {
  return (
    <header>
      <h1>To Do List: {props.openItems} pending</h1>
    </header>
  );
}

export default Header;
