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
import CustomButton from './CustomButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const CustomNode = ({ data }) => {
    const { onClickNext, onClickDetails, title, description, buttonText, detailsText, nodeRef } = data;
    console.log("11111",data)

    return (
        <Box ref={nodeRef}>
            <Card
                sx={{
                    width: { xs: '100%', sm: 400 },
                    height: { xs: 'auto', sm: detailsText ? 360 : 300 },
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
                        opacity: 0,                 // Hide the handle completely
                        pointerEvents: 'none',      // Disable interaction with the handle
                    }}

                />
                <Handle
                    type="target"
                    position="left"
                    id="targetleft"
                    style={{
                        opacity: 0,                 // Hide the handle completely
                        pointerEvents: 'none',      // Disable interaction with the handle
                    }}
                />
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center', // Center the content vertically
                        alignItems: 'center',      // Center content horizontally (optional if you want both centered)
                        mt: 2,
                        flex: 1,                   // Ensure the CardContent fills the available space
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 800,
                            textAlign: 'center',
                            color: 'black',
                            backgroundImage: 'linear-gradient(to right, #4a8ac9, #e87c9a)',  // Bluish and Pinkish Gradient
                            backgroundClip: 'text',  // Gradient only behind the text
                            color: 'transparent',    // Makes the text color transparent to show the gradient
                            WebkitBackgroundClip: 'text', // For Safari browser support
                        }}
                    >
                        {title}
                    </Typography>



                    {detailsText && (
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
                    )}
                </CardContent>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end',gap:2, mt: 2, }}>
                    {
                        buttonText && (
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'hsl(333, 80%, 50%)',
                                    color: '#fff',
                                    borderRadius: 20,
                                    paddingX: 4,
                                    paddingY: 1.2,
                                    boxShadow: 2,
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    transition: 'transform 0.2s ease-in-out, background-color 0.3s ease-in-out',
                                    ':hover': {
                                        backgroundColor: 'hsl(333, 70%, 45%)',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                                onClick={onClickNext}
                            >
                             {buttonText}
                            </Button>
                        )
                    }
                    {
                        detailsText && (
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: 'hsl(220, 80%, 50%)',
                                    color: 'hsl(220, 80%, 50%)',
                                    borderRadius: 20,
                                    paddingX: 4,
                                    paddingY: 1.2,
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    transition: 'transform 0.2s ease-in-out, border-color 0.3s ease-in-out',
                                    ':hover': {
                                        borderColor: 'hsl(220, 70%, 45%)',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                                onClick={onClickDetails}
                            >
                                {detailsText}
                            </Button>
                        )
                    }
                </Box>
                <Handle
                    type="source"
                    position="bottom"
                    id="source-bottom"
                    style={{
                        opacity: 0,                 // Hide the handle completely
                        pointerEvents: 'none',      // Disable interaction with the handle
                    }}
                />

                {/* Handle at the right (source handle) */}
                <Handle
                    type="source"
                    position="right"
                    id="source-right"
                    style={{
                        opacity: 0,                 // Hide the handle completely
                        pointerEvents: 'none',      // Disable interaction with the handle
                    }}
                />
            </Card>
        </Box>
    );
};

