import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Default fallback posts in case API fails
const defaultPosts = [
  {
    tag: 'AI & SALES',
    title: 'How AI Calling is Transforming Outbound Sales',
    excerpt: 'Discover how AI voices and real-time insights help sales teams connect better and reduce manual effort.',
    date: 'May 28, 2024',
    readTime: '5 min read',
    accent: 'linear-gradient(135deg, #0b1f3a 0%, #1d5eea 35%, #75c8ff 100%)',
  },
];

// Function to generate gradient colors based on post index
const generateGradient = (index) => {
  const gradients = [
    'linear-gradient(135deg, #0b1f3a 0%, #1d5eea 35%, #75c8ff 100%)',
    'linear-gradient(135deg, #f3e8d8 0%, #d3c0a0 35%, #8da2b6 100%)',
    'linear-gradient(135deg, #dfeaf9 0%, #b7d0ee 34%, #7d8d9e 100%)',
    'linear-gradient(135deg, #e9edf5 0%, #bbc6d9 32%, #7d8698 100%)',
  ];
  return gradients[index % gradients.length];
};

// Helper function to get tag colors based on category
const getTagColor = (tag) => {
  const colorMap = {
    'AI & SALES': { bg: 'rgba(15, 32, 96, 0.12)', text: '#0F2060' },
    'SALES STRATEGY': { bg: 'rgba(34, 139, 34, 0.12)', text: '#228B22' },
    'DATA & INSIGHTS': { bg: 'rgba(75, 0, 130, 0.12)', text: '#4B0082' },
    'CUSTOMER EXPERIENCE': { bg: 'rgba(255, 140, 0, 0.12)', text: '#FF8C00' },
    'INSIGHTS': { bg: 'rgba(22, 119, 247, 0.08)', text: '#1677F7' },
  };
  return colorMap[tag] || { bg: 'rgba(22, 119, 247, 0.08)', text: '#1677F7' };
};

// Function to format date
const formatDate = (dateString) => {
  if (!dateString) return 'Recently';

  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
};

const getDaysAgo = (dateString) => {
  if (!dateString) return 'Recently';

  const postDate = new Date(dateString);
  const now = new Date();

  const diffMs = now - postDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 'Today';
  if (diffDays === 1) return '1 day ago';

  return `${diffDays} days ago`;
};


// Function to estimate reading time (approximately 200 words per minute)
const estimateReadTime = (content) => {
  if (!content) return '5 min read';
  
  // Handle Lexical rich text (JSON object) from Payload
  let text = '';
  if (typeof content === 'string') {
    text = content;
  } else if (content.root && content.root.children) {
    // Payload Lexical format: extract text from nested structure
    const extractText = (nodes) => {
      return nodes
        .map((node) => {
          if (node.text) return node.text;
          if (node.children) return extractText(node.children);
          return '';
        })
        .join(' ');
    };
    text = extractText(content.root.children);
  } else if (typeof content === 'object') {
    // Fallback for other object formats
    text = JSON.stringify(content);
  }
  
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
};

// Function to transform Payload API response to component data
const transformPostData = (apiPost, index) => {
  let imageUrl = apiPost.heroImage?.url || apiPost.meta?.image?.url || '';
  
  // Ensure image URL is absolute (add Payload API base URL if needed)
  if (imageUrl && !imageUrl.startsWith('http')) {
    const apiUrl = process.env.REACT_APP_PAYLOAD_API_URL || 'http://localhost:3000/api';
    const baseUrl = apiUrl.replace('/api', '');
    imageUrl = `${baseUrl}${imageUrl}`;
  }
  
  return {
    id: apiPost.id,
    slug: apiPost.slug,
    tag: apiPost.categories?.[0]?.title || 'INSIGHTS',
    title: apiPost.title,
    excerpt: apiPost.meta?.description || apiPost.title,
    date: formatDate(apiPost.createdAt),
    daysAgo: getDaysAgo(apiPost.createdAt),
    image: imageUrl,
    accent: generateGradient(index),
  };
};

const PostImage = ({ accent, image }) => (
  <Box
    sx={{
      height: 200,
      background: accent,
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {/* Display actual image if available */}
    {image && (
      <Box
        component="img"
        src={image}
        alt="Post cover"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        onError={(e) => {
          // Hide image if it fails to load, show gradient instead
          e.currentTarget.style.display = 'none';
        }}
      />
    )}
    
    {/* Overlay gradient for visual effects */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(circle at 25% 30%, rgba(255,255,255,0.35), transparent 18%), radial-gradient(circle at 70% 20%, rgba(255,255,255,0.2), transparent 22%), linear-gradient(120deg, rgba(255,255,255,0.18), rgba(255,255,255,0.02))',
        pointerEvents: 'none',
      }}
    />
    
    {/* Decorative circle */}
    <Box
      sx={{
        position: 'absolute',
        width: 130,
        height: 130,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.35)',
        right: -20,
        bottom: -16,
        pointerEvents: 'none',
      }}
    />
  </Box>
);

const BlogSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        // Configure your Payload API URL:
        // For local development: http://localhost:3000/api
        // For production: https://your-cms-domain.com/api
        const apiUrl = process.env.REACT_APP_PAYLOAD_API_URL || 'http://localhost:3000/api';
        
        // Fetch published posts, ordered by creation date (newest first)
        const response = await fetch(`${apiUrl}/posts?limit=4&sort=-createdAt&where[_status][equals]=published`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Transform API response to component data format
        const transformedPosts = data.docs.map((post, index) =>
          transformPostData(post, index)
        );
        
        setPosts(transformedPosts.length > 0 ? transformedPosts : defaultPosts);
        setError(null);
      } catch (err) {
        console.error('Error fetching posts from Payload API:', err);
        setError(err.message);
        // Fallback to default posts if API fails
        setPosts(defaultPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        background: '#f6f9ff',
        py: { xs: 4, md: 6 },
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: 1400,
          mx: 'auto',
        }}
      >
       <Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
    mb: 4,
    flexWrap: 'nowrap',
  }}
>
  <Box sx={{ flex: 1, minWidth: 0 }}>
    <Typography
      variant="overline"
      sx={{
        display: 'block',
        color: '#1677F7',
        fontWeight: 700,
        letterSpacing: '0.12em',
        fontSize: '0.76rem',
        mb: 1,
      }}
    >
      INSIGHTS
    </Typography>

    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        lineHeight: 1.15,
        color: '#101828',
        fontSize: { xs: '1.8rem', md: '2.55rem' },
        whiteSpace: { xs: 'normal', md: 'nowrap' },
        letterSpacing: '-0.02em',
      }}
    >
      Latest thinking, ideas and industry perspectives
    </Typography>
  </Box>

  <Button
    endIcon={<ArrowForwardIcon />}
    sx={{
      color: '#1677F7',
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '1rem',
      px: 0,
      minWidth: 'fit-content',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      '& .MuiButton-endIcon': {
        marginLeft: '8px',
      },
      '&:hover': {
        background: 'transparent',
      },
    }}
  >
    View All Insights
  </Button>
</Box>

        {/* Loading state */}
        {loading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              py: 8,
            }}
          >
            <CircularProgress sx={{ color: '#1677F7' }} />
          </Box>
        )}

        {/* Error state */}
        {error && !loading && (
          <Box
            sx={{
              p: 2,
              mb: 2,
              background: 'rgba(220, 53, 69, 0.1)',
              border: '1px solid rgba(220, 53, 69, 0.3)',
              borderRadius: 2,
              color: '#721c24',
            }}
          >
            <Typography variant="body2">
              Unable to load posts from API. Showing default posts instead.
            </Typography>
          </Box>
        )}

        {/* Posts grid */}
        {!loading && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
              gap: 2.5,
              pb: isMobile ? 1 : 0,
            }}
          >
            {posts.map((post, index) => (
              <Box
                key={post.id || post.title}
                onClick={() => navigate(`/insights/${post.slug}`)}
                sx={{
                  background: '#fff',
                  borderRadius: 0, // from first image, edges might be sharper or just 4px
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  minHeight: 400,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 30px rgba(16, 24, 40, 0.08)',
                  },
                }}
              >
                {/* Fixed height image container */}
                <Box sx={{ height: 220, overflow: 'hidden', position: 'relative', background: post.accent }}>
                  {post.image && (
                    <Box
                      component="img"
                      src={post.image}
                      alt={post.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                </Box>

                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Tag and Read Time Row */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#6B7280',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {post.tag}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.75rem',
                        color: '#6B7280',
                      }}
                    >
                      {post.daysAgo}
                    </Typography>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      lineHeight: 1.35,
                      color: '#111827',
                      fontSize: isMobile ? '1.1rem' : '1.2rem',
                      mb: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {post.title}
                  </Typography>

                  {/* Excerpt */}
                  <Typography
                    sx={{
                      color: '#4B5563',
                      lineHeight: 1.6,
                      fontSize: '0.95rem',
                      mb: 3,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {post.excerpt}
                  </Typography>

                  <Box sx={{ flexGrow: 1 }} />

                  {/* Read More Link */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mt: 'auto',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#1677F7',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      READ MORE
                    </Typography>
                    <ArrowForwardIcon sx={{ ml: 0.5, color: '#1677F7', fontSize: '1.1rem' }} />
                  </Box>
                </Box>
              </Box>
          ))}
        </Box>
        )}
      </Box>
    </Box>
  );
};

export default BlogSection;

