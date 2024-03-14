import React from 'react'
import {Accordion, Container} from 'react-bootstrap'
import useFetchData from './useFetchData'
import BlogAcc from './BlogAcc'
import './Home.css'

const Home = () => {
    const [data , error] = useFetchData('/api/get/v1/blogs')
    return (
        <section>
            <Container>
                <div className="border-bottom mt-4 pb-3">
                    <h1>Read Today Blogs</h1>
                </div>
                <div className="row">
                    {!error && data.map((ele) => (
                        <Accordion defaultActiveKey="0">
                            <BlogAcc key={ele.id} ele = {ele} />
                        </Accordion>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Home