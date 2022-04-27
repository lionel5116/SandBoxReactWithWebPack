//import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
//import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import ToolkitProvider, { Search,CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import studentInfoApi from '../api/studentInfoApi';
import React, {useState} from 'react'
import { Pencil  } from 'react-bootstrap-icons';
import {Button,
    Card,
    Container,
    Row,
    Col,
  Modal} from 'react-bootstrap';

//https://react-bootstrap-table.github.io/react-bootstrap-table2/

function SampleBootstrapTableNext() {
    const [tblFoodsToBeOmmited, settblFoodsToBeOmmitedData] = useState([])
    const [show, setShow] = useState(false);
    const [_nSequenceID,setSequenceID]  = useState(0)
    const [_FOmmittedName,setFOmmittedName]  = useState("")


    const { ExportCSVButton } = CSVExport;

    const columns = [{
        dataField: 'SequenceID',
        text: 'SequenceID',
        formatter: CellFormatter,
      }, {
        dataField: 'FOmmittedName',
        text: 'FOmmittedName'
      }, ];


      function showRowDetailInfo(_id,_name){
        console.log("Data from row from an external function",_id + ' ' + _name)
     
     }
      function CellFormatter(cell, row) {
                            return (<div> <Pencil 
                                onClick={() => {
                                    showRowDetailInfo(row.SequenceID, row.FOmmittedName)
                                }}/></div>);
  }

  
    const rowStyle2 = (row, rowIndex) => {
        const style = {};
        if (row.id > 3) {
          style.backgroundColor = '#c8e6c9';
        } else {
          style.backgroundColor = '#00BFFF';
        }
      
        if (rowIndex > 2) {
          style.fontWeight = 'bold';
          style.color = 'white';
        }
      
        return style;
      };

      async function fetchblFoodsToBeOmmitedData() {
        let _FTBOM = [];
        var myAPI = new studentInfoApi;
        _FTBOM = await myAPI.fetchblFoodsToBeOmmitedData()
        //console.log(_FTBOM)
        settblFoodsToBeOmmitedData(_FTBOM)
    }

const products = [
    { id: 1, name: "Item 1", alert: false },
    { id: 2, name: "Item 2", alert: true },
    { id: 3, name: "Item 3", alert: false },
    { id: 4, name: "Item 4", alert: true },
    { id: 5, name: "Item 5", alert: false },
    { id: 6, name: "Item 6", alert: true }
  ]
  const rowClasses = row => (row.alert ? "alert-row" : "");
  


  const rowStyle3 = {  height: '10px', padding: '2px 0' };
  
  const rowStyle = {  
                      height: '10px', 
                      paddin: '1px 0' };

  return (


      <div style={{ padding: "20px" }}>
          <main>
              <Container>
                   <ToolkitProvider
                   keyField="id"
                   data={tblFoodsToBeOmmited}
                   columns={columns}
                  
                    exportCSV
                    >
                    {
                        props => (
                        <div>
                            <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
                            <hr />
                            <BootstrapTable { ...props.baseProps } 
                               rowStyle={rowStyle3}
                               pagination={ paginationFactory()}
                               striped
                            />
                        </div>
                        )
                    }
                    </ToolkitProvider>
                    <h1 className="h2">State</h1>
                  <button onClick={() => fetchblFoodsToBeOmmitedData()}>fetch Data and Bind</button>
              </Container>
          </main>


      </div>
  )
}

export default SampleBootstrapTableNext