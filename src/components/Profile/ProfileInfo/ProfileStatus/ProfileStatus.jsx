
import React from "react";
class  ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState( {
        editMode: true})
    }
    deactivateEditMode() {
        this.setState( {
            editMode: true})
    }
    render() {
        return (
            <>
                <div >{!this.state.editMode &&
                <span onDoubleClick={this.activateEditMode.bind(this)}>{'+1'} </span>
                }</div>
            <div>{this.state.editMode &&
            <input onBlur={this.deactivateEditMode.bind(this)} type="text"value={'1'}/>}</div>


            </>
        )
    }


}
export default ProfileStatus;