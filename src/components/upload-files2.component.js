import React, {useState} from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import {Button,
  Card,
  Row,
  Col} from 'react-bootstrap';

//https://www.filestack.com/fileschool/react/react-file-upload/
function UploadFilesLight()
{
    const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:54751/api/UploadFiles/upload/P00149021';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  return (
    <div className="UploadFilesLight">
      <Container>
        <Row>
          <Col sm={12}>
            <form onSubmit={handleSubmit}>
              <h1>React File Upload</h1>
              <input type="file" onChange={handleChange} />
              <button type="submit">Upload</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default UploadFilesLight;