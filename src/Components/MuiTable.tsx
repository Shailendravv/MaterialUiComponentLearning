import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Jim",
    last_name: "McAnalley",
    email: "jmcanalley0@cloudflare.com",
    gender: "Male",
    ip_address: "227.110.62.117",
  },
  {
    id: 2,
    first_name: "Felisha",
    last_name: "Skune",
    email: "fskune1@aol.com",
    gender: "Female",
    ip_address: "178.159.236.60",
  },
  {
    id: 3,
    first_name: "Fitzgerald",
    last_name: "Atmore",
    email: "fatmore2@cisco.com",
    gender: "Male",
    ip_address: "64.124.8.224",
  },
  {
    id: 4,
    first_name: "Shelley",
    last_name: "Summerlad",
    email: "ssummerlad3@nifty.com",
    gender: "Female",
    ip_address: "3.12.150.65",
  },
  {
    id: 5,
    first_name: "Fayth",
    last_name: "Shane",
    email: "fshane4@gravatar.com",
    gender: "Bigender",
    ip_address: "52.128.72.157",
  },
  {
    id: 6,
    first_name: "Fee",
    last_name: "Pengilly",
    email: "fpengilly5@google.com.br",
    gender: "Male",
    ip_address: "27.89.154.218",
  },
  {
    id: 7,
    first_name: "Chickie",
    last_name: "Towne",
    email: "ctowne6@wsj.com",
    gender: "Female",
    ip_address: "222.53.57.116",
  },
  {
    id: 8,
    first_name: "Karolina",
    last_name: "Canape",
    email: "kcanape7@bing.com",
    gender: "Female",
    ip_address: "15.182.115.97",
  },
  {
    id: 9,
    first_name: "Briana",
    last_name: "Sealey",
    email: "bsealey8@trellian.com",
    gender: "Female",
    ip_address: "22.180.0.14",
  },
  {
    id: 10,
    first_name: "Gabe",
    last_name: "Hasley",
    email: "ghasley9@vk.com",
    gender: "Male",
    ip_address: "211.183.254.35",
  },
];
