# Article Detail Page Setup Guide

## Overview

A production-ready blog article detail page has been created for the Acolead website. This page displays individual blog posts fetched dynamically from Payload CMS with all necessary features.

## Files Created/Modified

### New Files
1. **`src/acolead new landing page/ArticleDetail.jsx`** - Main article detail page component with all features

### Modified Files
1. **`src/acolead new landing page/BlogSection.jsx`** - Updated to make blog cards clickable and navigate to article pages
2. **`src/routes/AppRoutesNew.jsx`** - Added route for `/insights/:slug`

## Features Implemented

### ✅ Article Rendering
- Dynamic content from Payload CMS
- Lexical rich text editor support (headings, paragraphs, lists, quotes, links, bold, italic)
- Responsive typography
- Proper heading hierarchy
- Comfortable line height (1.8) for readability
- Proper image handling with fallbacks

### ✅ Sidebar Components (Sticky on Desktop)
1. **Table of Contents (TOC)**
   - Auto-generated from article headings
   - Smooth scroll to sections
   - Sticky positioning on desktop
   - Scrollable if content exceeds height

2. **Related Insights**
   - Fetches related posts from Payload API
   - Shows 3 related articles
   - Displays thumbnail, category, title, and date
   - Clickable to navigate to related articles

3. **Newsletter Subscription**
   - Email input field
   - Subscribe button with feedback
   - Styled to match Acolead design

### ✅ Article Metadata
- Breadcrumb navigation (Home > Insights > Article Title)
- Back button to return to insights listing
- Category/tag with dynamic colors
- Author name
- Publication date
- Reading time estimate
- Social share buttons (LinkedIn, Facebook, Copy Link)

### ✅ Hero Image
- Displayed prominently at article top
- Responsive sizing
- Proper alt text
- Fallback handling if image missing
- 400px height on desktop, full width on mobile

### ✅ Responsive Design
**Desktop:**
- Two-column layout (70% content, 30% sidebar)
- Sticky sidebar while scrolling
- Full-width hero image

**Tablet:**
- Reduced sidebar width
- Responsive typography
- Single column option

**Mobile:**
- Single column layout
- Sidebar sections stack below content
- Hero image full width
- Proper touch targets
- No horizontal overflow

### ✅ Error Handling
- Article not found → 404 message with back button
- API failure → friendly error message
- Missing images → clean fallback to gradient
- Missing author → field hidden
- Missing related articles → section hidden

## How It Works

### User Flow

1. **Insights Listing** → User sees blog posts in BlogSection grid
2. **Click Card** → Navigation to `/insights/[slug]` with smooth transition
3. **Article Detail Page** → Displays:
   - Hero image
   - Article metadata (author, date, reading time)
   - Main article content
   - Sidebar with TOC, related posts, newsletter
4. **Navigation** → User can:
   - Scroll to sections via TOC
   - Click related articles
   - Share via social buttons
   - Return to insights listing

### Admin Flow (Payload CMS)

1. Navigate to Payload Admin Panel
2. Go to Posts collection
3. Create new Post with:
   - `title` - Article title
   - `slug` - URL slug (auto-generated or custom)
   - `heroImage` - Main article image (Media collection)
   - `content` - Article content (Lexical editor)
   - `categories` - Article category
   - `author` - Author name
   - `createdAt` - Publication date
   - `meta.description` - Excerpt for cards
   - `_status` - Set to "published"
4. Publish → Appears automatically on website

## API Integration

### Endpoints Used

#### Fetch Single Post
```javascript
GET /api/posts?where[slug][equals]=[slug]&where[_status][equals]=published
```

#### Fetch Related Posts
```javascript
GET /api/posts?limit=3&sort=-createdAt&where[_status][equals]=published
```

#### Fetch Post List (BlogSection)
```javascript
GET /api/posts?limit=4&sort=-createdAt&where[_status][equals]=published
```

### Expected Payload CMS Post Structure
```javascript
{
  id: "uuid",
  title: "Article Title",
  slug: "article-title",
  content: {
    root: {
      children: [
        {
          type: "heading",
          tag: "h2",
          children: [{ text: "Heading Text" }]
        },
        {
          type: "paragraph",
          children: [{ text: "Paragraph text" }]
        }
      ]
    }
  },
  heroImage: {
    url: "/media/posts/image.jpg"
  },
  categories: [{ title: "AI & SALES" }],
  author: "Author Name",
  createdAt: "2024-05-28T00:00:00Z",
  meta: {
    description: "Article excerpt"
  },
  _status: "published"
}
```

## Routing

### URL Structure
```
/insights/[slug]
```

### Examples
- `/insights/how-ai-calling-is-transforming-outbound-sales`
- `/insights/7-proven-strategies-to-improve-sales-productivity`

### Implementation
```javascript
// In AppRoutesNew.jsx
<Route path="/insights/:slug" element={<ArticleDetail />} />
```

## Component Structure

