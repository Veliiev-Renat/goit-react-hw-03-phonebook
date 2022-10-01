import { Component } from "react";
import style from '../Form/Form.module.css'
import PropTypes from 'prop-types';

export default class Form extends Component{
    render(){
const {name,change,submit,number} = this.props
return(<><h2>Phonebook</h2>
<form onSubmit={submit} className={style.form}>
  <label className={style.label}>
    Name
  <input
  className={style.input}
  onChange={change}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={name}
/>
  </label>
  <label className={style.label}>
    Number
    <input
    className={style.input}
  onChange={change}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number}
/>
  </label>
  <button type='submit' className={style.button}>Add contact</button>
</form>
</> )
    }
}

Form.propTypes={
    name:PropTypes.string,
    number:PropTypes.string,
    submit:PropTypes.func,
    change:PropTypes.func
}