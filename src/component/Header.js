import React from "react";
import {Dropdown,DropdownButton} from 'react-bootstrap'
import FilePersonIcon from "../icons/Personfill";
import DropdownItem from "react-bootstrap/DropdownItem";

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        let drop = <FilePersonIcon></FilePersonIcon>
        return(
            <div>
                <header className="App-header">
                    <div>
                        <DropdownButton id="dropdown-basic-button" title={drop}>
                            <Dropdown.Item href="#/action-1">Log Out</Dropdown.Item>

                        </DropdownButton>

                    </div>
                </header>
            </div>
        )
    }
}
