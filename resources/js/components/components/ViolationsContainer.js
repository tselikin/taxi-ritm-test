import React from "react";
import ViolationsComponent from "./ViolationsComponent";

class ViolationsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            violations: [],
        };
    }

    getViolations = () => {
        axios.get('/violations').then(
            (response) => {
                console.log(response.data)
                this.setState({violations: [...response.data]})
            }
        )
    }

    componentDidMount = () => {
        this.getViolations()
    }


    render() {
        return(
                <ViolationsComponent violations={this.state.violations} />
        )
    }
}

export default ViolationsContainer;
