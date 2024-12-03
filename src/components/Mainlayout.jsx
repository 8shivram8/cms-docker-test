import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, Stack, Card, CardContent, Grid, Grow } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import GroupIcon from '@mui/icons-material/Group';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Internationalization from './Internationalization';
import PricingSection from './PricingSection';
import Faqs from './Faqs';

function Mainlayout() {
    const features = [
        {
            title: "Design",
            description: "Create customized forms and workflows tailored to your project needs. Our intuitive design tools allow you to build complex forms easily.",
            icon: <DesignServicesIcon sx={{ fontSize: 50, color: 'black' }} />,
        },
        {
            title: "Align",
            description: "Easily collaborate by assigning forms and workflows to team members. With our alignment tools, you can manage access, assign forms and fields.",
            icon: <GroupIcon sx={{ fontSize: 50, color: 'black' }} />,
        },
        {
            title: "Execute",
            description: "Run workflows seamlessly and track form submissions in real-time. Our execution system ensures that workflows proceed smoothly, while providing tracking and notifications.",
            icon: <PlayArrowIcon sx={{ fontSize: 50, color: 'black' }} />,
        },
    ];

    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
            alignItems="center"
            justifyContent="center"
        >
         
            <Box id="pricing">
                <PricingSection />
            </Box>
            <Internationalization />
            <Faqs />
        </Box>
    );
}

export default Mainlayout;
