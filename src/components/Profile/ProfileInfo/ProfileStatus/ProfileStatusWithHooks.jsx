import React, {useState} from "react";

function ProfileStatusWithHooks(props) {
    let [editMode,setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    const toggleActivateEditMode = () =>  {
        setEditMode(!editMode);
        props.upUserStatus(status);
    } ;
    const changeStatus = (e) => ( setStatus(e.currentTarget.value));

    return (
        <>
            <div>{!editMode &&
            <span onDoubleClick={setEditMode}>{status} </span>
            }</div>
            <div>{editMode &&
            <input onChange={changeStatus} onBlur={toggleActivateEditMode} type="text"
                   value={status}/>}</div>
        </>
    )


}

export default ProfileStatusWithHooks;