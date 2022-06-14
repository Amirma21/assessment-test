import { Form, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import CreatableSelect from 'react-select/creatable'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetRols } from "../redux/setRoles/rolesActions";




const users = [
    { value: 'farzad', label: 'Farzad' },
    { value: 'ali', label: 'Ali' },
    { value: 'erfan', label: 'Erfan' },
    { value: 'farid', label: 'Farid' },
    { value: 'mehdi', label: 'Mehdi' }
]

const roles = [
    { value: 'adviser', label: 'Adviser' },
    { value: 'client', label: 'Client' }
]

const SetRole = ({ show, handleClose }) => {


    const [formData, setFormData] = useState({
        userName: "", role: "" 
    })



    const dispatch = useDispatch()




    const setRoleBtnHandler = () => {
        dispatch(SetRols(formData))
        handleClose()
    }



    return (
        <>
            <Modal isOpen={show} toggle={() => handleClose()} >
                <ModalHeader>
                    Create Room
                </ModalHeader>
                <ModalBody>

                    <Form>

                        <FormGroup>
                            <Label>user name</Label>
                            <CreatableSelect name="userName" defaultValue={formData.userName}
                                options={users}
                                onChange={(e) => setFormData({ ...formData, userName: e.value })}>
                            </CreatableSelect>
                            <Label>Role</Label>
                            <CreatableSelect name="role" defaultValue={formData.role}
                                classNamePrefix='select' options={roles}
                                onChange={(e) => setFormData({ ...formData, role: e.value , id : Date.now() })}>
                            </CreatableSelect>
                        </FormGroup>

                    </Form>

                </ModalBody>
                <ModalFooter>
                    <Button disabled={!formData.userName && !formData.role} color="success" onClick={setRoleBtnHandler}> set Role</Button>
                    <Button color="danger" onClick={() => handleClose()}> cancle</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default SetRole;