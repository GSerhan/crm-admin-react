import './widgetLg.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {timestampToDate, firstLetterUppercase} from '../../utils/helper';

const WidgetLg = () => {

  const data = [
    {
      name: "Susan Carlson",
      image: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "1646649489",
      currency: "$",
      money: "122.00",
      status: "approved"
    },
    {
      name: "Susan Carlson",
      image: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "1646649489",
      currency: "$",
      money: "122.00",
      status: "approved"
    },
    {
      name: "Susan Carlson",
      image: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "1646649489",
      currency: "$",
      money: "122.00",
      status: "approved"
    },
    {
      name: "Susan Carlson",
      image: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "1646649489",
      currency: "$",
      money: "122.00",
      status: "approved"
    },
    {
      name: "Susan Carlson",
      image: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "1646649489",
      currency: "$",
      money: "122.00",
      status: "approved"
    },
    {
      name: "Susan Carlson",
      image: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      date: "1646649489",
      currency: "$",
      money: "122.00",
      status: "approved"
    }
  ]

  return (
    <div className='widgetLg'>
        <h3 className='mb-4'>Latest Transaction</h3>
        <TableContainer sx={{ maxHeight: 322 }} component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.image}/>
                {row.name}
              </TableCell>
              <TableCell>{timestampToDate(parseInt(row.date))}</TableCell>
              <TableCell>{row.currency}{row.money}</TableCell>
              <TableCell>{firstLetterUppercase(row.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )

}

export default WidgetLg;