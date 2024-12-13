import React, { useEffect, useRef, useState } from 'react';
import {
    ReactFlow,
    Background,
    ReactFlowProvider,
    Handle,
    useReactFlow
} from '@xyflow/react';
import DeleteIcon from '@mui/icons-material/Delete';
import '@xyflow/react/dist/style.css';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CustomNode = ({ data, id }) => {
    const { onClickNext, onClickDetails, title, description, buttonText, detailsText, nodeRef } = data;

    return (
        <Box ref={nodeRef}>
            <Card
                sx={{
                    width: { xs: '100%', sm: 400 },
                    height: { xs: 'auto', sm: 360 },
                    padding: 2,
                    boxShadow: 3,
                    borderRadius: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'white',
                    transition: 'box-shadow 0.3s ease-in-out',
                    ':hover': {
                        boxShadow: 6,
                    },
                }}
            >
                <Handle
                    type="target"
                    position="top"
                    id="target"
                    style={{
                        opacity: 0, // Hide the handle completely
                        pointerEvents: 'none', // Disable interaction with the handle
                    }}
                />
                <Handle
                    type="target"
                    position="left"
                    id="targetleft"
                    style={{
                        opacity: 0, // Hide the handle completely
                        pointerEvents: 'none', // Disable interaction with the handle
                    }}
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', // Center the content vertically
                        alignItems: 'center', // Center content horizontally (optional if you want both centered)
                        mt: 2,
                        flex: 1, // Ensure the CardContent fills the available space
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            textAlign: 'center',
                            color: 'black',
                            backgroundImage: 'linear-gradient(to right, #4a8ac9, #e87c9a)', // Bluish and Pinkish Gradient
                            backgroundClip: 'text', // Gradient only behind the text
                            color: 'transparent', // Makes the text color transparent to show the gradient
                            WebkitBackgroundClip: 'text', // For Safari browser support
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mt: 4,
                            color: 'black',
                            fontWeight: 500,
                            textAlign: 'justify',
                            lineHeight: 1.8,
                            flexGrow: 1,
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                    {buttonText && (
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: 'primary.main',
                                color: '#fff',
                                borderRadius: 20,
                                paddingX: 4,
                                paddingY: 1.2,
                                boxShadow: 2,
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                                transition: 'transform 0.2s ease-in-out, background-color 0.3s ease-in-out',
                                ':hover': {
                                    // backgroundColor: 'hsl(333, 70%, 45%)',
                                    transform: 'scale(1.05)',
                                },
                            }}
                            onClick={onClickNext}
                        >
                            {buttonText}
                        </Button>
                    )}
                    {detailsText && (
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: 'primary.main',
                                color: 'hsl(220, 80%, 50%)',
                                borderRadius: 20,
                                paddingX: 4,
                                paddingY: 1.2,
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                                transition: 'transform 0.2s ease-in-out, border-color 0.3s ease-in-out',
                                ':hover': {
                                    transform: 'scale(1.05)',
                                },
                            }}
                            onClick={onClickDetails}
                        >
                            {detailsText}
                        </Button>
                    )}
                </Box>
                <Handle
                    type="source"
                    position="bottom"
                    id="source-bottom"
                    style={{
                        opacity: 0, // Hide the handle completely
                        pointerEvents: 'none', // Disable interaction with the handle
                    }}
                />

                {/* Handle at the right (source handle) */}
                <Handle
                    type="source"
                    position="right"
                    id="source-right"
                    style={{
                        opacity: 0, // Hide the handle completely
                        pointerEvents: 'none', // Disable interaction with the handle
                    }}
                />
            </Card>
        </Box>
    );
};

const Features = () => {
    const { fitView, zoomIn, zoomOut, setViewport } = useReactFlow();

    const nodes = [
        {
            id: '0',
            data: {
                title: 'Application Submission',
                description: 'The user submits the application to begin the signing process.',
                buttonText: <ArrowDownwardIcon />,
                onClickNext: () => scrollToNode('1'),
            },
            position: { x: 150, y: 0 },
            type: 'custom',
            // width: 400,
            // height: 100,
            // measured: {
            //     width: 400,
            //     height: 100,
            // }
        },
        {
            id: '1',
            data: {
                title: 'Signer: First Signature',
                description: 'The first person (Signer) reviews and signs the document.',
                buttonText: 'Next',
                onClickNext: () => scrollToNode('2'),
            },
            position: { x: 150, y: 500 },
            type: 'custom',
            // width: 400,
            // height: 100,
            // measured: {
            //     width: 400,
            //     height: 100,
            // }
        },
        {
            id: '2',
            data: {
                title: 'Witness: Signature',
                description: 'The witness signs the document to verify and validate the process.',
                buttonText: 'Next',
                onClickNext: () => scrollToNode('3'),
            },
            position: { x: 150, y: 1000 },
            type: 'custom',
            // width: 400,
            // height: 100,
            // measured: {
            //     width: 400,
            //     height: 100,
            // }
        },
        {
            id: '3',
            data: {
                title: 'Final Confirmation',
                description: 'The document is reviewed for the final time, confirming all signatures and details.',
                onClickDetails: () => scrollToNode('6'),
            },
            position: { x: 150, y: 1500 },
            type: 'custom',
            // width: 400,
            // height: 100,
            // measured: {
            //     width: 400,
            //     height: 100,
            // }
        },
    ];



    const scrollToNode = (targetNodeId) => {
        window.requestAnimationFrame(() => {
            fitView({
                duration: 300,
                nodes: [{ id: targetNodeId }],
            });
        });

    };

    const edges = [
        {
            id: 'e0-1',
            source: '0',
            target: '1',
            animated: false,
        },
        {
            id: 'e1-2',
            source: '1',
            target: '2',
            animated: false,
        },
        {
            id: 'e2-3',
            source: '2',
            target: '3',
            animated: false,
        },
        {
            id: 'e1-4-right',
            source: '1',
            target: '4',
            sourceHandle: 'source-right',
            targetHandle: 'targetleft',
            animated: true,
        },
    ];


    useEffect(() => {
        setTimeout(() => {
            setViewport({ x: 450, y: 0, zoom: 0.2 }, { duration: 800 });
        }, 0); 
        setTimeout(() => {
            fitView({
                duration: 1500,
                nodes: [{ id: '3' }],
            });
        }, 800);
        setTimeout(() => {
            fitView({
                duration: 1500,
                nodes: [{ id: '0' }],
            });
        }, 2000);

    }, [nodes, edges])

    return (
        <Box
            sx={{
                height: '60vh',
                width: '100%',
                // overflow: 'auto',
                // position: 'relative',
            }}
        >
            <ReactFlow
                defaultNodes={nodes}
                defaultEdges={edges}
                fitView
                nodeTypes={{ custom: CustomNode }}
            // style={{
            //     height: '100%',
            //     width: '100%',
            // }}
            >
                <Background />
            </ReactFlow>
        </Box>
    );
};

const FlowWithProviderNew = () => {
    return (
        <ReactFlowProvider>
            <Box sx={{ width: '100%' }}>
                <Features />
            </Box>
        </ReactFlowProvider>
    );
};

export default FlowWithProviderNew;
