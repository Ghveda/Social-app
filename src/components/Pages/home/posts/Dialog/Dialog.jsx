import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import styled from 'styled-components';
import axios from 'axios';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const TextareaStyled = styled.textarea`
padding: 0.5rem;
outline: none;
font-size: 0.8rem;

`;


const DialogPage = ({ data, id }) => {

    const [open, setOpen] = useState(false);
    const [changedData, setChangedData] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async (id, data) => {
        await axios.post('http://localhost:3000/posts/update', {
            id: id,
            data: changedData
        })
        .then(response=>console.log(response), setOpen(false), window.location.reload())

        .catch((error)=>console.log(error))
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Edit your own code!"}</DialogTitle>
                <DialogContent>
                    <TextareaStyled defaultValue={data}  onChange={(e)=>setChangedData(e.target.value)}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>handleClose(id,data)}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogPage;
