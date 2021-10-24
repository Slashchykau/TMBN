import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status

    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.upUserStatus(this.state.status)
    }
    changeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                <div>{!this.state.editMode &&
                <span onDoubleClick={this.activateEditMode}>{this.state.status || '---'} </span>
                }</div>
                <div>{this.state.editMode &&
                <input onChange={this.changeStatus} onBlur={this.deactivateEditMode} type="text"
                       value={this.state.status}/>}</div>


            </>
        )
    }


}

export default ProfileStatus;