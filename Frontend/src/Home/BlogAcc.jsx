import React from 'react'
import { Accordion, Image } from 'react-bootstrap'

const BlogAcc = ({ele}) => {
  return (
    <Accordion.Item eventKey={ele._id} style={{
      display : !ele.title && 'none',
      marginTop : '2rem'
    }}>
      <Accordion.Header>
        <h3>
          {ele.title}
        </h3>
        </Accordion.Header>
      <Accordion.Body>
      <Image className='theImg w-100 object-fit-cover' src={`/src/uploads/${ele.imageName}`} />
      <div style={{
        fontSize : '1.5rem'
      }} dangerouslySetInnerHTML={{ __html: ele.description }} />
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default BlogAcc