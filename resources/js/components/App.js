import React from "react";
import AddViolationModalContainer from "./components/AddViolationModalContainer";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalShowing: false,
            rules: []
        };
    }

    toggleModal = () => {
        this.setState({isModalShowing: !this.state.isModalShowing})
    }


    render() {
        return(
            <div>
                <button className="m-0.5 bg-red-100 p-1" onClick={() => this.toggleModal()}>Добавить нарушение</button>
                { this.state.isModalShowing &&
                    <AddViolationModalContainer toggleModal={this.toggleModal} />
                }

            </div>
        )
    }
}

export default App;
