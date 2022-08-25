import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import { Box } from '@mui/material'

export default function SearchArt() {
    return (
        <Box pt={3}>
            <Autocomplete
                disablePortal
                id="search-box"
                style={{ width: '40vw' }}
                options={artName}
                renderInput={(params) => (
                    <TextField {...params} label="Search for Art..." />
                )}
            />

            {/* not in project*/}
            <Stack
                sx={{
                    width: '100%',
                    paddingTop: '10%',
                }}
                spacing={2}
            >
                <Alert severity="warning" variant="outlined">
                    Be aware of awesomeness because someone amazing is reading
                    this!! :&#41;
                </Alert>
            </Stack>
        </Box>
    )
}

const artName = ['Goro', 'BMO', 'Anya', 'Rengoku']
