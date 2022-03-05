import { Box, Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateBooks.css'

const UpdateBooks = () => {
    const [book, setBook] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://intense-garden-92996.herokuapp.com/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, []);

    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedBook = { ...book };
        updatedBook.name = updatedName;
        setBook(updatedBook);
    }

    const handleWriterChange = e => {
        const updatedWriter = e.target.value;
        const updatedBook = { ...book };
        updatedBook.writer = updatedWriter;
        setBook(updatedBook);
    }

    const handleDescriptionChange = e => {
        const updatedDescription = e.target.value;
        const updatedBook = { ...book };
        updatedBook.hints = updatedDescription;
        setBook(updatedBook);
    }

    const handleImageChange = e => {
        const updatedImage = e.target.value;
        const updatedBook = { ...book };
        updatedBook.img = updatedImage;
        setBook(updatedBook);
    }

    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedBook = { ...book };
        updatedBook.price = updatedPrice;
        setBook(updatedBook);
    }


    const handleUpdateBook = e => {
        const url = `https://intense-garden-92996.herokuapp.com/books/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setBook({});
                    e.target.reset();
                    navigate('/')
                }
            })
        e.preventDefault();
    }









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
                    <h1>Update <span style={{color:"red"}}>{book.name}</span></h1>

                    <form onSubmit={handleUpdateBook}>
                        <input className="form-input" type="text" onChange={handleNameChange} value={book.name || ''} /> <br />
                        <input className="form-input" type="text" onChange={handleWriterChange} value={book.writer || ''} /> <br />
                        <input className="form-input"  type="text" onChange={handleDescriptionChange} value={book.hints || ''} /> <br />
                        <input className="form-input" type="text" onChange={handleImageChange} value={book.img || ''} /> <br />
                        <input className="form-input" type="number" onChange={handlePriceChange} value={book.price || ''} /> <br />
                        <Button><input style={buttonStyle} type="submit" value="Update" /></Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default UpdateBooks;