import { Box } from '@mui/material'

const IntroductionArea = () => {
    return (
        <Box
            sx={{
                width: '60vw',
            }}
        >
            <img
                src={'assets/homepageImages/mainImage.jpg'}
                alt={'mainImage'}
                width={'100%'}
            />
        </Box>
    )
}

export default IntroductionArea