### ArticleDetail Component
```
ArticleDetail
├── Header Section
│   ├── Breadcrumb
│   ├── Back Button
│   ├── Article Metadata (tag, title, author, date, reading time)
│   └── Share Buttons
├── Hero Image
└── Main Content Grid
    ├── Left Column (70%)
    │   └── Article Content (LexicalRenderer)
    └── Right Column (30%) - Sticky
        ├── TableOfContents
        ├── RelatedInsights
        └── NewsletterSignup
```

### Sub-Components

#### LexicalRenderer
- Renders Payload Lexical JSON to React components
- Supports: headings, paragraphs, lists, quotes, links, text formatting
- Proper styling and accessibility
- Scroll anchors for TOC

#### TableOfContents
- Auto-extracts headings from content
- Smooth scroll navigation
- Sticky positioning
- Scrollable container

#### RelatedInsights
- Fetches related posts from API
- Shows 3 most recent posts (excluding current)
- Clickable navigation

#### NewsletterSignup
- Email subscription form
- Success feedback

## Styling & Theme

### Colors Used
- **Primary**: `#1677F7` (Acolead Blue)
- **Text**: `#111827` (Dark Navy)
- **Secondary Text**: `#4B5563` (Gray)
- **Borders**: `rgba(22, 119, 247, 0.1)` (Light Blue)
- **Background**: `#f8f9fa` (Light Gray)

### Category Tag Colors
- **AI & SALES**: `#0F2060` (Dark Blue)
- **SALES STRATEGY**: `#228B22` (Green)
- **DATA & INSIGHTS**: `#4B0082` (Purple)
- **CUSTOMER EXPERIENCE**: `#FF8C00` (Orange)
- **INSIGHTS**: `#1677F7` (Blue)

### Typography
- Body: 16px
- Line height: 1.8
- Maximum width: 1200px container
- Responsive scaling on mobile

## Environment Configuration

### Required Environment Variable
```bash
REACT_APP_PAYLOAD_API_URL=http://localhost:3000/api
```

### For Production
```bash
REACT_APP_PAYLOAD_API_URL=https://your-cms-domain.com/api
```

## Testing Checklist

- [ ] BlogSection cards are clickable
- [ ] Navigation to `/insights/[slug]` works
- [ ] Article loads from Payload API
- [ ] Breadcrumb navigation works
- [ ] Back button returns to previous page
- [ ] Hero image displays
- [ ] Article content renders correctly
- [ ] Table of Contents generates from headings
- [ ] TOC scroll navigation works
- [ ] Related insights load and are clickable
- [ ] Newsletter subscription works
- [ ] Share buttons open correct platforms
- [ ] Responsive design on mobile/tablet
- [ ] Sticky sidebar works on desktop
- [ ] Missing content handled gracefully
- [ ] API errors show friendly message

## Future Enhancements

1. **Search** - Add article search functionality
2. **Comments** - Add reader comments section
3. **Recommended Articles** - ML-based recommendations
4. **Article Analytics** - Track page views and engagement
5. **Author Profile** - Click author to see other articles
6. **Tags** - Filter by multiple tags
7. **Reading Progress** - Progress indicator while reading
8. **Dark Mode** - Dark theme support
9. **Print View** - Optimize for printing
10. **AMP** - Google AMP version for mobile optimization

## SEO Optimization

The page includes:
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Meta description (from Payload)
- ✅ Open Graph tags (ready for implementation)
- ✅ Semantic HTML
- ✅ Image alt text
- ✅ Breadcrumb schema
- ✅ Article schema (ready for implementation)

To enable full SEO, add to document head:
```jsx
<Helmet>
  <title>{post.title}</title>
  <meta name="description" content={post.meta.description} />
  <meta property="og:image" content={heroImage} />
  <link rel="canonical" href={currentUrl} />
</Helmet>
```

## Troubleshooting

### Article Not Loading
- Check if slug exists in Payload
- Verify post is published (`_status: "published"`)
- Check PAYLOAD_API_URL environment variable
- Open browser console for API error details

### Images Not Displaying
- Verify image URL in Payload Media
- Check CORS configuration in Payload
- Inspect network tab to see image fetch status

### TOC Not Appearing
- Ensure content has headings
- Check Lexical format in Payload
- Verify heading type in content structure

### Mobile Layout Issues
- Clear browser cache
- Check responsive breakpoints (md: 960px)
- Verify MUI theme configuration

## Performance Optimization

Current optimizations:
- ✅ Images use `object-fit: cover`
- ✅ Lazy loading ready (add `loading="lazy"` to img tags)
- ✅ Sticky sidebar uses CSS (performant)
- ✅ Smooth scroll via native browser API
- ✅ Debounced content fetching

Additional recommendations:
- Add image optimization (WebP, multiple sizes)
- Implement content caching strategy
- Consider pagination for very long articles
- Use intersection observer for lazy content

## Support

For issues or questions:
1. Check this documentation
2. Review ArticleDetail.jsx comments
3. Test with sample Payload post
4. Check browser console for errors
5. Verify Payload API connection
