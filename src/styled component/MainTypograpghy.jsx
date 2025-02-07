import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const MainTypography = ({ isMobile, isTablet }) => {
    const textVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeOut', delay: i * 0.5 }
        })
    };

    return (
        <Box>
            <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={textVariants}
            >
                <Typography
                    variant="h1"
                    color="black"
                    sx={{
                        fontWeight: isMobile ? 400 : isTablet ? 400 : 500,
                        fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3.5rem',
                        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    Seamless Collaboration with your <br />
                    Vendors & Partners
                </Typography>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                custom={1}
                variants={textVariants}
            >
                <Typography
                    variant="h1"
                    color="black"
                    sx={{
                        fontWeight: isMobile ? 400 : isTablet ? 500 : 500,
                        fontSize: isMobile ? '16px' : isTablet ? '18px' : '28px',
                        mt: 1,
                    }}
                >
                    Connect your Vendors & Partners with your ecosystem effortlessly
                </Typography>
            </motion.div>
        </Box>
    );
};

export default MainTypography;
