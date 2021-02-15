// This file is exported to --->  src/App.js
// React required
import React from "react";
// -------------- Application Begins Bellow ------------ //

export default function Footer() { 
    return ( 
        <footer id="Footer" className="container-fluid bg-white pt-5 pb-2">
             <SectionA/> 
             <SectionB/> 
        </footer> 
    );
}
function SectionA() {
    return (
        <section className="row">
            <div className="col-sm-3">
                <p>Popular Real Estate Markets</p>
                <ul style={{ listStyle: "none" }}>
                    <li>city, state Real Estate</li>
                    <li>city, state Real Estate</li>
                    <li>city, state Real Estate</li>
                    <li>city, state Real Estate</li>
                    <li className="text-primary"><small>SEE MORE</small></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <p>Popular Apartment Cities</p>
                <ul style={{ listStyle: "none" }}>
                    <li>city, state Apartments</li>
                    <li>city, state Apartments</li>
                    <li>city, state Apartments</li>
                    <li>city, state Apartments</li>
                    <li className="text-primary"><small>SEE MORE</small></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <p>Popular Resources</p>
                <ul style={{ listStyle: "none" }}>
                    <li>Free Landlord Software</li>
                    <li>Homes for Sale</li>
                    <li>Apartments and Houses for Rent</li>
                    <li>Ntanku ya Koteka</li>
                    <li className="text-primary"><small>SEE MORE</small></li> 
                </ul>
            </div>
            <div className="col-sm-3">
                <p>Listings By State</p>
                <ul style={{ listStyle: "none" }}>
                    <li>State 1 New Listings</li>
                    <li>State 2 New Listings</li>
                    <li>State 3 New Listings</li>
                    <li>State 4 New Listings</li>
                    <li className="text-primary"><small>SEE MORE</small></li> 
                </ul>
            </div>
        </section>
        );
}
function SectionB() {
    return (
        <section className="row border-top pt-3">
            <div className="col-sm-12 text-center">
                <p>2021 Turnpike Applications. Fiberabbit. All Rights Reserved</p>
            </div>
        </section>
        );
}