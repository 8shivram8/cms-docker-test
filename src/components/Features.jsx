import React, { useRef } from 'react';
import {
  ReactFlow,
  Background,
  ReactFlowProvider,
  MiniMap,
  Controls,
  Handle,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const CustomNode = ({ data }) => {
  return (
    <Box ref={data.nodeRef}>
      <Card
        sx={{
          width: { xs: '100%', sm: 400 },
          height: { xs: 'auto', sm: 350 },
          padding: 2,
          boxShadow: 3,
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'white', // Solid background
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

        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column',mt:2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800, // Increased font weight
              textAlign: 'center',
              color: 'black', // Black title color
            }}
          >
            {data.title || 'Default Title'}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 4,
              color: 'black', // Black description color
              fontWeight: 500,
              textAlign: 'justify',
              lineHeight: 1.8,
              flexGrow: 1,
            }}
          >
            {data.description ||
              'This is a placeholder description. Add engaging content here to captivate your audience and deliver clear, concise information.'}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          sx={{
            position: 'absolute', // Absolute positioning for button
            bottom: 16,
            right: 16,
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
          onClick={data.onClickNext}
        >
          {data.buttonText || 'Next'}
        </Button>
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
  // Generate unique refs for each node
  const nodeRefs = useRef({});

  // Initialize nodes with refs
  const nodes = [
    {
      id: '1',
      data: {
        title: 'Digital Signature',
        description: 'Sign, share, and authenticate documents securely with legally binding digital signatures. Ensure trust and compliance with multi-layer security for remote approvals.',
        buttonText: 'Next',
        onClickNext: () => scrollToNode('2'),
        nodeRef: (nodeRefs.current['1'] = React.createRef()),
      },
      position: { x: 500, y: 0 },
      type: 'custom',
    },
    {
      id: '2',
      data: {
        title: 'Workflow',
        description: 'Boost productivity by creating custom workflows that automate tasks, set priorities, and improve team collaboration. Track project stages and streamline processes for efficient completion.',
        buttonText: 'Next',
        onClickNext: () => scrollToNode('3'),
        nodeRef: (nodeRefs.current['2'] = React.createRef()),
      },
      position: { x: 500, y: 600 },
      type: 'custom',
    },
    {
      id: '3',
      data: {
        title: 'Daily Diary',
        description: 'Organize and track daily activities to enhance accountability. Perfect for managers and teams, this feature logs progress and highlights key actions to ensure continuous improvement.',
        buttonText: 'Finish',
        // onClickNext: () => alert('End of flow!'),
        nodeRef: (nodeRefs.current['3'] = React.createRef()),
      },
      position: { x: 500, y: 1200 },
      type: 'custom',
    },
  ];

  const edges = [
    {
      id: 'e1-2',
      source: '1',
      sourceHandle: 'source',
      target: '2',
      targetHandle: 'target',
      animated: false,
      style: { stroke: 'gray', strokeWidth: 1 },
    },
    {
      id: 'e2-3',
      source: '2',
      sourceHandle: 'source',
      target: '3',
      targetHandle: 'target',
      animated: false,
      style: { stroke: 'gray', strokeWidth: 1 },
    },
  ];

  const scrollToNode = (targetNodeId) => {
    const targetRef = nodeRefs.current[targetNodeId];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };

  return (
    <Box
      sx={{
        height: '210vh', //add more height accordingly
        width: '100%',
        overflow: 'auto', // Enable scrolling
        position: 'relative',
        // bgcolor:'red'
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ custom: CustomNode }}
        fitView={false}
        style={{ height: '100%' }}
      >
        <Background />
        {/* <MiniMap />
        <Controls /> */}
      </ReactFlow>
    </Box>
  );
};

const FlowWithProvider = () => {
  return (
    <ReactFlowProvider>
      <Box sx={{ width: '100%', p: 2 }}>
        <Features />
      </Box>
    </ReactFlowProvider>
  );
};

export default FlowWithProvider;
