import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const IntegrationAnimatedText = ({ title, description, theme }) => {
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
            <motion.div initial="hidden" animate="visible" custom={0} variants={textVariants}>
                <Typography
                    variant="h4"
                    sx={{
                        mt: 2,
                        fontWeight: 600,
                        backgroundImage: theme.palette.linearColor.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    {title}
                </Typography>
            </motion.div>

            <motion.div initial="hidden" animate="visible" custom={1} variants={textVariants}>
                <Typography variant="body2" sx={{ mt: 2, color: '#99A2AC' }} lineHeight={1.6}>
                    {description}
                </Typography>
            </motion.div>
        </Box>
    );
};

export default IntegrationAnimatedText;
