# Blog Section Payload API Integration

## Overview
The BlogSection component has been updated to fetch blog post data dynamically from your Payload CMS API instead of using hardcoded data. This allows you to manage blog posts from the CMS admin panel, and changes will automatically appear on the website.

## Setup Instructions

### 1. Environment Configuration

Add the following environment variable to your `.env` file in the root of your project:

```bash
# For local development
REACT_APP_PAYLOAD_API_URL=http://localhost:3000/api

# For production
REACT_APP_PAYLOAD_API_URL=https://your-cms-domain.com/api
```

### 2. Verify Payload CMS Collections

Ensure your Payload CMS has the following collections configured:

- **Posts Collection** (`/cms/src/collections/Posts/index.ts`)
  - `title` (text, required)
  - `slug` (text, required)
  - `heroImage` (upload/media)
  - `categories` (relationship to Categories)
  - `meta.description` (text - used as excerpt)
  - `meta.image` (upload/media)
  - `content` (richText - used for read time estimation)
  - `createdAt` (auto-generated timestamp)

### 3. Data Mapping

The component automatically transforms Payload API responses to the following format:

```typescript
{
  id: string,              // Post ID from Payload
  slug: string,            // Post slug for URL
  tag: string,             // Category name (from first category)
  title: string,           // Post title
  excerpt: string,         // From meta.description or title fallback
  date: string,            // Formatted creation date
  readTime: string,        // Calculated reading time (~200 words/min)
  image: string,           // Hero image or meta image URL
  accent: string,          // Gradient color (auto-assigned)
}
```

## Features

### Dynamic Data Loading
- Automatically fetches up to 4 most recent published posts
- Sorted by creation date (newest first)
- Only displays posts with `_status: published`

### Fallback Behavior
- If API fails to load, displays default fallback posts
- Shows error message to indicate API issue
- Users can still see content

### Loading States
- Displays loading spinner while fetching data
- Shows error notification if API fails
- Smooth transitions between states

### Styling Enhancements
- Added hover effects (lift animation on post cards)
- Cursor changes to pointer for interactive feedback
- Gradient colors auto-cycle through 4 predefined palettes

## API Query

The component makes the following API request:

```
GET /api/posts?limit=4&sort=-createdAt&where[_status][equals]=published
```

**Parameters:**
- `limit=4`: Fetch up to 4 posts
- `sort=-createdAt`: Sort by creation date (newest first)
- `where[_status][equals]=published`: Only fetch published posts

## Modifying the Component

### Change Number of Posts
Edit line ~133 in `BlogSection.jsx`:
```javascript
const response = await fetch(`${apiUrl}/posts?limit=4&sort=-createdAt...
```
Change `limit=4` to your desired number.

### Change API Endpoint
Edit line ~130:
```javascript
const apiUrl = process.env.REACT_APP_PAYLOAD_API_URL || 'http://localhost:3000/api';
```

### Custom Data Transformation
Modify the `transformPostData()` function (lines ~54-68) to map different Payload fields:
```typescript
const transformPostData = (apiPost, index) => {
  return {
    // Customize field mappings here
  };
};
```

## Testing

### Local Development
1. Ensure your Payload CMS server is running on `http://localhost:3000`
2. Start your React app
3. Navigate to the blog section
4. Verify posts load from the API

### Verifying API Connection
Open browser DevTools → Network tab and look for requests to:
```
/api/posts?limit=4&sort=-createdAt&where[_status][equals]=published
```

### Troubleshooting

**Posts not loading?**
- Check if `REACT_APP_PAYLOAD_API_URL` environment variable is set
- Verify Payload CMS server is running
- Check browser console for error messages
- Ensure posts have `_status: published`

**Incorrect data displayed?**
- Verify post fields match the expected schema in `Posts` collection
- Check that categories are properly assigned to posts
- Ensure `meta.description` contains excerpt text

**CORS errors?**
- Verify `cors` configuration in `/cms/src/payload.config.ts`
- Ensure the frontend URL is whitelisted

## Related Files

- **Component:** [src/acolead new landing page/BlogSection.jsx](../src/acolead%20new%20landing%20page/BlogSection.jsx)
- **CMS Collections:** [cms/src/collections/](../cms/src/collections/)
- **Payload Config:** [cms/src/payload.config.ts](../cms/src/payload.config.ts)
