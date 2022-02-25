import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import React from 'react';

export default function Cards({title}) {
    console.log(title)
    return (
        <>
            <Card style={{ width: '18rem', margin: '20px auto', display: 'flex', justifyContent: 'space-evenly'}}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title style={{fontWeight: 'bold'}}>{title}</Card.Title>
                    <Card.Text style={{fontWeight: 'normal'}}>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}