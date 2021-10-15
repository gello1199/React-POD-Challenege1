import React from "react"
import Colors from "./Colors"

class Costume extends React.Component {
    constructor(props) {
        super(props) //turning this.props = props
        // debugger
    }
    
    render() {
        const colorElement = this.props.colors.map(c => <Colors color={c} />)
        return(
            <>
            <p>{this.props.name}</p>
            <p>{this.props.type}</p>
            <ul>{colorElement}</ul>
            </>
        )

    }
}

export default Costume