import React, { useState } from 'react';
import { ReactFlow, Background, ReactFlowProvider, MiniMap, Controls, useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

// Custom node component that receives `data` as a prop
const CustomNode = ({ data }) => {
  return (
    <Card sx={{ width: 400, height: 400, padding: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.image || "https://via.placeholder.com/150"} // Default image if not provided
        alt="Image"
      />
      <CardContent>
        <Typography variant="h6">{data.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {data.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={data.onClickNext} // Trigger the next action
        >
          {data.buttonText || 'Next'}
        </Button>
      </CardContent>
    </Card>
  );
};

const Features = () => {
  const { setViewport, viewport } = useReactFlow();
  const [scrolling, setScrolling] = useState(false);  // Prevent simultaneous scrolls

  // Define the positions for each node (fixed positions)
  const nodePositions = {
    '1': { x: 500, y: 0 },
    '2': { x: 500, y: 600 },
    '3': { x: 500, y: 1200 },
  };

  // Function to smoothly scroll to the next node
  const smoothScrollToNode = (targetNodeId) => {
    if (scrolling) return;  // Prevent multiple scrolls happening at once

    setScrolling(true);
    const targetPosition = nodePositions[targetNodeId];
    const startPosition = { ...viewport }; // Current viewport position
    const target = { x: targetPosition.x, y: targetPosition.y }; // Target position for the viewport

    const duration = 1000; // Scroll duration in ms
    const startTime = performance.now();

    // Animate the viewport scroll to the target node
    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentX = startPosition.x + (target.x - startPosition.x) * progress;
      const currentY = startPosition.y + (target.y - startPosition.y) * progress;

      // Set the new viewport position
      setViewport({ x: currentX, y: currentY, zoom: 1.2 });

      if (progress < 1) {
        requestAnimationFrame(animateScroll); // Continue the scroll animation
      } else {
        setScrolling(false); // Scroll animation finished
      }
    };

    requestAnimationFrame(animateScroll); // Start the scroll animation
  };

  // Nodes setup with custom data for styling and content
  const nodes = [
    {
      id: '1',
      data: {
        label: 'Hello',
        title: 'Node 1',
        description: 'This is the first node.',
        image: 'https://via.placeholder.com/150',
        buttonText: 'Next',
        onClickNext: () => smoothScrollToNode('2'), // Focus on Node 2
      },
      position: { x: 500, y: 0 },
      type: 'custom',
      sourcePosition: 'bottom', // Connect edges to the bottom of this node
      targetPosition: 'top', // Allow edges to connect from the top
    },
    {
      id: '2',
      data: {
        label: 'World',
        title: 'Node 2',
        description: 'This is the second node.',
        image: 'https://via.placeholder.com/150',
        buttonText: 'Next',
        onClickNext: () => smoothScrollToNode('3'), // Focus on Node 3
      },
      position: { x: 500, y: 600 },
      type: 'custom',
      sourcePosition: 'bottom',
      targetPosition: 'top',
    },
    {
      id: '3',
      data: {
        label: 'Welcome',
        title: 'Node 3',
        description: 'This is the third node.',
        image: 'https://via.placeholder.com/150',
        buttonText: 'Finish',
        onClickNext: () => alert('End of flow!'), // Handle the last node
      },
      position: { x: 500, y: 1200 },
      type: 'custom',
      sourcePosition: 'bottom',
      targetPosition: 'top',
    },
  ];

  // Edges setup
  const edges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
  ];

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={{ custom: CustomNode }} // Register the custom node type
      fitView={false} // Disable auto fit for better control over positioning
      style={{ height: '100%', minHeight: '1000px' }}
    >
      <Background />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};

const FlowWithProvider = () => {
  return (
    <ReactFlowProvider>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          height: 'auto',
          overflow: 'hidden',
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
          Features Flow
        </Typography>
        <Features />
      </Box>
    </ReactFlowProvider>
  );
};

export default FlowWithProvider;
