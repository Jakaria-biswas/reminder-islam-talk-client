import React from 'react';
import './ShowSingleTalk.css';
import { Link } from 'react-router-dom';

const ShowSingleTalk = ({ talk }) => {

    
    return (
        <div class="col">
        <div class="card">
          <div class="card-body">
            <p class="card-text"><Link to={`/talkId/${talk._id}`}>{talk.title}</Link></p>
          </div>
        </div>
      </div>


    );
};

export default ShowSingleTalk;