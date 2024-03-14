import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/react-quill'
import 'react-quill/dist/quill.snow.css';
import { Button, Container } from 'react-bootstrap';
import './CreateBlog.css'
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote' ],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['align', 'direction'],
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        [{ 'color': [] }, { 'background': [] }] 
    ]};
    
const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'align', 'direction',
    'color', 'background',
];

const CreateBlog = () => {
    const [title , setTitle] = useState('')
    const [image , setImage] = useState(null)
    const [des , setDes] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title' , title)
        formData.append('description' , des)
        formData.append('file' , image)

        handelBlogSubmit(formData)
    };

    const handelBlogSubmit = async (data) => {
        try {
            const res = await axios.post('/api/post/v1/createblog' , data , {
                    headers : {
                        'Content-Type': 'multipart/form-data',
                    }
                })
            if(res) {
                enqueueSnackbar('uploading successfully !', { variant: 'success' });
                setTitle('')
                setImage(null)
                setDes('')
            }
        } catch (error) {
            enqueueSnackbar(error, { variant: 'error' });
        }
    }

    return (
        <section>
            <Container>
                <div className="border-bottom mt-4 mb-5 pb-3">
                    <h1>Create Blogs</h1>
                </div>
                <form action=""  onSubmit={handleSubmit}>
                    <div className="title">
                        <label htmlFor="title mt-4">Blog Title</label>
                        <input 
                            type="text" 
                            placeholder='Enter Blog Title' 
                            className='w-100 border p-3 mt-3'  
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="imageUploader mt-4">
                        <label htmlFor="uploader" className='w-100 '>
                            Uploader
                        </label>
                        <input 
                            type="file" 
                            className='w-100 border p-3 mt-3' 
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="description mt-4 mb-5 ">
                        <label htmlFor="">Description</label>
                        <ReactQuill
                            theme="snow"
                            modules={modules}
                            formats={formats}
                            className='mt-3'
                            style={{
                                height : '30vh',
                                cursor : 'text',
                            }}
                            receiveMsg
                            value={des}
                            onChange={(html) => setDes(html)}
                        >
                            {/* {theSaveFile && <div dangerouslySetInnerHTML={{ __html: theSaveFile }} />} */}
                        </ReactQuill>
                    </div>
                    <div 
                        className="btnBox" 
                        style={{
                            marginTop : '6rem'
                        }}
                    >
                        <Button variant='dark' type='submit' >Submit</Button>
                    </div>
                </form>
            </Container>
        </section>
    )
}

export default CreateBlog