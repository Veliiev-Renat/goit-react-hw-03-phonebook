import { Component } from "react";
import style from '../Filter/Filter.module.css'
import PropTypes from 'prop-types';

export default class Filter extends Component{
    render(){
        const {filterSubmit,seartch} = this.props
        return(
        <form onSubmit={filterSubmit} className={style.form}>
        <h2>Contacts</h2>
        <label className={style.label}>
            Find contact by name
            <input type="text" onChange={seartch} className={style.input} name="filter"/>
        </label>
    </form>
    )   
    }
}

Filter.propTypes = {
    filterSubmit:PropTypes.func,
    seartch:PropTypes.func
}