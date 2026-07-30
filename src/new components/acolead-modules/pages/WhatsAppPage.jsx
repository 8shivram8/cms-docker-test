import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Button, Stack, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import InsightsIcon from '@mui/icons-material/Insights';

import acoleadLogo from '../../../assets/acolead-crm.png';
import Footer from '../../../acolead new landing page/Footer';
import bgImage from '../../../acolead new landing page/images/bg.png';
import marketingImage from "../../../assets/marketing1.jpeg";
import { LICENSE_NAV_ITEMS } from '../constants';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleScrollToForm = () => {
  scrollToSection("contactForm");
};
const WhatsAppPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookDemoClick = () => {
    navigate("/?demo=true");
  };

  const productName = "WHATSAPP";

  const handleStartClick = () => {
    navigate(`/product/signup?product=${productName}`);
  };
  const workflow = [
    {
      title: 'Capture incoming WhatsApp conversations',
      text: 'Every message is captured instantly and organized into your CRM workflow.',
    },
    {
      title: 'Respond faster with shared context',
      text: 'Keep your team aligned by turning chats into clear, actionable lead records.',
    },
    {
      title: 'Automate follow-ups and reminders',
      text: 'Send timely replies, nurture prospects, and prevent missed opportunities.',
    },
  ];

  const benefits = [
    'Bring WhatsApp conversations into one CRM workflow',
    'Reduce response time and improve lead qualification',
    'Trigger automated follow-ups without manual effort',
    'Track conversions from messaging to deal closure',
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          borderBottom: '1px solid #eef4ff',
          bgcolor: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            maxWidth: 1400,
            mx: 'auto',
            px: { xs: 2, md: 4 },
            py: 1.4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <img src={acoleadLogo} alt="AcoLead" style={{ height: '40px' }} />
          </Box>

          <Stack direction="row" spacing={1} sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex' } }}>
            {LICENSE_NAV_ITEMS.map((item) => (
              <Button
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  minWidth: 'auto',
                  px: 1.5,
                  color: location.pathname === item.path ? '#1677F7' : '#334155',
                  fontWeight: location.pathname === item.path ? 700 : 600,
                  textTransform: 'none',
                  borderRadius: '999px',
                  '&:hover': { bgcolor: '#f7fbff' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Box sx={{ width: 40 }} />
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 8 },
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundColor: '#f8fbff',
        }}
      >
        <Grid container spacing={6} alignItems="center" sx={{ maxWidth: 1400, mx: 'auto' }}>
          <Grid item xs={12} md={7}>
            <Stack spacing={2.5}>
              <Chip
                label="WhatsApp sales automation"
                sx={{ alignSelf: 'flex-start', bgcolor: '#fff', border: '1px solid #dfefff', color: '#1677F7', fontWeight: 700, px: 1.5, py: 0.5, borderRadius: '999px' }}
              />

              <Typography sx={{ fontSize: { xs: 34, md: 50 }, fontWeight: 800, lineHeight: 1.15, color: '#111827' }}>
                Turn WhatsApp conversations into{' '}
                <Box component="span" sx={{ color: '#25D366' }}>
                  qualified leads
                </Box>
              </Typography>

              <Typography sx={{ fontSize: { xs: 16, md: 18 }, color: '#4b5563', lineHeight: 1.8, maxWidth: 650 }}>
                Connect WhatsApp Business to AcoLead and capture every enquiry, reply instantly, and move each conversation into your sales pipeline with full context.
              </Typography>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={handleStartClick}
                sx={{
                  bgcolor: '#25D366',
                  px: 4,
                  py: 1.4,
                  borderRadius: '999px',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: 16,
                  width: { xs: '100%', sm: 'fit-content' },
                  '&:hover': { bgcolor: '#1fb857' },
                }}
              >
                Start with WhatsApp
              </Button>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#0f172a' }}>
                  <AutoAwesomeIcon sx={{ color: '#1677F7' }} />
                  <Typography fontWeight={600}>Instant replies</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#0f172a' }}>
                  <ForumOutlinedIcon sx={{ color: '#25D366' }} />
                  <Typography fontWeight={600}>Shared inbox workflow</Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 24px 70px rgba(15, 23, 42, 0.14)', border: '1px solid rgba(255,255,255,0.9)' }}>
              <img src={marketingImage} alt="WhatsApp lead automation" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
              <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,23,42,0.05) 0%, rgba(15,23,42,0.35) 100%)' }} />
              <Box sx={{ position: 'absolute', left: 20, right: 20, bottom: 20, borderRadius: '20px', bgcolor: 'rgba(255,255,255,0.95)', px: 2.5, py: 2 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <WhatsAppIcon sx={{ color: '#25D366', fontSize: 28 }} />
                  <Typography fontWeight={700} color="#111827">Turn every message into a sales opportunity</Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 10 }, bgcolor: '#fff' }}>
        <Typography align="center" sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 800, color: '#111827', mb: 2 }}>
          How WhatsApp lead capture works
        </Typography>
        <Typography align="center" sx={{ color: '#64748b', fontSize: 18, maxWidth: 760, mx: 'auto', mb: 6 }}>
          Keep conversations organized, follow up quickly, and turn every enquiry into a measurable sales opportunity.
        </Typography>

        <Grid container spacing={3} alignItems="stretch">
          {workflow.map((item, index) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', p: 4, borderRadius: 4, bgcolor: '#f8fbff', border: '1px solid #e6f0ff', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)' }}>
                <Box sx={{ width: 48, height: 48, borderRadius: '50%', bgcolor: index === 0 ? '#1677F7' : index === 1 ? '#25D366' : '#0f172a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, mb: 2.5 }}>
                  {index + 1}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: 20, mb: 1, color: '#111827' }}>{item.title}</Typography>
                <Typography sx={{ color: '#64748b', lineHeight: 1.7 }}>{item.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 10 }, bgcolor: '#f8fbff' }}>
        <Grid container spacing={6} alignItems="center" sx={{ maxWidth: 1400, mx: 'auto' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#fff', borderRadius: 4, p: { xs: 3, md: 4.5 }, boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)', border: '1px solid #eaf2ff' }}>
              <Typography sx={{ fontSize: 30, fontWeight: 800, color: '#111827', mb: 2 }}>Why teams choose this flow</Typography>
              <Typography sx={{ color: '#64748b', fontSize: 17, lineHeight: 1.8, mb: 3 }}>AcoLead turns WhatsApp engagement into organized, actionable pipeline while keeping your sales team productive.</Typography>

              <Stack spacing={1.8}>
                {benefits.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <ChecklistRoundedIcon sx={{ color: '#1677F7', mt: 0.3 }} />
                    <Typography sx={{ color: '#334155', lineHeight: 1.7 }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08)', bgcolor: '#fff' }}>
              <img src={marketingImage} alt="WhatsApp dashboard" style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, px: { xs: 3, md: 10 }, bgcolor: '#111827' }}>
        <Box sx={{ maxWidth: 1100, mx: 'auto', borderRadius: 4, p: { xs: 3, md: 5 }, background: 'linear-gradient(135deg, #25D366 0%, #1677F7 100%)', boxShadow: '0 20px 45px rgba(0,0,0,0.18)' }}>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
            <Box>
              <Typography sx={{ color: '#fff', fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 1 }}>Make every WhatsApp conversation count</Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.9)', maxWidth: 620, lineHeight: 1.7 }}>Bring messaging into one system so your team can engage faster, qualify leads sooner, and close more business.</Typography>
            </Box>
            <Button variant="contained" onClick={handleBookDemoClick} sx={{ bgcolor: '#fff', color: '#1677F7', px: 4, py: 1.4, borderRadius: '999px', textTransform: 'none', fontWeight: 700, fontSize: 16, '&:hover': { bgcolor: '#f8fbff' } }}>
              Book a Demo
            </Button>
          </Stack>
        </Box>
      </Box>

      <Footer scrollToSection={scrollToSection} handleScrollToForm={handleScrollToForm} />
    </Box>
  );
};

export default WhatsAppPage;
