import React, { useEffect, useState } from 'react';
import './Detail.css'
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [detailTalk, setDetailTalk] = useState([])
    useEffect(() => {

        fetch(`http://localhost:4949/getDetailTalk/${id}`)
            .then(res => res.json())
            .then(data => setDetailTalk(data))

    }, [])
    return (
        <div>
            <h2 className="text-center bg-primary text-white">لآ اِلَهَ اِلّا اللّهُ</h2>
            <div className='container'>
                <div className='pt-5'>
                    <h4 className='pb-2 detail-title'> # {detailTalk.title}</h4>
                    <div className='detail-text' dangerouslySetInnerHTML={{ __html: detailTalk.description }}></div>
                </div>
            </div>
        </div>
    );
};

export default Details;