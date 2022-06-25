import Box from '@mui/material/Box';
import {useLocation} from "react-router-dom";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from "@mui/material/TableCell"
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function totalPrice(price, qty, gstRate){
    return price*qty + gstRate;
}

export default function Bill() {
  const location = useLocation()
  const {props} = location.state
  const {username} = location.state
  const {item_id} = location.state
  const {status} = location.state

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}><li>{type}</li></button>
  } 

  function invoiceTotal(pr){
    let price =0;
    pr.map((item) =>(
        price += item.price*item.quantity + item.gstRate
    ))
    return price;
  }

  return (
    <div className="boxBill">
    <Box
      sx={{
        width: 500,
        height: "auto",
        backgroundColor: "primary.colorLightBlack",
        color: "primary.contrastText",
        borderRadius: "15px",
        padding: "20px"
      }}

      element={<Paper elevation={5}/>}
    >
    
        <div>
          <div className="firstLine">
            <p>{`#`}{item_id}</p>
            <Button type={status}/>
          </div>
        <h1>{username}</h1>

        <TableContainer >
      <Table sx={{ minWidth: 500 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell style={{borderBottom:"none"}}  align="center" colSpan={2} >
              Details
            </TableCell>
            <TableCell style={{borderBottom:"none"}}  align="center" colSpan={1}>Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{borderBottom:"none"}} >Items</TableCell>
            <TableCell style={{borderBottom:"none"}}  align="center">Qty.</TableCell>
            <TableCell style={{borderBottom:"none"}}  align="center">GST rate</TableCell>
            <TableCell style={{borderBottom:"none"}}  align="center">Price(1 unit)</TableCell>
            <TableCell style={{borderBottom:"none"}}  align="center">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.map((row) => (
            <TableRow key={row._id}>
              <TableCell style={{borderBottom:"none"}} >{row.productName}</TableCell>
              <TableCell style={{borderBottom:"none"}}  align="center">{row.quantity}</TableCell>
              <TableCell style={{borderBottom:"none"}}  align="center">{row.gstRate}</TableCell>
              <TableCell style={{borderBottom:"none"}}  align="center">{ccyFormat(row.price)}</TableCell>
              <TableCell style={{borderBottom:"none"}}  align="center">{ccyFormat(totalPrice(row.price, row.quantity, row.gstRate))}</TableCell>
            </TableRow>
          )  
          )}

         
          <TableRow>
            <TableCell style={{borderBottom:"none"}}  rowSpan={1}></TableCell>
            <TableCell style={{borderBottom:"none"}}  rowSpan={1}></TableCell>
            <TableCell style={{borderBottom:"none"}}  colSpan={2}>Total</TableCell>
            <TableCell style={{borderBottom:"none"}}  align="center">{ccyFormat(invoiceTotal(props))}</TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
    </Box>
    </div>
  )
}
