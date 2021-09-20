import { MdDeleteForever } from "react-icons/md"

const Notes = () => {
    return (
        <div className="note">
            <span>This is first note</span>
            <div className="note-footer">
                <small>20/09/2021</small>
                <MdDeleteForever className="delete-icon" size="1.3em" />
            </div>
        </div>
    )
}


export default Notes