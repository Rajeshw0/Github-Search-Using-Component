import React, { Component, Fragment } from 'react'
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import Repos from '../Repos/Repos';



export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
        repos: PropTypes.array.isRequired,
        getUserRepos: PropTypes.func.isRequired
      }
    
    render() {
        const {
            name,
            avatar_url,
            location,
            html_url,
            bio,
            blog,
            login,
            company,
            followers,
            following,
            public_repos,
            public_gists,
            hirable,
        }=this.props.user;
        const {loading,repos} = this.props;
        if (loading) return <Spinner/>
        return (
            <Fragment>
                   <h3>{name}</h3>
                   <Link to = "/" className = "btn btn-light">Back to Home</Link>
                   hirable :{''}
                   {hirable ? (<i className = "fas fa-check text-success"></i> ):(<i className
                   = "fas fa-times-circle text-danger"></i>) }

                    <div className = "card grid-2">
                        <div className = "all-center">
                            <img src = {avatar_url} className = "round-img" alt = "Avatar" style ={{width: '150px'}}/>
                            <h1>{name}</h1>
                            <h3>location: {location}</h3>
                        </div>
                    <div>
                         {bio &&( <Fragment>
                              <h3>Bio</h3>
                              <p>{bio}</p>
                            </Fragment> )
                            }
                            <a href = {html_url} target = "_blank" className = "btn btn-dark my-1">Visit GitHub</a>
                            <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                                <ul>
                                <li>
                                    {login && <Fragment>
                                    <strong>Username: </strong> {login}
                                    </Fragment>}
                                </li>
                                <li>
                                    {login && <Fragment>
                                    <strong>Company: </strong> {company}
                                    </Fragment>}
                                </li>
                                <li>
                                    {login && <Fragment>
                                    <strong>Blog: </strong> {blog}
                                    </Fragment>}
                                </li>
                                </ul>
                          </div>
                    </div>
                    
                    <div className="card text-center">
                        <div className="badge badge-primary">
                            followers: {followers}
                        </div>
                        <div className="badge badge-success">
                            following: {following}
                        </div>
                        <div className="badge badge-light">
                            Public Repos: {public_repos}
                        </div>
                        <div className="badge badge-dark">
                            Public Gists: {public_gists}
                        </div>
                    </div>
                    <Repos repos= {repos}/>
                </Fragment>
        )
    }
}

export default User;
