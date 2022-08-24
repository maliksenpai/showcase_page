import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SearchArt() {
  return (
    <div className='autocomplete-container'>
        <Autocomplete
        disablePortal
        id="search-box"
        style={{width: 300 , paddingLeft: "75%" }}
        options={artName}
        sx={{ width: 300}}
        renderInput={(params) => <TextField {...params} label="Search for Art..." />}
        />
    
    {/* not in project*/}
    <Stack sx={{ width: '100%', width: "50%", paddingLeft: "25%", paddingTop: "10%"}} spacing={2}>
      <Alert severity="warning" variant="outlined">Be aware of awesomeness because someone amazing is reading this!! :&#41;</Alert>
    </Stack>
    </div>
  );
}

const artName = ["Goro", "BMO", "Anya", "Rengoku"];