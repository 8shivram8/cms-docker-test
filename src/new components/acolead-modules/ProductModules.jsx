import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EastIcon from '@mui/icons-material/East';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_OPTIONS } from './constants';
import { leadCaputureAddon } from './license.types';

const ProductModules = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const navigate = useNavigate();

    const [showAll, setShowAll] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const autoPlayTimer = useRef(null);

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    // Filter only selectable products
    const selectableProducts = PRODUCT_OPTIONS.filter(p => p.selectable);

    // Number of items to show at once
    const itemsPerView = isMobile ? 1 : isTablet ? 2 : 3;

    // Get visible items
    const getVisibleItems = () => {
        if (showAll) return selectableProducts;

        const items = [];
        // We need itemsPerView + 1 to handle the sliding effect
        const totalItems = selectableProducts.length;
        for (let i = 0; i < itemsPerView; i++) {
            const index = (startIndex + i) % totalItems;
            items.push({
                product: selectableProducts[index],
                index: index,
                isNew: i === itemsPerView - 1 && direction === 1, // Last item is new when going forward
                isLeaving: i === 0 && direction === 1, // First item leaves when going forward
            });
        }
        return items;
    };

    const currentItems = getVisibleItems();

    // Auto-play functionality
    // useEffect(() => {
    //     if (!showAll && selectableProducts.length > itemsPerView) {
    //         autoPlayTimer.current = setInterval(() => {
    //             setDirection(1);
    //             setStartIndex((prev) => (prev + 1) % selectableProducts.length);
    //         }, 4000);
    //     }

    //     return () => clearInterval(autoPlayTimer.current);
    // }, [showAll, selectableProducts.length, itemsPerView]);

    const handleMouseEnter = () => {
        clearInterval(autoPlayTimer.current);
    };

    const handleMouseLeave = () => {
        if (!showAll && selectableProducts.length > itemsPerView) {
            autoPlayTimer.current = setInterval(() => {
                setDirection(1);
                setStartIndex((prev) => (prev + 1) % selectableProducts.length);
            }, 4000);
        }
    };

    const handleNext = () => {
        setDirection(1);
        setStartIndex((prev) => (prev + 1) % selectableProducts.length);
        // resetTimer();
    };

    const handleBack = () => {
        setDirection(-1);
        setStartIndex((prev) => (prev - 1 + selectableProducts.length) % selectableProducts.length);
        // resetTimer();
    };

    const resetTimer = () => {
        clearInterval(autoPlayTimer.current);
        if (!showAll && selectableProducts.length > itemsPerView) {
            autoPlayTimer.current = setInterval(() => {
                setDirection(1);
                setStartIndex((prev) => (prev + 1) % selectableProducts.length);
            }, 4000);
        }
    };

    const handleViewAll = () => {
        setShowAll(!showAll);
        clearInterval(autoPlayTimer.current);
    };

    const handleGetStarted = (productId) => {
        if (productId === leadCaputureAddon.WHATSAPP) {
            navigate('/modules/whatsapp');
        }

        if (productId === leadCaputureAddon.INSTAGRAM) {
            navigate('/modules/instagram');
        }

        if (productId === leadCaputureAddon.AI_CALLING) {
            navigate('/modules/ai-calling');
        }
    };

    // Card animation variants
    const cardVariants = {
        // For new card sliding in from right
        enterFromRight: {
            x: '100%',
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            }
        },
        // For card sliding out to left
        exitToLeft: {
            x: '-100%',
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            }
        },
        // For card sliding in from left (going backward)
        enterFromLeft: {
            x: '-100%',
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            }
        },
        // For card sliding out to right (going backward)
        exitToRight: {
            x: '100%',
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            }
        },
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            }
        }
    };

    // Get animation based on position and direction
    const getCardAnimation = (index, totalItems, dir) => {
        if (dir === 0) return 'center';

        // Going forward (right)
        if (dir === 1) {
            if (index === totalItems - 1) return 'enterFromRight'; // New card slides in from right
            if (index === 0) return 'exitToLeft'; // Old card slides out to left
            return 'center'; // Middle cards stay
        }

        // Going backward (left)
        if (dir === -1) {
            if (index === 0) return 'enterFromLeft'; // New card slides in from left
            if (index === totalItems - 1) return 'exitToRight'; // Old card slides out to right
            return 'center'; // Middle cards stay
        }

        return 'center';
    };

    const renderProductCard = (product, animation) => (
        <Box
            sx={{
                bgcolor: 'white',
                borderRadius: 4,
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #f0f4ff',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${product.accent}20`,
                    borderColor: `${product.accent}30`,
                },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    backgroundColor: product.accent,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                },
                '&:hover::before': {
                    opacity: 1,
                },
            }}
        >
            {/* Coming Soon Badge */}
            {product.comingSoon && (
                <Chip
                    label="Coming Soon"
                    size="small"
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: '#f5f5f5',
                        color: '#999',
                        fontWeight: 600,
                        fontSize: '0.65rem',
                        textTransform: 'uppercase',
                        letterSpacing: 0.5,
                    }}
                />
            )}

            {/* Icon Circle */}
            <Box
                sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '25%',
                    backgroundColor: `${product.accent}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: `${product.accent}25`,
                        transform: 'scale(1.05)',
                    },
                }}
            >
                {product?.logo ? (
                    product?.logo({ size: product.iconSize?.mainPageCard })
                ) : (
                    <Typography
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: product.accent,
                        }}
                    >
                        {product.label.charAt(0)}
                    </Typography>
                )}
            </Box>

            {/* Product Label */}
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    color: '#000',
                    mb: 0.5,
                }}
            >
                {product.label}
            </Typography>

            {/* Tagline */}
            <Typography
                variant="caption"
                sx={{
                    color: product.accent,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    fontSize: '0.7rem',
                    mb: 1.5,
                }}
            >
                {product.tagline}
            </Typography>

            {/* Description */}
            <Typography
                variant="body2"
                sx={{
                    color: '#555',
                    lineHeight: 1.6,
                    mb: 2,
                    flex: 1,
                    fontSize: '0.9rem',
                }}
            >
                {product.description}
            </Typography>

            {/* Pricing & Trial */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 2,
                    pt: 2,
                    borderTop: '1px solid #f0f4ff',
                }}
            >
                {/* {product.startingPriceLabel && (
                    <Typography
                        variant="body2"
                        sx={{
                            fontWeight: 700,
                            color: '#000',
                            fontSize: '0.9rem',
                        }}
                    >
                        {product.startingPriceLabel}
                    </Typography>
                )} */}
                {product.trialLabel && (
                    <Typography
                        variant="caption"
                        sx={{
                            color: '#1677F7',
                            fontWeight: 600,
                            backgroundColor: '#1677F710',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.7rem',
                        }}
                    >
                        {product.trialLabel}
                    </Typography>
                )}
            </Box>

            {/* Get Started Button */}
            {!product.comingSoon && (
                <Button
                    variant="contained"
                    fullWidth
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => handleGetStarted(product.id)}
                    sx={{
                        bgcolor: product.accent,
                        textTransform: 'none',
                        fontWeight: 600,
                        py: 1.2,
                        borderRadius: 2,
                        boxShadow: `0 4px 16px ${product.accent}30`,
                        '&:hover': {
                            bgcolor: product.accent,
                            opacity: 0.9,
                            transform: 'scale(1.02)',
                            boxShadow: `0 6px 24px ${product.accent}40`,
                        },
                        transition: 'all 0.3s ease',
                    }}
                >
                    Get Started
                </Button>
            )}
        </Box>
    );

    return (
        <Box
            ref={ref}
            sx={{
                pt: { xs: 2, sm: 4, md: 8 },
                pb: { xs: 1.5, sm: 3.5, md: 5 },
                px: 2,
                backgroundColor: '#f8faff',
                position: 'relative',
                overflow: 'hidden',
            }}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
            {/* Background decoration */}
            {/* <Box
                sx={{
                    position: 'absolute',
                    top: -200,
                    right: -200,
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(22,119,247,0.05) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -200,
                    left: -200,
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(225,48,108,0.05) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            /> */}

            <Box
                sx={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                }}
            >
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: isMobile ? 'flex-start' : 'center',
                            justifyContent: 'space-between',
                            mb: 4,
                            gap: 2,
                        }}
                    >
                        <Box>
                            <Typography
                                variant="overline"
                                sx={{
                                    color: '#1677F7',
                                    fontWeight: 700,
                                    letterSpacing: 2,
                                    fontSize: '0.75rem',
                                }}
                            >
                                OUR PRODUCTS
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: isMobile ? '1.8rem' : '2.5rem',
                                    color: '#000',
                                    mt: 0.5,
                                }}
                            >
                                Choose Your Growth{' '}
                                <Box component="span" sx={{ color: '#1677F7' }}>
                                    Engine
                                </Box>
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#666',
                                    mt: 1,
                                    maxWidth: 500,
                                }}
                            >
                                Select the perfect module to supercharge your lead generation and sales automation.
                            </Typography>
                        </Box>

                        {/* <Button
                            variant={showAll ? 'contained' : 'outlined'}
                            endIcon={<EastIcon />}
                            onClick={handleViewAll}
                            sx={{
                                borderRadius: 3,
                                textTransform: 'none',
                                fontWeight: 600,
                                px: 3,
                                py: 1,
                                borderColor: '#1677F7',
                                color: showAll ? 'white' : '#1677F7',
                                bgcolor: showAll ? '#1677F7' : 'transparent',
                                '&:hover': {
                                    bgcolor: showAll ? '#145ed6' : '#1677F710',
                                    borderColor: '#1677F7',
                                },
                                flexShrink: 0,
                            }}
                        >
                            {showAll ? 'Show Less' : 'View All Products'}
                        </Button> */}
                    </Box>
                </motion.div>

                {/* Carousel */}
                {!showAll ? (
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                        <Box
                            sx={{
                                position: 'relative',
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr 1fr',
                                // gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                                mt: { xs: 0, sm: 1, md: 2 },
                                mb: { xs: 2, sm: 4, md: 6 },
                                gap: 3,
                            }}
                        >
                            {currentItems.map((item, index) => {
                                const animationKey = `${item.index}-${direction}`;
                                const animation = getCardAnimation(index, currentItems.length, direction);

                                return (
                                    <motion.div
                                        key={`${item.product.id}-${item.index}`}
                                        variants={cardVariants}
                                        initial={animation}
                                        animate="center"
                                        exit={animation}
                                        style={{
                                            gridColumn: 'span 1',
                                            width: '100%',
                                        }}
                                    >
                                        {renderProductCard(item.product, animation)}
                                    </motion.div>
                                );
                            })}
                        </Box>
                    </Box>
                ) : (
                    // Show all products
                    <Box
                        sx={{
                            display: 'grid',
                            // gridTemplateColumns: isMobile? '1fr': isTablet? '1fr 1fr'   : '1fr 1fr 1fr',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                            mt: { xs: 1, sm: 2 },
                            mb: { xs: 2, sm: 8, md: 12 },
                            gap: 3,
                        }}
                    >
                        {selectableProducts.map((product) => (
                            <Box key={product.id}>
                                {renderProductCard(product, 'center')}
                            </Box>
                        ))}
                    </Box>
                )}

                {/* Pagination Controls */}
                {!showAll && selectableProducts.length > itemsPerView && (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 2,
                        }}
                    >
                        <Box
                            onClick={handleBack}
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backgroundColor: 'white',
                                border: '1px solid #e8ecf1',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#f5f7fa',
                                    borderColor: '#1677F7',
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                },
                            }}
                        >
                            <ArrowBackIcon sx={{ fontSize: 18, color: '#666' }} />
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            {selectableProducts.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > startIndex ? 1 : -1);
                                        setStartIndex(index);
                                        // resetTimer();
                                    }}
                                    sx={{
                                        width: index === startIndex ? 32 : 8,
                                        height: 8,
                                        borderRadius: 4,
                                        backgroundColor: index === startIndex
                                            ? '#1677F7'
                                            : '#d0d5dd',
                                        cursor: 'pointer',
                                        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                        boxShadow: index === startIndex
                                            ? '0 0 16px rgba(22,119,247,0.30)'
                                            : 'none',
                                        '&:hover': {
                                            backgroundColor: index === startIndex
                                                ? '#1677F7'
                                                : '#1677F750',
                                            transform: 'scale(1.1)',
                                        },
                                    }}
                                />
                            ))}
                        </Box>

                        <Box
                            onClick={handleNext}
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                backgroundColor: 'white',
                                border: '1px solid #e8ecf1',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#f5f7fa',
                                    borderColor: '#1677F7',
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                },
                            }}
                        >
                            <ArrowForwardIcon sx={{ fontSize: 18, color: '#666' }} />
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default ProductModules;