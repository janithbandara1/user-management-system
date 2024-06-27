import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from 'axios';
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('https://bug-free-winner-vj57j65jpvrhw9x5-3001.app.github.dev/api/users')
            .then(response => {
                setUsers(response.data?.response || []);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const addUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name
        };

        Axios.post('https://bug-free-winner-vj57j65jpvrhw9x5-3001.app.github.dev/api/createuser', payload)
            .then(response => {
                getUsers();
                setSubmitted(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name
        };

        Axios.post('https://bug-free-winner-vj57j65jpvrhw9x5-3001.app.github.dev/api/updateuser', payload)
            .then(response => {
                getUsers();
                setSubmitted(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const deleteUser = (data) => {
        Axios.post('https://bug-free-winner-vj57j65jpvrhw9x5-3001.app.github.dev/api/deleteuser', data)
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <UserForm
                addUser={addUser}
                updateUser={updateUser}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
            />
            <UsersTable
                rows={users}
                selectedUser={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser={data => window.confirm('Are you sure you want to delete this user?') && deleteUser(data)}
            />
        </Box>
    );
}

export default Users;