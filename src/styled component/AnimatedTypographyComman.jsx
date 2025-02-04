import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedTypographyComman = ({ text1, text2, theme }) => {
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
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        mt: 2,
                        backgroundImage: theme.palette.linearColor.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {text1}
                </Typography>
            </motion.div>

            <motion.div
                initial="hidden"
                animate="visible"
                custom={1}
                variants={textVariants}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 200,
                        mt: 2,
                        backgroundImage: theme.palette.linearColor.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {text2}
                </Typography>
            </motion.div>
        </Box>
    );
};

export default AnimatedTypographyComman;
