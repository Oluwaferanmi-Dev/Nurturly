# Sanity CMS Testing Guide for Nurturly Heritage

This guide provides step-by-step instructions to physically test all Sanity functionality in your project.

## 1. Prerequisites

- Node.js installed
- npm or pnpm installed
- Sanity CLI installed globally: `npm install -g sanity`
- Environment variables configured (`.env.local`)
- Project built successfully: `npm run build`

## 2. Starting the Development Environment

### Start the Next.js Dev Server
```bash
cd c:\Users\Zod\Documents\code\nurturly
npm run dev
```
The application will be available at `http://localhost:3000`

### Access the Sanity Studio
Navigate to `http://localhost:3000/sanity-studio` in your browser.

You should see the Sanity Studio interface with three document types:
- **Blog Post** - for creating blog content
- **Job Listing** - for posting career opportunities
- **Job Application** - displays submitted applications

## 3. Testing Schema & Content Management

### 3.1 Create a Test Blog Post

1. Go to **Blog Post** in Sanity Studio
2. Click **Create** → **Blog Post**
3. Fill in the following fields:
   - **Title**: "Test: Why Home Care Matters"
   - **Slug**: system auto-generates from title
   - **Published At**: May 5, 2026
   - **Category**: Select "Health & Wellness"
   - **Excerpt**: "A meaningful article about quality care"
   - **Main Image**: Upload a test image (optional)
   - **Body**: Add some test content using the editor

4. Click **Publish** to make it live
5. Verify it appears on `http://localhost:3000/blog`

### 3.2 Create a Test Job Listing

1. Go to **Job Listing** in Sanity Studio
2. Click **Create** → **Job Listing**
3. Fill in the following fields:
   - **Job Title**: "Certified Nursing Assistant (Test)"
   - **Slug**: auto-generates
   - **Location**: "Houston, TX"
   - **Employment Type**: "Full-Time"
   - **Active**: Toggle ON
   - **Short Description**: "Provide compassionate care in a luxury home environment"
   - **Responsibilities**: Add at least 3 bullet points
   - **Requirements**: Add at least 3 bullet points
   - **Qualifications**: Add relevant qualifications

4. Click **Publish**
5. Verify it appears on `http://localhost:3000/careers`

### 3.3 Test Job Application Submission

1. Go to `http://localhost:3000/careers` in the browser
2. Find the test job posting you created
3. Click the apply button
4. Fill in the application form:
   - Full Name
   - Email
   - Phone
   - Experience
   - Why Nurturly
   - Resume (PDF or DOC file - max 5MB)

5. Submit the form
6. Check the Sanity Studio → **Job Application** to see if it was saved
   - You should see a new application document
   - Verify all fields are captured correctly
   - Check the status is "new"
   - Timestamp should match submission time

### 3.4 Test Job Application Management

1. In Sanity Studio, go to **Job Application**
2. Click on the application you just submitted
3. Update the **Status** field:
   - Change from "new" to "reviewing"
   - Then try "shortlisted" or "rejected"
4. Add some **Internal Notes**
5. Click **Publish Draft**
6. Reopen the document to verify changes were saved

## 4. Testing Queries (GROQ)

Use the **Vision** tab in Sanity Studio to test GROQ queries:

### 4.1 Query All Active Job Listings
```groq
*[_type == "jobListing" && isActive == true] {
  _id,
  title,
  slug,
  location,
  type
}
```

### 4.2 Query All Blog Posts
```groq
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  category
}
```

### 4.3 Query Job Applications
```groq
*[_type == "application"] | order(submittedAt desc) {
  _id,
  fullName,
  email,
  roleTitle,
  status,
  submittedAt
}
```

### 4.4 Query with Projections
```groq
*[_type == "application" && status == "new"] {
  _id,
  fullName,
  email,
  phone,
  roleTitle,
  status
}
```

## 5. Testing API Integration

### 5.1 Test Career Application Submission via API

Open your browser console or use an API testing tool (Postman, curl):

```bash
curl -X POST http://localhost:3000/api/careers/apply \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Test User",
    "email": "test@example.com",
    "phone": "7135551234",
    "roleTitle": "Certified Nursing Assistant",
    "experience": "5 years in home care",
    "whyNurturly": "I believe in dignity-centered care",
    "resumeUrl": "https://example.com/resume.pdf"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Thank you for applying — we'll be in touch soon.",
  "data": {
    "_id": "...",
    "_type": "application",
    "fullName": "John Test User",
    "email": "test@example.com",
    "status": "new",
    "submittedAt": "2026-05-05T..."
  }
}
```

### 5.2 Verify Data in Sanity

After the API call:
1. Refresh the Sanity Studio browser tab
2. Go to **Job Application**
3. The new application should appear at the top of the list

