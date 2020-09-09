import React from "react";

class GithubRepos extends React.Component{
    constructor(props) {
        super(props);
  }

    render() {
        return (
            <React.Fragment>
               <div className="card mt-3">
                   <div className="card-header">
                       <p className="h4">Your Repositories</p>
                   </div>
                   <div className="card-body">
                       <ul className="list-group">
                           {
                               this.props.repos.map((repo) => {
                                   return(
                                       <li className="list-group-item d-flex justify-content-around">
                                            <p className="h5">
                                                <a href={repo.html_url} target="_blank">{repo.name}</a>
                                            </p>
                                           <span className="badge badge-success">{repo.stargazers_count} Stars</span>
                                           <span className="badge badge-primary">{repo.watchers_count} Watches</span>
                                       </li>
                                   )
                               })
                           }
                       </ul>
                   </div>
               </div>
            </React.Fragment>
        );
    }
}
export default GithubRepos;
