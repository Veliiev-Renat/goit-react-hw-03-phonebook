import { Component } from 'react'
import Contact from './Contacts/Contacts'
import Filter from './Filter/Filter'
import { nanoid } from 'nanoid'
import Form from './Form/Form'

const INITIAL_STATE ={
  contacts: [],
  filter: '',
}

export class App extends Component{
state = {...INITIAL_STATE}

handleChange = e =>{
  const target = e.target
  const{name,value}=target
  this.setState({[name]:value})
  }

handleSubmit = e =>{
  const form =e.currentTarget.elements
  e.preventDefault()
  if(this.state.contacts.find((contact)=>contact.name===form.name.value)){
    alert(`${form.name.value} is alredy in you contacts`)
    return
  }
  else{this.setState(prev=>({
  contacts:[...prev.contacts,{
    name:form.name.value,
    number:form.number.value,
    id:nanoid()
  }]
  }))}
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

deleteContact=e=>{
const del =this.state.contacts.filter((contact)=> contact.id !== e.target.id)
this.setState({contacts:del})
}

 render(){ 
const{contacts,filter} = this.state
const filteredArray = filter?contacts.filter(contact=>contact.name.toLowerCase().includes(this.state.filter.toLowerCase())):contacts

return(<>
<Form submit={this.handleSubmit} />
<Filter seartch={this.handleChange} />
<Contact  contacts={filteredArray} id={this.id} deleteContact={this.deleteContact}/>
</>
)}
};
