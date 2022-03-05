import { Box, Button, Container } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import {useNavigate } from 'react-router-dom';
import './AddBook.css'


const AddBooks = () => {
    const { register, handleSubmit, reset } = useForm();
    let navigate = useNavigate();

    const onSubmit = data => {

        axios.post('http://localhost:5000/books', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    console.log(data);
                    reset()
                    navigate('/')
                }
            })
    };


    const buttonStyle = {
        backgroundColor: 'white',
        textDecoration: 'none',
        color: '#222831',
        padding: '8px 26px',
        margin: '20px 0px',
        borderRadius: '10px',
        marginBottom: '10px'
    }
    const formStyle = {
        boxShadow: '2px 2px 2px 10px #222831',
        borderRadius: '10px',
        padding: '150px 10PX',
        background: '#222831',
        color: '#fff'
    }



    return (
        <Box>

            <Container>


                <Box style={formStyle}>
                    <h1>Add A Book</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-input" {...register("name", { required: true })} placeholder='Book Name' /> <br />
                        <input className="form-input" {...register("writer", { required: true })} placeholder='Writer Name' /> <br />
                        <input className="form-input" {...register("hints", { required: true })} placeholder='Summery' /> <br />
                        <input className="form-input" {...register("img", { required: true })} placeholder='Image' /> <br />
                        <input className="form-input" type="number" {...register("price", { required: true })} placeholder='Price' /> <br />
                        <Button><input style={buttonStyle}  type="submit" /></Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default AddBooks;