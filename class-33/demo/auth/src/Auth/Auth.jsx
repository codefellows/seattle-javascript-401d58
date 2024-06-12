import {useContext} from 'react';

import {When} from 'react-if';

import { AuthContext } from './Context';

function Auth(props) {

  const auth = useContext(AuthContext);

  // Check the context to see if we are logged in and our capabilities matches the prop
  let okToRender = auth.loggedIn && auth.can(props.capability);

  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  )

}

export default Auth;
