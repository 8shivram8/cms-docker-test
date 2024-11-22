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
          width: 400,
          height: 400,
          padding: 2,
          boxShadow: 3,
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Handle
          type="target"
          position="top"
          id="target"
          style={{ background: '#555' }}
        />
        <CardMedia
          component="img"
          height="140"
          image={data.image || 'https://via.placeholder.com/150'}
          alt="Image"
          sx={{
            borderRadius: 2,
            objectFit: 'cover',
          }}
        />
        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {data.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, flexGrow: 1 }}
          >
            {data.description}
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          sx={{
            alignSelf: 'flex-end',
            backgroundColor: 'hsl(333, 100%, 50%)',
            color: '#fff',
            borderRadius: 5,
            paddingX: 3,
            paddingY: 1,
            boxShadow: 2,
            ':hover': {
              backgroundColor: 'hsl(333, 90%, 45%)',
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
        title: 'Node 1',
        description: 'This is the first node.',
        image: 'https://via.placeholder.com/150',
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
        title: 'Node 2',
        description: 'This is the second node.',
        image: 'https://via.placeholder.com/150',
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
        title: 'Node 3',
        description: 'This is the third node.',
        image: 'https://via.placeholder.com/150',
        buttonText: 'Finish',
        onClickNext: () => alert('End of flow!'),
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
        <MiniMap />
        <Controls />
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
