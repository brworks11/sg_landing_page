# StarGrove Distribution Landing Page

A professional, responsive landing page for StarGrove Distribution, a wholesale distributor specializing in collectibles, toys, and pop culture merchandise.

## Features

- **Modern Design**: Clean, professional design using Tailwind CSS
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Proper meta tags and structured content
- **Contact Form**: Interactive contact form for lead generation
- **Legal Pages**: Privacy Policy and Terms of Service pages included

## Sections

1. **Hero Section**: Compelling headline with call-to-action buttons
2. **About Us**: Company story and mission statement
3. **Services**: Three main service offerings with detailed descriptions
4. **Why Choose Us**: Key advantages and benefits
5. **Contact**: Contact information and inquiry form
6. **Footer**: Links and company information

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stargrove-distribution-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Starting Production Server

```bash
npm start
# or
yarn start
```

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy your site
4. Your site will be available at `https://your-project.vercel.app`

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Content

Update the content in the component files:
- `app/components/Hero.tsx` - Main headline and description
- `app/components/About.tsx` - Company story and mission
- `app/components/Services.tsx` - Service offerings
- `app/components/Contact.tsx` - Contact information

### Contact Form

The contact form in `app/components/Contact.tsx` currently shows an alert. To make it functional:

1. Integrate with a form service like:
   - Formspree
   - Netlify Forms
   - EmailJS
   - Custom API endpoint

2. Update the `handleSubmit` function to send data to your chosen service.

## File Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── privacy-policy/
│   │   └── page.tsx
│   ├── terms-of-service/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for StarGrove Distribution. All rights reserved.

## Support

For questions or support, contact:
- Email: contact@stargrovedistribution.com
- Address: 9925 SW 40th St Unit 15, Miami, FL 33165 