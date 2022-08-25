import IntroductionArea from '../../molecules/IntroductionArea'
import { Container, Grid } from '@mui/material'
import SearchArt from '../../molecules/SearchArt'
import CuteImage from '../../molecules/CuteImage'
import GalleryList from '../../molecules/GalleryList'
import HelplessCharacterFAB from '../../atoms/HelplessCharacterFAB'

const Home = () => {
    return (
        <>
            <CuteImage />
            <Container sx={{ position: 'relative' }}>
                <Grid
                    layout
                    flexDirection={'column'}
                    display={'flex'}
                    alignItems={'center'}
                >
                    <SearchArt />
                    <IntroductionArea />
                    <GalleryList />
                    <HelplessCharacterFAB />
                </Grid>
            </Container>
        </>
    )
}

export default Home
