import { Grid, Input, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        if (!submitted) {
            setId(0);
            setName('');
        }
    }, [submitted]);

    useEffect(() => {
        if (data?.id && data.id !== 0) {
            setId(data.id);
            setName(data.name);
        }
    }, [data]);

    return (
        <Grid
            container
            spacing={2}
            sx={{
                p: 2,
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'}>User Form</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                    component={'label'}
                    htmlFor='id'
                    sx={{ mr: 1 }}
                >
                    ID:
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '50%' }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <Typography
                    component={'label'}
                    htmlFor='name'
                    sx={{ mr: 1 }}
                >
                    Name:
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '50%' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'left' }}>
                <Button
                    sx={{
                        mx: 'auto',
                        backgroundColor: '#00c6e6',
                        color: '#000',
                        '&:hover': {
                            backgroundColor: '#00c6e6',
                            opacity: 0.7
                        }
                    }}
                    onClick={() => isEdit ? updateUser({ id, name }) : addUser({ id, name })}
                >
                    {isEdit ? 'Update' : 'Add'}
                </Button>
            </Grid>
        </Grid>
    );
}

export default UserForm;
