import React, { useState } from 'react';
import axios from 'axios';

const AddArticle = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [fileName, setFileName] = useState('');


    const onChangeFile = e => {
        setFileName(e.target.files[0]);
        // console.log(e.target);
    }



    const handleSubmit = e => {
        e.preventDefault();


        // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
        const formData = new FormData();
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('img', fileName);
        console.log(formData);


        setTitle('');
        setDesc('');
        setFileName('');

        axios.post('http://localhost:4000/api/article/add', formData)
            .then(res => console.log(res))
            .catch(err => console.error(err));


    }











    return (
        <div className="AddArticle">
            <h2>Add new Article</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-row">
                    <label htmlFor="title">Enter article title</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} id="title" />
                </div>
                <div className="form-row">
                    <label htmlFor="desc">Enter article description</label>
                    <textarea onChange={e => setDesc(e.target.value)} name="" id="desc" cols="142" rows="3"></textarea>
                </div>
                <div className="form-row">
                    <label htmlFor="img">Upload img file</label>
                    <input onChange={onChangeFile} type="file" name="img" id="img" />
                </div>
                <div className="form-row btn-wrap">
                    <button type="submit" className="btn" >Add Article</button>
                </div>
            </form>
        </div>
    )
}

export default AddArticle;
