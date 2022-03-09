import React, {useState} from 'react'
import {BootstrapTable,TableHeaderColumn,Grid} from "react-bootstrap-table";
import {Button,
    Card,
    Container,
    Row,
    Col} from 'react-bootstrap';
  
import studentInfoApi from '../api/studentInfoApi';
import Config from '../api/config';

function Admin() {

    const [tblFoodsToBeOmmited, settblFoodsToBeOmmitedData] = useState([])

    const showRowDetailInfo = (_id,_name) => (
      console.log("Data from row from an external function",_id + ' ' + _name)
    )


    async function fetchblFoodsToBeOmmitedData() {
        let _FTBOM = [];
        var myAPI = new studentInfoApi;
        _FTBOM = await myAPI.fetchblFoodsToBeOmmitedData()
        //console.log(_FTBOM)
        settblFoodsToBeOmmitedData(_FTBOM)
    }

    function CellFormatter(cell, row) {

        /* //using a hyperlink
        return (<div><a href="#/Admin" onClick={ ()=> {
          showRowDetailInfo(row.SequenceID,row.FOmmittedName)
        }}>Check this out</a></div>);
        */
   
    //using a button  
    return (<div><Button variant='warning'
                  onClick={() => {
                    showRowDetailInfo(row.SequenceID, row.FOmmittedName)
                   }}>Select</Button></div>);
  }

    const options = {
        exportCSVText: 'Export CSV',
        insertText: 'Insert',
        deleteText: 'Delete',
        saveText: 'Save',
        closeText: 'Close',
    
        sizePerPage: 25,
        sortOrder: 'desc',
        prePage: 'Prev',
        nextPage: 'Next',
        firstPage: 'First',
        lastPage: 'Last',
        paginationShowsTotal: renderShowsTotal
      };


      function renderShowsTotal(start, to, total) {
        return (
            <p style={{color: 'black'}}>
            From {start} to {to}. Total: {total}&nbsp;&nbsp;
            </p>
        );
    }

  return (
    <div>
    <main>
       <Container>         
       
       <br>
       </br>
       <Row>
          <Col sm={12}>
          <Button variant="secondary" onClick={fetchblFoodsToBeOmmitedData}>Fetch FTBO Items</Button>
          </Col>
        </Row>
   
        <br></br>

        <Row>
          <Col sm={12}> 
            <h2>FTBO Items</h2>
            <BootstrapTable data={tblFoodsToBeOmmited} striped hover options={options}
              pagination           
            >
              <TableHeaderColumn row="1" width="10%" editable={false} isKey dataField="SequenceID" dataFormat={CellFormatter}>Download</TableHeaderColumn>
              <TableHeaderColumn row="1" width="90%" dataField="FOmmittedName">Name</TableHeaderColumn>      
            </BootstrapTable>
          </Col>
        </Row>
       </Container>
    </main>
    </div>

  )
}

export default Admin