const Features = () => {
    const nodeRefs = useRef({});
    const { setCenter, zoomTo } = useReactFlow();  // Using ReactFlow instance methods
    const [isTransitioning, setIsTransitioning] = useState(true);

    const nodes = [
        {
            id: '0',
            data: {
                title: 'What are our user buildings?',
                buttonText: <ArrowDownwardIcon />,
                onClickNext: () => scrollToNode('1'),
                nodeRef: (nodeRefs.current['0'] = React.createRef()),
            },
            position: { x: 500, y: 0 }, // Position at the top
            type: 'custom',
        },
        {
            id: '1',
            data: {
                title: 'Digital Signature',
                description: 'Sign, share, and authenticate documents securely with legally binding digital signatures, ensuring privacy and compliance across various industries.',
                buttonText: 'Next',
                onClickNext: () => scrollToNode('2'),
                detailsText: 'Details',
                onClickDetails: () => scrollToNode('4'),
                nodeRef: (nodeRefs.current['1'] = React.createRef()),
            },
            position: { x: 500, y: 600 },
            type: 'custom',
        },
        {
            id: '2',
            data: {
                title: 'Workflow',
                description: 'Boost productivity by creating custom workflows that automate repetitive tasks, streamline processes, and ensure smoother project management from start to finish.',
                buttonText: 'Next',
                onClickNext: () => scrollToNode('3'),
                detailsText: 'Details',
                onClickDetails: () => scrollToNode('5'),
                nodeRef: (nodeRefs.current['2'] = React.createRef()),
            },
            position: { x: 500, y: 1200 },
            type: 'custom',
        },
        {
            id: '3',
            data: {
                title: 'Daily Diary',
                description: 'Organize and track daily activities, set goals, and reflect on progress to enhance personal accountability, team productivity, and continuous improvement.',
                detailsText: 'Details',
                onClickDetails: () => scrollToNode('6'),
                nodeRef: (nodeRefs.current['3'] = React.createRef()),
            },
            position: { x: 500, y: 1800 },
            type: 'custom',
        },
        {
            id: '4',
            data: {
                title: 'Analytics',
                description: 'Gain actionable insights through detailed analytics, including trends, patterns, and performance metrics that help make data-driven decisions for business growth.',
                detailsText: 'Details',
                onClickNext: () => scrollToNode('5'),
                nodeRef: (nodeRefs.current['4'] = React.createRef()),
            },
            position: { x: 1200, y: 600 },
            type: 'custom',
        },
        {
            id: '5',
            data: {
                title: 'Custom Integrations',
                description: 'Seamlessly integrate with third-party applications, enhancing your system’s flexibility, automating data exchange, and improving efficiency across tools and platforms.',
                detailsText: 'Details',
                onClickNext: () => scrollToNode('6'),
                nodeRef: (nodeRefs.current['5'] = React.createRef()),
            },
            position: { x: 1200, y: 1200 },
            type: 'custom',
        },
        {
            id: '6',
            data: {
                title: 'Team Collaboration',
                description: 'Enhance team collaboration with real-time communication, file sharing, task management, and seamless collaboration tools that drive alignment and teamwork.',
                detailsText: 'Details',
                nodeRef: (nodeRefs.current['6'] = React.createRef()),
            },
            position: { x: 1200, y: 1800 },
            type: 'custom',
        },
    ];
    



    const scrollToNode = (targetNodeId) => {
        const targetRef = nodeRefs.current[targetNodeId];

        if (targetRef?.current) {
            // Get the bounding rectangle of the node
            targetRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',  // Center vertically
                inline: 'center', // Center horizontally
            });
        }
    };
    const edges = [
        {
            id: 'e0-1',
            source: '0',
            target: '1',
            animated: false,
        },
        { id: 'e1-2', source: '1', target: '2', animated: false },
        { id: 'e2-3', source: '2', target: '3', animated: false },

        { id: 'e1-4-right', source: '1', target: '4', sourceHandle: 'source-right', targetHandle: 'targetleft', animated: true },
        { id: 'e1-5-right', source: '2', target: '5', sourceHandle: 'source-right', targetHandle: 'targetleft', animated: true },
        { id: 'e1-6-right', source: '3', target: '6', sourceHandle: 'source-right', targetHandle: 'targetleft', animated: true },
    ];


    // Scroll to and center a node using React Flow's setCenter method


    const edgeTypes = {
        buttonEdge: <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>,
    };
    useEffect(() => {
        scrollToNode("6");
        const timer = setTimeout(() => {
          scrollToNode("0");
          setIsTransitioning(false);
        }, 800);
    
        return () => clearTimeout(timer);
      }, []);    

    return (
        <Box sx={{ height: '320vh', width: '100%', overflow: 'auto', position: 'relative' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={{ custom: CustomNode }}
                edgeTypes={edgeTypes}
                fitView={false}
                style={{
                    height: '100%',
                    width: '100%',
                    opacity: isTransitioning ? 0 : 1,
                    transition: 'opacity 0.3s ease-in-out',
                }}
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
