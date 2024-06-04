import {useState} from 'react';

import './form.scss';

function Form(props) {

  let [formData, setFormData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    props.makeTheCall(formData.url, formData.method, formData.body);
  }

  function handleChange(e) {
    let fieldName = e.target.name;
    let value = e.target.value;

    let obj = {
      name: "john"
    }

    // ...formData is the spread operator that makes a copy of formData
    // and then we add the new key/value pair to that copy after the comma
    setFormData( {...formData, [fieldName]: value} );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Method: {formData.method} URL: {formData.url}</h3>
      <div>
       <span>URL: </span> <input onChange={handleChange} type="text" name="url" />
      </div>
      <div>

        <label>
          <input onChange={handleChange} type="radio" name="method" value="get" />
          <span>GET</span>
        </label>

        <label>
          <input onChange={handleChange} type="radio" name="method" value="post" />
          <span>POST</span>
        </label>

        <label>
          <input onChange={handleChange} type="radio" name="method" value="put" />
          <span>PUT</span>
        </label>

        <label>
          <input onChange={handleChange} type="radio" name="method" value="delete" />
          <span>DELETE</span>
        </label>
      </div>
      <div>
        <div>JSON BODY FOR POST/PUT:</div>
        <textarea onChange={handleChange} name="body"></textarea>
      </div>
      <div>
        <button type="submit">Make API Call</button>
      </div>
    </form>
  )

}

export default Form;
