import { Component } from "react";
import style from '../Form/Form.module.css'
import PropTypes from 'prop-types';

export default class Form extends Component{
  state={
  name: '',
  number: ''}

  handleChange = e =>{
    const target = e.target
    const{name,value}=target
    this.setState({[name]:value})
    }

    submitForm= e =>{
      this.props.submit(e)
      this.setState({name:'',number:''})
    }

    render(){
const {name,number} = this.state

return(<><h2>Phonebook</h2>
<form onSubmit={this.submitForm} className={style.form}>
  <label className={style.label}>
    Name
  <input
  className={style.input}
  onChange={this.handleChange}
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
  onChange={this.handleChange}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number}
/>
  </label>
  <button type='submit' className={style.button} >Add contact</button>
</form>
</> )
    }
}

Form.propTypes={
    submit:PropTypes.func
}