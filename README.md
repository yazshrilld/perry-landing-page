# Perry Cleaning Services Website - Business Requirements Document (BRD)

## Project Overview
The Perry Cleaning Services website is a marketing and lead-generation platform.  
Its purpose is to present the company, explain services, build trust, and drive users to contact or booking actions.

## Business Goals
1. Showcase Perry Cleans brand credibility.
2. Explain service offerings clearly.
3. Convert visitors into leads through contact and booking pathways.
4. Support mobile and desktop experiences.
5. Reinforce trust through testimonials, partner references, and process transparency.

## Primary Users
1. Residential customers needing home cleaning.
2. Business customers needing office/commercial cleaning.
3. Event or industrial customers needing specialty cleaning.
4. Partners or collaborators exploring company resources.

## Current Website Pages
1. `/` Home
2. `/about` About
3. `/services` Services
4. `/resources` Resources
5. `/contact` Contact

## Functional Requirements

### Global Navigation
1. Header must provide links to Home, About, Services, and Resources.
2. "Talk to Us" must route to Contact page.
3. Mobile menu must open/close correctly and prevent background scrolling while open.
4. Current active page should be visually highlighted.

### Home Page
1. Hero section displays rotating slide images.
2. "Book a Cleaner" opens a "Coming Soon" modal.
3. Main sections render: Intro, Services, Partners, CTA, Testimonials, Blogs, Footer.
4. Partners section displays trusted-company marquee.
5. Testimonials and blog cards provide social proof and educational content.

### About Page
1. Displays mission, vision, story, leadership, and team sections.
2. "Book a Cleaner" opens the "Coming Soon" modal.
3. "Contact Us" routes to `/contact`.
4. Footer renders at page end.

### Services Page
1. Displays service categories and scope details (included and excluded items).
2. Displays pricing guidance using custom quote model.
3. Displays service process and FAQ content.
4. Booking CTAs open "Coming Soon" modal.
5. "Get a Quote" buttons are currently visual only (no active link/action).

### Resources Page
1. Displays talent pool, tools/equipment standards, training content, and partner categories.
2. "Contact for Access" opens the "Coming Soon" modal.
3. Final CTA routes to `/contact`.

### Contact Page
1. Displays contact channels: phone, email, work hours, location.
2. Contact form requires Full Name, Email, and Message.
3. On valid submit, user sees success message.
4. Form submission is currently frontend-only (no backend integration).
5. "Call Us" actions use `tel:` links.

### Booking Modal
1. Booking-related buttons trigger a reusable "Coming Soon" modal.
2. Modal displays temporary fallback contact phone numbers.
3. User can close modal via "Got it".

## Non-Functional Requirements
1. Responsive behavior across mobile, tablet, and desktop.
2. Reasonable page load performance with image optimization.
3. Accessible image alt text and clear CTA readability.
4. Stable rendering on all implemented routes.

## Known Limitations and Open Items
1. Some CTAs are not connected to active destinations (for example, Hero "Learn More", Services "Get a Quote").
2. Blog links ("View all posts", "Read more") are placeholders (`#`).
3. Several footer links point to pages not yet implemented (`/careers`, `/pricing`, `/faq`, `/sustainability`, `/partners`, `/testimonials`, `/blog`).
4. Footer social links are placeholders (`#`).
5. Phone number correctness is still listed as a pending TODO item.
6. Mobile responsiveness still needs full QA verification across all pages.
7. Partner authenticity/content validation is listed as a pending TODO concern.

## QA Testing Focus
1. Verify route accessibility for all implemented pages.
2. Confirm all major CTAs either work or intentionally show placeholder behavior.
3. Validate contact form requirements and success-state behavior.
4. Test mobile menu behavior and no-scroll state.
5. Perform responsive checks for common breakpoints.
6. Ensure users can always reach a contact path from key pages.

## Current Acceptance Criteria (Phase)
1. Users can navigate all primary implemented routes without errors.
2. Users can contact the business from each major page.
3. Booking intent is handled through the "Coming Soon" modal and phone fallback.
4. Core brand and service content renders correctly on mobile and desktop.
5. Known placeholders are documented and distinguishable from regressions.
