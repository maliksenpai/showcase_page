import { Fab } from '@mui/material'

const HelplessCharacterFAB = () => {
    return (
        <Fab
            aria-label="help"
            sx={{
                position: 'fixed',
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
            }}
        >
            <img
                src={'assets/homepageImages/cuteImage.jpg'}
                alt={'helplessCharacter'}
                width={'100%'}
            />
        </Fab>
    )
}

export default HelplessCharacterFAB
