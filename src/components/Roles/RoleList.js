import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardTitle, Button, Table } from "reactstrap";
import { getRoles } from "../redux/setRoles/rolesActions";
import SetRole from "./SetRole";

const RoleList = () => {
    const [showSetRole, setShowSetRole] = useState(false)



    const userData = useSelector((state) => state.data)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getRoles())
    }, [])




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
                                        <Button color='danger'>Remove</Button>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </Table>
                </CardBody>
            </Card>
        </div>
        <SetRole show={showSetRole} handleClose={() => setShowSetRole(!showSetRole)} />
    </>);
}

export default RoleList;