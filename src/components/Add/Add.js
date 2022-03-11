import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link, useHref, useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const Add = () => {


    const [value, setValue] = useState('')


    const handleEditor = (event, editor) => {
        const data = editor.getData()
        setValue(data)
    }
    const history = useNavigate();
    
    const handleAdd = () => {

        const title = document.getElementById('title').value;
        const information = { title: title, description: value }
        console.log(information);

        fetch('http://localhost:4949/addTalk', {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(information)

        })
            .then(res => res.json())
            .then(data => {
                if(data){
                      alert('talk save successfully');
                      history('/')
                      
                }
            })



    }
    return (


        <div>
            <h2 className="text-center bg-primary text-white">لآ اِلَهَ اِلّا اللّهُ</h2>
            <div className='container'>



                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="title" />
                </div>

                <CKEditor
                    editor={ClassicEditor}
                    onChange={handleEditor}
                />

                <button onClick={handleAdd} className='bnt btn-primary p-2 m-2 font btn-sm'>save to </button>
                <Link to="/">back to home</Link>

                {/* <div dangerouslySetInnerHTML={{__html: value}}></div> */}


            </div>
        </div>
    );
};

export default Add;