## 6. Testing Image Functionality

### 6.1 Upload Images to Blog Posts

1. Create a new blog post in Sanity Studio
2. Click on **Main Image** field
3. Upload a test image (JPG, PNG, WebP)
4. Fill in **Alt Text** for accessibility
5. Optionally add a **Caption**
6. Publish the post

### 6.2 Verify Image Rendering

1. Navigate to `http://localhost:3000/blog/[slug]` to view the blog post
2. The main image should display correctly
3. Right-click image and check it loads from Sanity's CDN

## 7. Testing Preview & Publishing

### 7.1 Draft vs Published States

1. Create a new document but DON'T publish
2. In the top-right, you'll see a "Draft" badge
3. Changes are saved automatically to drafts
4. Click **Publish** to make it live
5. The badge changes to show it's published
6. Both draft and published versions are tracked by Sanity

### 7.2 Unpublish Content

1. Open a published document
2. Click the three-dot menu (⋯)
3. Select **Unpublish**
4. This removes it from production while keeping the draft

## 8. Testing Search & References

### 8.1 Reference Fields

1. In Job Listing, check if there are any reference fields to other documents
2. Try creating relationships between documents
3. Verify references resolve correctly in the frontend

### 8.2 Full-Text Search

1. In Sanity Studio, use the search bar to find content
2. Search by:
   - Document type
   - Title
   - Content keywords
   - Dates

## 9. Troubleshooting

### Issue: "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
**Solution**: Ensure `.env.local` has these variables:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=ms0vxdr0
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_write_token_here
```

### Issue: Sanity Studio at `/sanity-studio` returns 404
**Solution**: 
- Ensure dev server is running (`npm run dev`)
- Rebuild if necessary: `npm run build`
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Changes in Sanity don't appear on frontend
**Solution**:
- If using ISR (Incremental Static Regeneration), wait 60 seconds for revalidation
- Manually refresh frontend page
- Check browser console for errors
- Verify queries in Vision tab match your expectations

### Issue: Images not displaying
**Solution**:
- Verify image is properly uploaded in Sanity
- Check image URL in document preview
- Ensure `urlFor()` utility is used correctly
- Check image field has required alt text

## 10. Performance Testing

### 10.1 Check Query Performance

1. Open Sanity Studio Vision tab
2. Run a query and check execution time
3. For large datasets, add limits: `*[_type == "post"] | order(_createdAt desc)[0...10]`
4. Use projections to only fetch needed fields

### 10.2 Image Optimization

1. Check images load from CDN (should be `cdn.sanity.io`)
2. Verify responsive sizes are working
3. Test on slow network (DevTools → Network throttling)

## 11. Security Testing

### 11.1 Verify API Token Scope

1. The `writeClient` uses `SANITY_API_TOKEN` which should have:
   - Read permissions (all datasets)
   - Write permissions (for applications document type)
   - No delete permissions (for safety)

2. Test write operations work:
   - Create a test application via API
   - Verify it appears in Sanity Studio

3. Verify public dataset is readable but not writable from frontend:
   - Check `client.fetch()` works (read-only)
   - Try to create document from frontend (should fail)

## 12. Content Validation Testing

### 12.1 Test Required Fields

1. Try to publish a blog post without a title
   - Should show validation error
   - Cannot proceed until filled

2. Try to publish a job listing without a slug
   - Should show validation error

### 12.2 Test Field Constraints

1. Try to create a blog post title > 100 characters
   - Should show validation warning
   - Cannot proceed until corrected

2. Try to create a job location but leave it empty
   - Should succeed (optional field)

## 13. Final Verification Checklist

- [ ] Dev server runs without errors (`npm run dev`)
- [ ] Sanity Studio loads at `/sanity-studio`
- [ ] Can create blog posts
- [ ] Can create job listings
- [ ] Blog posts appear on `/blog` page
- [ ] Job listings appear on `/careers` page
- [ ] Job applications can be submitted via form
- [ ] Applications appear in Sanity Studio
- [ ] Can update application status
- [ ] Images upload and display correctly
- [ ] GROQ queries work in Vision tab
- [ ] API endpoints respond correctly
- [ ] No console errors in browser DevTools
- [ ] Environment variables are correctly set

## 14. Regular Maintenance Testing

Run these tests periodically:

**Weekly:**
- Verify content publishes correctly
- Check for broken links
- Test form submissions

**Monthly:**
- Review application data for errors
- Test backup/restore procedures
- Check for any API errors in logs

**Quarterly:**
- Full schema audit
- Performance benchmarking
- Security review

---

**Testing Environment**: Development
**Last Updated**: May 5, 2026
**Project**: Nurturly Heritage
