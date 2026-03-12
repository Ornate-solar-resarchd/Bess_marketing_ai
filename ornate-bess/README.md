# UnityESS BESS Website - Ornate Solar

A premium, modern Next.js 15 App Router website for UnityESS Battery Energy Storage Systems by Ornate Solar. Features dark theme with glassmorphism design, comprehensive product information, and lead generation capabilities.

## Features

- **Modern Dark Design**: Dark theme (#020817) with green (#22c55e) and blue (#3b82f6) accents
- **Glassmorphism UI**: Modern glass-effect components with backdrop blur effects
- **Responsive Layout**: Fully responsive design for mobile, tablet, and desktop
- **Product Pages**: Detailed product specifications for Model A, B, and C BESS systems
- **Contact Form**: Lead generation form with validation (Formspree integration)
- **SEO Optimized**: JSON-LD structured data, meta tags, sitemap, open graph
- **Performance**: Optimized images, lazy loading, fast load times
- **Animations**: Smooth Framer Motion animations throughout
- **Accessibility**: WCAG compliant, semantic HTML, proper contrast ratios

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Forms**: React Hook Form 7
- **Icons**: Lucide React
- **Fonts**: Space Grotesk, Inter, Orbitron (Google Fonts)
- **Deployment**: Vercel (recommended)

## Project Structure

```
ornate-bess/
├── app/
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   ├── products/
│   │   ├── page.tsx            # Products listing
│   │   ├── model-a/
│   │   │   └── page.tsx        # Model A details
│   │   ├── model-b/
│   │   │   └── page.tsx        # Model B details
│   │   └── model-c/
│   │       └── page.tsx        # Model C details
│   ├── contact/
│   │   └── page.tsx            # Contact form page
│   └── sitemap.ts              # SEO sitemap
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   └── Footer.tsx          # Footer with WhatsApp button
│   └── home/
│       ├── HeroSection.tsx
│       ├── StatsSection.tsx
│       ├── ProductsGrid.tsx
│       ├── FeaturesSection.tsx
│       ├── ApplicationsSection.tsx
│       ├── CertificationsSection.tsx
│       ├── WhyChooseUs.tsx
│       └── CTABanner.tsx
├── lib/
│   └── products.ts             # Product data and utilities
├── public/
│   └── logo.svg                # Logo placeholder
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── .env.example                # Environment variables template
├── .gitignore
└── README.md                   # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ornate-bess
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your Formspree ID:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development

- Edit `app/page.tsx` for homepage content
- Component pages are in `app/products/` and `app/contact/`
- Home section components are in `components/home/`
- Layout components (Navbar, Footer) are in `components/layout/`
- Product data is managed in `lib/products.ts`
- Styling uses Tailwind CSS with custom theme in `tailwind.config.ts`

## Building for Production

### Build the application
```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy on push
4. Set environment variables in Vercel dashboard

### Deploy to Other Platforms

The project is optimized for Vercel but can be deployed to:
- Netlify
- AWS Amplify
- Azure Static Web Apps
- Traditional Node.js servers

## Configuration

### 1. Activate Contact Form (Formspree)

1. Go to [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id
   ```
4. Update the form submission URL in `app/contact/page.tsx`

### 2. Replace Logo

The current logo is a placeholder SVG. To replace it:

1. Add your logo to `public/` folder
2. Update the logo import/reference in `components/layout/Navbar.tsx` (currently uses text logo)
3. Update the logo reference in `components/layout/Footer.tsx`

### 3. Update Company Information

Update these in `components/layout/Footer.tsx`:
- Phone: `1800 202 6252` → your phone
- Email: `info@ornatesolar.com` → your email
- Address: `New Delhi, India` → your address
- Social media links: LinkedIn, YouTube URLs

### 4. Customize Colors

Main colors are defined in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    green: "#22c55e",   // Green accent
    blue: "#3b82f6",    // Blue accent
    dark: "#020817",    // Dark background
  },
}
```

### 5. Update Product Data

Edit `lib/products.ts` to modify:
- Product names, descriptions, and specs
- Capacity and voltage ratings
- Certifications
- Features and applications

## SEO Optimization

The site includes comprehensive SEO features:

- **Meta Tags**: Title, description, keywords, authors
- **Open Graph**: Social media sharing preview
- **Twitter Cards**: Twitter-specific metadata
- **JSON-LD Schema**: 
  - Organization schema
  - Product schema for each model
  - FAQ schema with BESS questions
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots**: Configured for search engine indexing
- **Canonical URLs**: Prevents duplicate content issues

## Performance Optimization

- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind CSS purging
- **Font Optimization**: Google Fonts with next/font integration
- **Lazy Loading**: Images and components load on demand

## Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **WCAG 2.1 Compliance**: AA level compliance
- **Color Contrast**: Meets WCAG contrast requirements
- **Focus States**: Visible focus indicators throughout
- **ARIA Labels**: Proper labels for form inputs and interactive elements

## Customization Guide

### Change Brand Colors

1. Update `tailwind.config.ts` colors
2. Update CSS in `app/globals.css`
3. Update gradient classes in components

### Modify Homepage Sections

1. Edit components in `components/home/`
2. Reorder sections in `app/page.tsx`
3. Add/remove sections as needed

### Add New Pages

1. Create new directory in `app/`
2. Add `page.tsx` file
3. Implement your content
4. Update sitemap if needed

## Troubleshooting

### Form not submitting
- Check Formspree ID is correct in `.env.local`
- Verify form submission URL in `app/contact/page.tsx`
- Check browser console for errors

### Styling not applying
- Run `npm run build` to regenerate Tailwind
- Check `tailwind.config.ts` for correct paths
- Clear `.next` folder and rebuild

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version compatibility

## Contact Information

- **Company**: Ornate Solar
- **Website**: www.ornatesolar.com
- **Phone**: 1800 202 6252
- **Email**: info@ornatesolar.com
- **Location**: New Delhi, India
- **Partner**: www.inverted.in

## License

This project is proprietary to Ornate Solar. All rights reserved.

## Support

For technical support or questions about customization:
- Email: info@ornatesolar.com
- Phone: 1800 202 6252

---

**Made with ❤️ by Ornate Solar**
