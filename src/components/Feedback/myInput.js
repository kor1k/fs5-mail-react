import React, { Fragment } from 'react';

const myInput = (props) =>{
  const {input, type, placeholder, meta} = props;
  return (
	<Fragment>
	  <input {...input} type={type} placeholder={placeholder} />
	  {meta.error && meta.touched && <div>{meta.error}</div>}
   </Fragment>
  )
}
export default myInput;
