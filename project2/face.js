import React, { Component } from "react";
import Darkmode from "./darkmode";
//import "./dark.css";
import Tenzies from "./tenzies";
import "./tenzies.css";


class Project2 extends Component {
    render() {
        return (
            <>
                <div className="body">
                    {/* <Darkmode/> */}
                    <Tenzies/>

                </div>
            </>

        );
    }
}


export default Project2;