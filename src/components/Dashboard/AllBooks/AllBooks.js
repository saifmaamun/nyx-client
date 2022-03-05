import { Box, Button, Container, Grid, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://intense-garden-92996.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [books]);

    const handleDelete = id => {
        console.log(id)
        const url = `https://intense-garden-92996.herokuapp.com/books/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('this will be deleted')
                    const remaining = books.filter(book => book._id !== id)
                    setBooks(remaining)
                }
            })
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
    const cellStyle = {
        padding: '10px auto',
        color: 'white'
    }
    const allProducts = {
        boxShadow: '2px 2px 2px 2px #222831',
        borderRadius: '10px',
        backgroundColor: '#222831',
        color: '#fff'
    }




    return (
        <Container>
            <Typography variant="h3" sx={{ my: 5, fontWeight: 600 }}>
                All Products
            </Typography>
            <TableContainer component={Paper}>
                <Table style={allProducts} sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={cellStyle} align="left">Book Name</TableCell>
                            <TableCell style={cellStyle} align="left">Description</TableCell>
                            <TableCell style={cellStyle} align="left">Price</TableCell>
                            <TableCell style={cellStyle} align="left">Image</TableCell>
                            <TableCell style={cellStyle} align="left">Action</TableCell>
                        </TableRow>
                        {books.map((book) => (
                            <TableRow
                                key={book._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={cellStyle} align="left">{book.name}
                                    <br /><br /><br /> Written by <br />{book?.writer}</TableCell>
                                <TableCell style={cellStyle} align="left">{book.hints}</TableCell>
                                <TableCell style={cellStyle} align="left">${book.price}</TableCell>
                                <TableCell style={cellStyle} component="th" scope="row">
                                    <img style={{ width: '100%' }} src={book.img} alt="" />
                                </TableCell >
                                <TableCell>

                                
                                <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <div style={cellStyle} align="left">
                                            <Link style={{textDecoration:"none"} } to={`update/${book._id}`}>
                                                <Button style={buttonStyle} onClick={() => navigate(`update/${book._id}`)}>Update</Button>
                                            </Link>
                                        </div>
                                    <div style={cellStyle} align="left"><Button style={buttonStyle} onClick={() => handleDelete(book._id)}>Remove</Button></div>
                                </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default AllBooks;