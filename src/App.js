import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Component/Layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './Component/User/Users';
import User from './Component/User/User';
import Search from './Component/User/Search';
import Alert from './Component/Layout/Alert';
import About from './Component/Pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    user:{},
    repos:[],
    loading: false,
    alert : null
  }
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   // console.log(345);
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   // console.log(res.data);
  //   this.setState({ users: res.data, loading: false });
  // }


  // search User from GitHub
  searchUsers = async text =>{
    // console.log(text)
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(res.data);
    this.setState({ users: res.data.items, loading: false });
  }
//get single user from github
  getUser = async (username)=>{
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(res.data);
    this.setState({ user: res.data, loading: false });
  }

  //clear Users from state
  clearUsers = () => this.setState({users: [], loading: false});


  // get User Repose from GitHub
  getUserRepos = async (username)=>{
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // console.log(res.data);
    this.setState({ repos: res.data, loading: false });
  }

  //clear Users from state
  clearUsers = () => this.setState({users: [], loading: false});


// set alert
  setAlert = (msg,type) =>{
    this.setState({alert :{msg , type }});
    setTimeout(() => this.setState({alert:null}),3000)
  }

  render() {
    // const numbers = [1, 2, 3, 4];
    return (
      <Router>
           <div className="App">
                {/* <Navbar title={numbers} icon='fab fa-github' /> */}
            <Navbar title='Github finder' icon='fab fa-github' />
            <div className="container">
              <Alert alert = {this.state.alert}/>
              <Switch>
             <Route exact path = '/' render ={props=>(
               <Fragment>
                  <Search searchUsers = {this.searchUsers} 
              clearUsers = {this.clearUsers} 
              showClear = {this.state.users.length > 0 ? true : false}
              setAlert = {this.setAlert}/>
              <Users loading={this.state.loading} users={this.state.users} />
               </Fragment>
             )}/>
             <Route exact path = '/about' component = {About}/>
                </Switch>
              <Route exact path = '/user/:login' render ={props=>(
                <User {...props} 
                getUser= {this.getUser}
                getUserRepos= {this.getUserRepos}
                 user = {this.state.user}
                 repos = {this.state.repos}
                  loading={this.state.loading} />
              )} />
             
            </div>

          </div>

      </Router>
      
    );
  }
}

export default App;