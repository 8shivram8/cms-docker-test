import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IndustryCard = ({
    icon,
    title,
    subtitle,
    direction = 'left',
}) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -50 : 50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
        >
            <Box
                sx={{
                    border: '0.5px solid #5B5B5D',
                    borderRadius: 4,
                    height: 220,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    pt: 3,
                    px: 3,
                    bgcolor: 'white',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)',
                    '&:hover': {
                        transform: 'scale(1.02)',
                    },
                }}
            >
                <Box>{icon}</Box>
                <Typography variant="h6" fontWeight={600} ml={1}>
                    {title}
                </Typography>
                <Typography fontSize={14} color="text.secondary" mt={1} ml={1}>
                    {subtitle}
                </Typography>
            </Box>
        </motion.div>
    );
};

export default IndustryCard;
