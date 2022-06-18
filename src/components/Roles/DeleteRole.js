import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { deleteRole } from "../redux/setRoles/rolesActions";

const DeleteRole = ({ selectedId, show, handleClose }) => {

    const dispatch = useDispatch()
    const deleteRoleHandler =()=>{
        dispatch(deleteRole(selectedId))
        handleClose()
    }


    return (<>

        <Modal isOpen={show} toggle={() => handleClose()}>
            <ModalHeader>
                Delete role
            </ModalHeader>
            <ModalBody>
                Are you sure to delete this role ?

            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={deleteRoleHandler}>Remove</Button>
                <Button color="success" onClick={() => handleClose()}>cancle</Button>
            </ModalFooter>
        </Modal>
    </>);
}

export default DeleteRole;