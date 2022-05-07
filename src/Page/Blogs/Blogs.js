import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import blogs1 from '../../images/blogs/javascript-vs-nodejs (1).png'
import blogs2 from '../../images/blogs/node-and-mongodb.png'
import blogs3 from '../../images/blogs/sql-and-nosql.png'
import blogs4 from '../../images/blogs/jwt.png'
const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center m-3'>Welcome To My Blogs</h1>
            <Row xs={1} md={2} className=" g-3">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={blogs1} />
                        <Card.Body>
                            <Card.Title>Difference between javascript and nodejs ?</Card.Title>
                            <Card.Text>
                                <ol>
                                    <li>JavaScript is programming language that is used for writing scripts on the website and NodeJs is a Javascript runtime environment.</li>
                                    <li>JavaScript can only be run in the browsers and NodeJs we can run javascript outside the browser with the help of NodeJs.</li>
                                    <li>JavaScript is basically used on the client side and NodeJs is mostly used on the server-side.</li>
                                    <li>JavaScript is used in fronted development and NodeJs is used in server-side development.</li>
                                    <li>JavaScript is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++ and NodeJs is written in C,C+++ and JavaScript</li>
                                </ol>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={blogs2} />
                        <Card.Body>
                            <Card.Title>When should you use nodejs and when should you use mongodb ?</Card.Title>
                            <Card.Text>
                                <ol>
                                    <h5>#NodeJs</h5>
                                    <li>Because i am know JavaScript then i keep the flavor of JavaScript and since i am build new website then i can face lot of problem.so i can use NodeJs for similar flavor of JavaScript.</li>
                                    <h5>#Mongodb</h5>
                                    <li>Mongodb is a document -oriented database program.it's mean Mongodb can store data like  JavaScript objects.</li>
                                    <li>Mongodb is use too much Because it is a NoSQL data base program</li>
                                </ol>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={blogs3} />
                        <Card.Body>
                            <Card.Title>Differences between SQL and NoSQL databases ?</Card.Title>
                            <Card.Text>
                                <ol>
                                    <h5>#SQL</h5>
                                    <li>SQL is a Structured Query Language.</li>
                                    <li>SQL database are vertically scalable.</li>
                                    <li>SQL database are table-based.</li>
                                    <h5>#NoSQL</h5>
                                    <li>NoSQL is a Not Only Structured Query Language.</li>
                                    <li>NoSQL database are document key and value.</li>
                                    <li>NoSQL database are non-table-based.</li>
                                </ol>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={blogs4} />
                        <Card.Body>
                            <Card.Title>What is the purpose of jwt and how does it work ? </Card.Title>
                            <Card.Text>
                                <ol>
                                    <li>JWT is a JSON Web Token.</li>
                                    <li>JWT have header ,payload,signature.</li>
                                    <li>JWT is verify the owner of some JSON data.</li>
                                    <li>JWT is an open standard to share security information between two parties-a client and server.</li>
                                </ol>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Blogs;