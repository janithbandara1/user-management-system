import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => { selectedUser({ id: row.id, name: row.name }) }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        onClick={() => { deleteUser({ id: row.id }) }}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell>No Data</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;