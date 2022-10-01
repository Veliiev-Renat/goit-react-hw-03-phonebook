import { Component } from 'react'
import Contact from './Contacts/Contacts'
import Filter from './Filter/Filter'
import { nanoid } from 'nanoid'
import Form from './Form/Form'

const INITIAL_STATE ={
  contacts: [],
  filter: '',
  name: '',
  number: ''
}

export class App extends Component{
state = {...INITIAL_STATE}


handleChange = e =>{
const target = e.target
const{name,value}=target
this.setState({[name]:value})
}

handleSubmit = e =>{
  e.preventDefault()
  if(this.state.contacts.find((contact)=>contact.name===this.state.name)){
    alert(`${this.state.name} is alredy in you contacts`)
    return
  }
  else{this.setState(prev=>({
  contacts:[...prev.contacts,{
    name:this.state.name,
    number:this.state.number,
    id:nanoid()
  }]
  }))}
  this.setState({
    name:'',
    number:''
  })
}
componentDidMount(){
  const contact =localStorage.getItem('contacts')
  const contactParce = JSON.parse(contact)
  if(contactParce){
    this.setState({contacts:contactParce})
  }
}

componentDidUpdate(prevState){
if(prevState.contacts!==this.state.contacts){
  localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
}
}

seartchFilter=e=>{
  e.preventDefault()
}

filterSubmit=e=>{
  e.preventDefault()
}

deleteContact=e=>{
const del =this.state.contacts.filter((contact)=> contact.id !== e.target.id)
this.setState({contacts:del})
}

 render(){ 
const{contacts,filter,name,number} = this.state
const filteredArray = filter?contacts.filter(contact=>contact.name.toLowerCase().includes(this.state.filter.toLowerCase())):contacts

return(<>
<Form submit={this.handleSubmit} change={this.handleChange} name={name} number={number}/>
<Filter seartch={this.handleChange} filterSubmit={this.filterSubmit}/>
<Contact  contacts={filteredArray} id={this.id} deleteContact={this.deleteContact}/>
</>
)}
};
