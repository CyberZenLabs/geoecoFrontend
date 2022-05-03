import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const AdminForm = () => {
    const classes = useStyles();

    const [name, getName] = useState('');
    const [lastName, getLastName] = useState('');
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');

    const onChange = (status) => (e) => {
        console.log('>>>>>>>>>', e);
        switch (status) {
            case 'name':
                getName(e.target.value)
                break;
            case 'lastName':
                getLastName(e.target.value);
                break;
            case 'email':
                getEmail(e.target.value);
                break;
            case 'pass':
                getPassword(e.target.value);
                break;
            default:
                break;
        }
    }


    return (
        <Container maxWidth="sm">
            
            <form className={classes.root} noValidate autoComplete="off">
            <Grid 
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={5}>
                    <Typography variant="h4" gutterBottom>
                        Анкета
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <TextField onChange={onChange("name")} required id="standard-required" label="Имя" value={name} />
                </Grid>
                <Grid item xs={5}>
                    <TextField onChange={onChange("lastName")} required id="standard-required" label="Фамилия" value={lastName} />
                </Grid>
                <Grid item xs={5}>
                    <TextField onChange={onChange("email")} required id="standard-required" label="Электроная почта" value={email} />
                </Grid>
                <Grid item xs={5}>
                    <TextField onChange={onChange("pass")} required id="standard-required" label="Пароль" value={password} />
                </Grid>
                <Grid  item xs={5}>
                <Button variant="contained" color="primary">
                    Подтверить
                </Button>
                </Grid>
            </Grid>
                {/* <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
                <TextField required id="standard-required2" label="Required" defaultValue="Hello World" />
                <TextField required id="standard-required3" label="Required" defaultValue="Hello World" />
                <TextField required id="standard-required4" label="Required" defaultValue="Hello World" /> */}
            </form>
            {/* <div>Kirdro</div> */}
        </Container>
    )
}

export default AdminForm