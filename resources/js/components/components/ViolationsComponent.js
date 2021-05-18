import React from "react";

class ViolationsComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         violations: [],
    //     };
    // }

    render() {

        const violationsList = this.props.violations && this.props.violations.map(violation =>
                <tr key={violation.id}>
                    <td>{violation.id}</td>
                    <td>{violation.badboy}</td>
                    <td>{violation.moderator}</td>
                    <td>{violation.broken_rule}</td>
                    <td>{violation.server}</td>
                    <td>{violation.punishment_type}</td>
                    <td>{violation.duration}</td>
                    <td>{violation.created_at}</td>
                </tr>
            )

        return(
                <div>
                    <h3>violations table</h3>
                    <table>
                        <tbody>
                            {violationsList}
                        </tbody>

                    </table>
                </div>
        )
    }
}

export default ViolationsComponent;
