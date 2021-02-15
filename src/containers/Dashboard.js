// This file is exported to ---> src/Routes.js
// React required
import React from "react";
import { Link } from "react-router-dom"; 
import { useAppContext } from "../libs/contextLib";
// CSS
import "../css/Dashboard.css"
import { data as dummyPosts } from "../DummyData/data"
// -------------- Application Begins Bellow ------------ //

// Main Application
export default function Dashboard() {

    // Important variables 
    const { userId, userEmail, userFirstName, signedupDate, userLastName} = useAppContext(); 

    // Return UI
    return (
        <main id="Dashboard" className="border-bottom">

            {/* Header - Start */}
            <Header
                userId={userId}
                userEmail={userEmail}
                userFirstName={userFirstName}
                signedupDate={signedupDate}
                userLastName={userLastName} 
                posts={dummyPosts}
            /> 
            {/* Header - End */}

            {/* Posts - Start */}
            <Posts /> 
            {/* Posts - End */}

        </main>
    );
}

// Header
function Header(props) {

    // Important variables 
    const { userId, userEmail, userFirstName, userLastName, posts } = props

    // Return UI
    return (
        <header className="container-fluid border-bottom py-3 bg-light">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-3 text-center">
                    <h1>Dashboard </h1>
                    <Link to="/postnew" className="btn btn-warning"> + NEW POST <i className="fa fa-share"></i></Link> 
                </div>
                <div className="col-sm-3">
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item bg-light">User Id: {userId} </li>
                        <li className="list-group-item bg-light">Post Count: { posts.length}</li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <ul className="list-group list-group-flush"> 
                        <li className="list-group-item bg-light">First Name: {userFirstName} </li> 
                        <li className="list-group-item bg-light">Last Name: {userLastName}</li>
                        <li className="list-group-item bg-light">Email: {userEmail}</li>
                    </ul>
                </div>
            </div>
        </header>
        );
}

// User Posts Function
function Posts( ) {

    // Return UI
    return (
        <div className="container row mx-auto py-5">
            {
                dummyPosts.map((post, i) => {

                    // Important variables
                    const { imageA } = post.images;
                    const { postState } = post.address;
                    const { postId, userId, postStatus } = post;
                    const convertDate = new Date(post.createdAt);
                    const postedOn = convertDate.toDateString();
                    const price = Number(post.postPrice).toLocaleString();


                    // Return UI
                    return (
                        <div className="col-sm-6 col-md-4 text-white p-2" key={i++}>

                            <div className="card shadow-sm">

                                { /* Image - Start */}
                                <img src={imageA} />
                                { /* Image - End */}

                                { /* Overlay - Start */}
                                <div className="card-img-overlay">

                                    { /* Top Overlay */}
                                    <div className="overlay-top">
                                        <span className="badge badge-primary rounded">
                                            {postStatus} - {postedOn}
                                        </span>
                                    </div>

                                    { /* Bottom Overlay */}
                                    <div className="overlay-bottom">
                                        <p className="m-0"><small> {postState}</small></p>
                                        <p className="m-0"><b>${price}</b></p>
                                    </div>

                                </div>
                                { /* Overlay - End */}

                                { /* Body card - Start */}
                                <div className="card-body bg-white text-center">
                                    <div className="btn-group" style={{ zIndex: "1" }}>

                                        <Link to={`/postedit/${postId}`} className="btn btn-danger">
                                            <i className="fa fa-minus-square"></i> Edit
                                        </Link>

                                        <Link to={`/view/${postId}`} className="btn btn-info">
                                            <i className="fa fa-external-link-square"></i> View
                                        </Link>
                                    </div>
                                </div>
                                { /* Body card - End */}

                            </div>

                        </div>
                    );
                })
            }           
        </div>
        );
} 