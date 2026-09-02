# Local Development Setup - Dual Server Configuration

## Ports Configuration
- **Payload CMS Admin**: `http://localhost:3000` (Port 3000)
- **React Frontend**: `http://localhost:3001` (Port 3001)
- **API Requests**: Frontend → `http://localhost:3000/api`

## Running Both Servers

### Terminal 1: Start Payload CMS (Port 3000)
```bash
cd cms
npm run dev
```
Access admin panel: http://localhost:3000/admin

### Terminal 2: Start React Frontend (Port 3001)
```bash
npm start
```
The app will automatically start on `http://localhost:3001`

## Configuration Files

### Root `.env` (Frontend)
```env
REACT_APP_PAYLOAD_API_URL=http://localhost:3000/api
```
✅ **Already configured** - The BlogSection component will fetch posts from this URL

### CMS `.env` (Payload Server)
```env
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```
✅ **Already configured** - Payload runs on port 3000

## CORS Configuration
✅ **Already updated** - `cms/src/payload.config.ts` now allows:
- `http://localhost:3000` (Payload admin)
- `http://localhost:3001` (React frontend)
- Production URLs via `getServerSideURL()`

## Quick Start Commands

**One-time setup** (if needed):
```bash
# Install dependencies in both directories
cd cms && npm install
cd .. && npm install
```

**Development workflow:**
```bash
# Terminal 1 (Payload CMS)
cd coalitionify-website/cms
npm run dev

# Terminal 2 (React Frontend)
cd coalitionify-website
npm start
```

## Testing the Integration

1. Go to http://localhost:3000/admin
2. Login to Payload CMS
3. Create/publish blog posts in the Posts collection
4. Go to http://localhost:3001
5. BlogSection component should display posts from the API
6. Check browser console (F12) for any errors

## Troubleshooting

**Posts not loading?**
- Verify both servers are running
- Check browser DevTools → Network tab for API requests
- Ensure posts have `_status: published`
- Check console for CORS errors

**CORS Error?**
- Restart Payload CMS after configuration changes
- Verify `localhost:3001` is in CORS config

**API returns 404?**
- Ensure you're not logged out of Payload
- Verify published posts exist in the database
- Check that post data includes required fields

## Environment Variables Reference

| Variable | Value | Location |
|----------|-------|----------|
| `REACT_APP_PAYLOAD_API_URL` | `http://localhost:3000/api` | Root `.env` |
| `NEXT_PUBLIC_SERVER_URL` | `http://localhost:3000` | `cms/.env` |
| `DATABASE_URL` | MongoDB connection | `cms/.env` |
| `PAYLOAD_SECRET` | JWT encryption key | `cms/.env` |
