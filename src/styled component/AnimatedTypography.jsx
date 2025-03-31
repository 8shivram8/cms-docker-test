import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedTypography = ({ isMobile, isTablet }) => {
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
                    color="white"
                    sx={{
                        fontWeight: isMobile ? 500 : isTablet ? 600 : 700,
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
                    color="white"
                    sx={{
                        fontWeight: isMobile ? 500 : isTablet ? 600 : 700,
                        fontSize: isMobile ? '16px' : isTablet ? '18px' : '28px',
                        mt: 1,
                    }}
                >
                    Powered by AI to Generate Forms with Ease. <br></br> Approval Process and Seamless Integration into Your System.
                </Typography>
            </motion.div>
        </Box>
    );
};

export default AnimatedTypography;
