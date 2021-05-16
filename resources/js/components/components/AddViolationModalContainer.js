import React from "react";
import AddViolationModal from "./AddViolationModal";

class AddViolationModalContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rules: [],
        };
    }

    // toggleModal = () => {
    //     this.setState({isModalShowing: !this.state.isModalShowing})
    // }
    componentDidMount = () => {
        axios.get('/api/rules').then(
            (response) => {
                console.log(response.data.rules)
                this.setState({rules: [...response.data.rules]})
            }
        )
    }


    render() {
        return(
                <AddViolationModal rules={this.state.rules} toggleModal={this.props.toggleModal} />
        )
    }
}

export default AddViolationModalContainer;
