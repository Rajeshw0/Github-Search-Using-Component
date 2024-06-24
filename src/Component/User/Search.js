import React, { Component } from 'react';
import PropTypes from 'prop-types';



export class Search extends Component {
    state = {
        text:''
    }
    static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    }
    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.text);
        if(this.state.text === ''){
           this.props.setAlert('Please Enter Something ','light')
        }else{
                this.props.searchUsers(this.state.text);
                this.setState({text:""});
        }
        
    }

    onChange  = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        return (
            <div>
                <form className = "form" onSubmit = {this.onSubmit}>
                    <input type = "text" name = "text" placeholder = "Search Users...." value = {this.state.text} onChange = {this.onChange}/>
                    <input type = "submit" value = "Search" className = "btn btn-dark btn-block"/>
                </form>
                {this.props.showClear &&  <button className = "btn btn-light btn-block" 
                onClick = {this.props.clearUsers}>Clear Users</button>}
            </div>
        )
    }
}

export default Search
