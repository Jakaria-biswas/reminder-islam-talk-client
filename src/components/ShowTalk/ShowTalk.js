import React, { useEffect, useState } from 'react';
import './ShowTalk.css'
import ShowSingleTalk from '../ShowSingleTalk/ShowSingleTalk';

const ShowTalk = () => {
    const [allTalk, setAllTalk] = useState([]);
    useEffect(() => {

        fetch('http://localhost:4949/getAllTalk')
            .then(res => res.json())
            .then(data => setAllTalk(data))

    }, [])

    return (
        <div className='container'>
            <p>এখানে মোট কথা আছে : {allTalk.length} টি</p>

            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    allTalk.map(talk => <ShowSingleTalk talk={talk}></ShowSingleTalk>)
                }


            </div>

        </div>
    );
};

export default ShowTalk;