# Next.js 15 Dark-Theme BESS Product Website - Complete Delivery

## Files Created

### 1. Three.js Particle Component
**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/three/EnergyParticles.tsx`
- Client-side React Three Fiber component
- 2000 floating white and green particles in spherical formation
- Slow rotation animation using useFrame
- Subtle glow effect with PointMaterial emissive properties
- Auto-orbiting camera
- No connecting lines to maintain performance

### 2. Hero Section
**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/home/HeroSection.tsx`
- Full-viewport dark hero with gradient overlay
- Dynamic Three.js canvas with EnergyParticles integration
- CSS grid background overlay
- Animated "Engineered in India" badge with green border
- Main headline "Power India's Energy Future" with staggered word animations
- Subheadline about UnityESS
- Two CTA buttons: "Explore Products" (green gradient with glow) and "Download Datasheet"
- Animated scrolling chevron indicator
- 4 floating stat chips with stagger animation

### 3. Stats Section
**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/home/StatsSection.tsx`
- Full-width stats section with dark background
- 4 animated counter components:
  - 500+ Projects Deployed
  - 6.25 MWh Max Capacity (with decimals)
  - 8000 Cycle Life
  - 86% System Efficiency
- Each stat has green glow icon and glassmorphism card
- Responsive grid layout
- Bottom info banner

### 4. Products Grid
**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/home/ProductsGrid.tsx`
- Anchor point section for navigation (#products)
- 3-column responsive grid of ProductCard components
- Imports products from @/lib/products
- Section title and subtitle
- Bottom CTA with contact button
- Scroll-triggered animations

### 5. Features Section
**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/home/FeaturesSection.tsx`
- 6-tile responsive grid of FeatureTile components
- Features with lucide-react icons:
  1. Active Cell Balancing BMS (Battery icon)
  2. Liquid Cooling System (Thermometer icon)
  3. Multi-Layer Fire Safety (Shield icon)
  4. Smart Communication Hub (Radio icon)
  5. Revenue Optimization (TrendingUp icon)
  6. Modular Scalability (Layers icon)
- Staggered animation on mount
- Hover effects with glow
- Bottom info banner

### 6. Applications Section
**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/home/ApplicationsSection.tsx`
- Horizontal tab switcher with AnimatePresence
- Tabs for: Residential, C&I, Solar Hybrid, Grid Services, Microgrid, Utility Scale
- Content transitions with fade and slide animations
- Green underline indicator with layoutId animation
- Shows use case, recommended model, and key benefits
- Responsive layout

### 7. Certifications Section
**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/home/CertificationsSection.tsx`
- Animated grid of certification badges
- Glassmorphism card design
- Hover scale animation with green glow
- Tooltip showing full certification name on hover
- Certification code display with Orbitron font
- Bottom compliance info banner

### 8. Why Choose Us Section
**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/home/WhyChooseUs.tsx`
- 6-card responsive grid (3 cols on desktop):
  1. Made in India (Flag icon)
  2. Advanced BMS (Cpu icon)
  3. Easy Maintenance (Wrench icon)
  4. Lotus-PCS EMS (Cloud icon)
  5. Proven Safety (ShieldCheck icon)
  6. 24/7 Support (Phone icon)
- Glassmorphism cards with hover lift effect
- Icon with green accent
- Bottom highlight banner

### 9. CTA Banner
**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/home/CTABanner.tsx`
- Full-width animated banner section
- Animated green-to-blue gradient background with keyframe animation
- Headline: "Ready to store smarter? Let's size your system."
- Two buttons: "Get a Free Quote" (white bg) and "Call 1800 2026 252" (outline)
- Smooth fade and scale animations

### Utility Components Updated

**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/ui/SectionWrapper.tsx`
- Scroll-triggered fade-in wrapper with delay support
- Accepts delay, className, and id props
- Motion variants for section animations

**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/ui/AnimatedCounter.tsx`
- Animated counter component for stats
- Props: value, suffix, prefix, decimals
- Uses Framer Motion spring animation
- Proper decimal handling with toFixed()

**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/ui/ProductCard.tsx`
- Product card component with 3D hover effect
- Shows product name, capacity, features, and specs
- Links to detailed product pages
- Glassmorphism design with gradients

**File:** `/sessions/fervent-keen-pasteur/mnt/outputs/ornate-bess/components/ui/FeatureTile.tsx`
- Feature tile component with icon support
- Hover scale and glow effects
- Decorative line animation on hover
- Responsive to lucide-react icons

## Design System

### Color Palette
- Dark Background: #020817
- Green Accent: #22c55e
- Blue Accent: #3b82f6
- White Text: #ffffff
- Gray Text: #a0aec0 (various shades)

### Typography
- **Space Grotesk**: Headings and titles
- **Inter**: Body text and descriptions
- **Orbitron**: Numbers and stats

### Effects & Features
- Glassmorphism cards (backdrop-blur-md, white/5-10%)
- Smooth scroll-triggered animations
- Framer Motion stagger effects
- Hover scale and glow effects
- Gradient animations
- Icon animations with lucide-react

## Dependencies
- @react-three/fiber
- @react-three/drei
- framer-motion
- lucide-react
- next/link
- next/dynamic

## Data Integration
All components import from `@/lib/products`:
- `products` array - used in ProductsGrid
- `applications` array - used in ApplicationsSection
- `certifications` array - used in CertificationsSection

## Notes
- All components are "use client" for client-side rendering
- Full code with no placeholders or truncation
- Responsive design for mobile, tablet, and desktop
- Accessible HTML structure
- Performance-optimized animations
- Three.js particles limited to 2000 without connecting lines for efficiency
