import { Box } from "@mui/material";
import { leadCaputureAddon } from "./license.types";
import { instagramAndFacebookIcon, youtubeLogo } from "../../assets";
import { LanguageOutlined as LanguageOutlinedIcon, PhoneInTalkOutlined as PhoneInTalkOutlinedIcon, WhatsApp as WhatsAppIcon } from "@mui/icons-material";

const ICON_SIZE = 28;

export const PRODUCT_OPTIONS = [
    {
        id: leadCaputureAddon.INSTAGRAM,
        label: 'Instagram & Facebook',
        logo: ({ size = ICON_SIZE }) => (
            <Box
                component="img"
                src={instagramAndFacebookIcon}
                alt=""
                sx={{ width: size, height: size, objectFit: 'contain' }}
            />
        ),
        iconSize: {
            mainPageCard: 40,
            registerPageCard: 40,
        },
        tagline: 'Social lead capture',
        description: 'Capture DMs & comments as leads and reply from one unified inbox.',
        accent: '#E1306C',
        selectable: true,
        startingPriceLabel: 'From ₹2,999/mo',
        trialLabel: '7-day free trial',
        mainPageHeading: (
            <>
                Grow Your{' '}
                <Box component="span" sx={{ color: '#E1306C' }}>
                    Instagram & Facebook
                </Box>{' '}
                Leads on Autopilot
            </>
        ),
        mainPageDescription: 'Automatically capture DMs and comments as leads, engage with prospects, and manage all conversations from a single unified inbox—never miss a sales opportunity again.'
    },
    {
        id: leadCaputureAddon.WHATSAPP,
        label: 'WhatsApp',
        logo: ({ color, size = ICON_SIZE }) => (
            <WhatsAppIcon
                sx={{
                    fontSize: size,
                    color: color ?? "#25D366",
                }}
            />
        ),
        iconSize: {
            mainPageCard: 45,
            registerPageCard: 45,
        },
        tagline: 'Business messaging',
        description: 'Connect WhatsApp Business API and automate follow-ups at scale.',
        accent: '#25D366',
        selectable: true,
        startingPriceLabel: 'From ₹4,999/mo',
        trialLabel: '7-day free trial',
        mainPageHeading: (
            <>
                Scale Your{' '}
                <Box component="span" sx={{ color: '#25D366' }}>
                    WhatsApp
                </Box>{' '}
                Business Messaging
            </>
        ),
        mainPageDescription: 'Connect WhatsApp Business API to send automated follow-ups, broadcast messages, and manage high-volume conversations with AI-powered chatbots that convert 3x faster.'
    },
    {
        id: leadCaputureAddon.AI_CALLING,
        label: 'AI Calling',
        logo: ({ color, size = ICON_SIZE }) => (
            <PhoneInTalkOutlinedIcon
                sx={{
                    fontSize: size,
                    color: color ?? "#5C6BC0",
                }}
            />
        ),
        iconSize: {
            mainPageCard: 36,
            registerPageCard: 36,
        },
        tagline: 'Smart outbound calls',
        description: 'AI-assisted calls with summaries and automatic call logging.',
        accent: '#5C6BC0',
        comingSoon: false,
        selectable: true,
        startingPriceLabel: 'From ₹4,999/mo',
        trialLabel: '7-day free trial',
        mainPageHeading: (
            <>
                Supercharge Sales with{' '}
                <Box component="span" sx={{ color: '#5C6BC0' }}>
                    AI Calling
                </Box>
            </>
        ),
        mainPageDescription: 'Make intelligent outbound calls with AI assistance—get real-time summaries, automatic call logging, and actionable insights to close deals more efficiently than ever before.'
    },
    {
        id: leadCaputureAddon.YOUTUBE,
        label: 'YouTube',
        logo: ({ size = ICON_SIZE }) => (
            <Box
                component="img"
                src={youtubeLogo}
                alt=""
                sx={{ width: size, height: size, objectFit: 'contain' }}
            />
        ),
        iconSize: {
            mainPageCard: 40,
            registerPageCard: 40,
        },
        tagline: 'Video channel leads',
        description: 'Turn YouTube comments and enquiries into structured leads.',
        accent: '#FF0000',
        comingSoon: true,
        selectable: false,
    },
    {
        id: leadCaputureAddon.WEBSITE,
        label: 'Website',
        logo: ({ color, size = ICON_SIZE }) => (
            <LanguageOutlinedIcon
                sx={{
                    fontSize: size,
                    color: color ?? "#1976d2",
                }}
            />
        ),
        iconSize: {
            mainPageCard: 40,
            registerPageCard: 40,
        },
        tagline: 'AI-powered microsite',
        description: 'Launch a branded property site and capture enquiries in minutes.',
        accent: '#1976d2',
        comingSoon: true,
        selectable: false,
    },
];

export const LICENSE_NAV_ITEMS = [
    { label: 'Home', path: '/' },
    { label: 'Instagram & Facebook', path: '/modules/instagram' },
    { label: 'WhatsApp', path: '/modules/whatsapp' },
    { label: 'AI Calling', path: '/modules/ai-calling' },
];