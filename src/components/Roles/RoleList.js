import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Button, Table } from "reactstrap";
import { deleteRole, getRoles } from "../redux/setRoles/rolesActions";
import DeleteRole from "./DeleteRole";
import SetRole from "./SetRole";

const RoleList = () => {
    const [showSetRole, setShowSetRole] = useState(false)
    const [showDeleteRoleModal , setShowDeleteRoleModal] =  useState(false)
    const [selectedId , setSelectedId] = useState()



    const userData = useSelector((state) => state.data)
    console.log(userData);

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getRoles())
    }, [])

    const deleteRoleHandler = (id) => {
       setSelectedId(id)
       setShowDeleteRoleModal(true)
    }




    return (<>
        <div className="width mt-1">
            <Card>
                <CardBody>
                    <CardTitle className='d-flex justify-content-between'>
                        <span className="fw-bold">Role List</span>
                        <Button color="primary" onClick={() => setShowSetRole(true)}>set role</Button>
                    </CardTitle>
                    <Table responsive>
                        <thead className="bg-light">
                            <tr>
                                <th>username</th>
                                <th>Role</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user) => {
                                return <tr key={user.id}>
                                    <td>
                                        {user.userName}
                                    </td>
                                    <td>{user.role}</td>
                                    <td className='text-center'>
                                        <Button color='danger' onClick={() => deleteRoleHandler(user.id)}>Remove</Button>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
        <SetRole show={showSetRole} handleClose={() => setShowSetRole(!showSetRole)} />
        <DeleteRole selectedId = {selectedId} show= {showDeleteRoleModal} handleClose = {()=>setShowDeleteRoleModal(!showDeleteRoleModal)} />
    </>);
}

export default RoleList;