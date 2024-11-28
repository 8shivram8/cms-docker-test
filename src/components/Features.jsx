import React, { useEffect, useRef, useState } from 'react';
import {
  ReactFlow,
  Background,
  ReactFlowProvider,
  Handle,
  useReactFlow
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';

const CustomNode = ({ data }) => {
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
          style={{ background: '#555' }}
        />
        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', mt: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              textAlign: 'center',
              color: 'black',
            }}
          >
            {title || 'Default Title'}
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
            {description ||
              'This is a placeholder description. Add engaging content here to captivate your audience and deliver clear, concise information.'}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
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
          id="source"
          style={{ background: '#555' }}  
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
      id: '1',
      data: {
        title: 'Digital Signature',
        description: 'Sign, share, and authenticate documents securely with legally binding digital signatures...',
        buttonText: 'Next',
        onClickNext: () => scrollToNode('2'),
        detailsText: 'Details',
        onClickDetails: () => scrollToNode('4'),
        nodeRef: (nodeRefs.current['1'] = React.createRef()),
      },
      position: { x: 500, y: 0 },
      type: 'custom',
    },
    {
      id: '2',
      data: {
        title: 'Workflow',
        description: 'Boost productivity by creating custom workflows that automate tasks...',
        buttonText: 'Next',
        onClickNext: () => scrollToNode('3'),
        detailsText: 'Details',
        onClickDetails: () => scrollToNode('5'),
        nodeRef: (nodeRefs.current['2'] = React.createRef()),
      },
      position: { x: 500, y: 600 },
      type: 'custom',
    },
    {
      id: '3',
      data: {
        title: 'Daily Diary',
        description: 'Organize and track daily activities to enhance accountability...',
        detailsText: 'Details',
        onClickDetails: () => scrollToNode('6'),
        nodeRef: (nodeRefs.current['3'] = React.createRef()),
      },
      position: { x: 500, y: 1200 },
      type: 'custom',
    },
    {
      id: '4',
      data: {
        title: 'Analytics',
        description: 'Gain actionable insights through detailed analytics...',
        detailsText: 'Details',
        onClickNext: () => scrollToNode('5'),
        nodeRef: (nodeRefs.current['4'] = React.createRef()),
      },
      position: { x: 1200, y: 0 },
      type: 'custom',
    },
    {
      id: '5',
      data: {
        title: 'Custom Integrations',
        description: 'Seamlessly integrate with third-party applications...',
        detailsText: 'Details',
        onClickNext: () => scrollToNode('6'),
        nodeRef: (nodeRefs.current['5'] = React.createRef()),
      },
      position: { x: 1200, y: 600 },
      type: 'custom',
    },
    {
      id: '6',
      data: {
        title: 'Team Collaboration',
        description: 'Enhance team collaboration with real-time communication...',
        detailsText: 'Details',
        nodeRef: (nodeRefs.current['6'] = React.createRef()),
      },
      position: { x: 1200, y: 1200 },
      type: 'custom',
    },
  ];

  const edges = [
    { id: 'e1-2', source: '1', target: '2', animated: false },
    { id: 'e2-3', source: '2', target: '3', animated: false },
    { id: 'e1-4', source: '1', target: '4', animated: true },
    { id: 'e2-5', source: '2', target: '5', animated: true },
    { id: 'e3-6', source: '3', target: '6', animated: true },
  ];

  // Scroll to and center a node using React Flow's setCenter method
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
  

  useEffect(() => {
    scrollToNode("6");
    const timer = setTimeout(() => {
      scrollToNode("1");
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

const FlowWithProvider = () => {
  return (
    <ReactFlowProvider>
      <Box sx={{ width: '100%' }}>
        <Features />
      </Box>
    </ReactFlowProvider>
  );
};

export default FlowWithProvider;
