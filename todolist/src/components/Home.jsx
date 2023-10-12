// mui imports
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'


function Home() {
    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">HOME</Typography>
            </Toolbar>
        </AppBar>
        <Toolbar>
                <Typography variant="h6">Hello!</Typography>
        </Toolbar>
        </>
    )
}

export default Home;