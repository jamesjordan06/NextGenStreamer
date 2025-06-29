# NextGenStreamer - Amazon Affiliate Website

A professional Amazon affiliate website built with Next.js 15 App Router, Tailwind CSS, and static product data. This site is designed to be 100% Amazon-compliant and easily extensible to use the Amazon PA-API in the future.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 App Router, TypeScript, Tailwind CSS
- **Amazon Compliant**: Proper affiliate disclosures, no price displays, compliant CTA buttons
- **SEO Optimized**: Dynamic metadata, sitemap generation, structured data
- **Mobile Responsive**: Fully responsive design with mobile-first approach
- **Static Data Ready**: Uses JSON data that can easily be swapped for API calls
- **Professional UI**: Clean, modern design with smooth animations

## 📁 Project Structure

```
├── app/                    # Next.js 15 App Router pages
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage
│   ├── products/          # Product pages
│   ├── lists/             # Product roundup pages
│   ├── about/             # About page
│   └── legal/             # Privacy & disclaimer pages
├── components/            # Reusable React components
│   ├── AmazonProductCard.tsx      # Product grid cards
│   ├── AmazonProductDetail.tsx    # Detailed product view
│   ├── AmazonCTAButton.tsx        # Compliant affiliate buttons
│   ├── Navigation.tsx             # Site navigation
│   └── Footer.tsx                 # Site footer
├── data/                  # Static product data
│   └── products.json      # Product information with ASINs
├── lib/                   # Utility functions
│   └── products.ts        # Product data helpers
└── types/                 # TypeScript type definitions
    └── product.ts         # Product interfaces
```

## 🛍️ Pages Included

- **Homepage** (`/`) - Hero section with featured products
- **Products** (`/products`) - Filterable product grid
- **Product Details** (`/products/[slug]`) - Individual product pages
- **Best Lists** (`/lists/[slug]`) - Product roundups and buying guides
- **About** (`/about`) - Site information
- **Legal Pages** (`/legal/privacy`, `/legal/disclaimer`) - Compliance pages

## 🎨 Components

### AmazonProductCard
Displays products in grid layouts with:
- Product image and title
- Key features list
- Affiliate CTA button
- Category tags

### AmazonProductDetail
Full product page component with:
- Large product image
- Detailed description
- Pros and cons lists
- Affiliate disclosures
- ASIN information

### AmazonCTAButton
Amazon-compliant affiliate button with:
- Proper `rel` attributes (`nofollow sponsored noreferrer`)
- Opens in new tab
- Customizable variants and sizes

## 📊 Product Data Structure

Products are stored in `data/products.json` with this structure:

```json
{
  "asin": "B00N1YPXW2",
  "slug": "blue-yeti",
  "name": "Blue Yeti USB Microphone",
  "description": "Professional microphone description",
  "amazonUrl": "https://www.amazon.com/dp/B00N1YPXW2?tag=yourtag-20",
  "imageUrl": "https://m.media-amazon.com/images/...",
  "features": ["Feature 1", "Feature 2"],
  "pros": ["Pro 1", "Pro 2"],
  "cons": ["Con 1", "Con 2"],
  "categories": ["Microphones"],
  "priceNote": "Check price on Amazon",
  "isAffiliate": true
}
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Populate with real products using SiteStripe**:
   - See `SITESTRIPE_GUIDE.md` for detailed instructions
   - Use Amazon's official SiteStripe tool to get compliant links and images
   - Replace placeholder data in `data/products.json`

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000`

## 🔧 Customization

### Adding New Products
1. Add product data to `data/products.json`
2. Include proper ASIN, affiliate URL, and Amazon CDN image URL
3. Products automatically appear on relevant pages

### Creating New Product Lists
1. Create new page in `app/lists/[slug]/page.tsx`
2. Use existing microphones list as template
3. Filter products by category or custom criteria

### Styling Changes
- Modify `app/globals.css` for global styles
- Update `tailwind.config.js` for design tokens
- Component styles use Tailwind classes

## 📈 SEO Features

- Dynamic metadata generation
- Open Graph tags
- Structured data ready
- Sitemap generation with `next-sitemap`
- Robots.txt included

## 🔒 Amazon Compliance

✅ **Compliant Features**:
- Proper affiliate link attributes
- Clear affiliate disclosures on every page
- No price displays (prices change frequently)
- Uses only Amazon CDN images
- Includes required disclaimer pages

❌ **Avoid These**:
- Displaying prices without API
- Re-hosting Amazon product images
- Missing affiliate disclosures
- Incorrect `rel` attributes on affiliate links

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variable: `SITE_URL=https://yourdomain.com`
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder
3. Configure redirects if needed

## 🔄 Future API Integration

The project is structured to easily switch from static data to Amazon PA-API:

1. Replace `lib/products.ts` functions with API calls
2. Keep the same data structure and component interfaces
3. Add caching for API responses
4. All components will continue working without changes

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Important Notes

- Replace `yourtag-20` with your actual Amazon Associates tag before deploying
- **Amazon Images Compliance**: This site uses official Amazon product images from `m.media-amazon.com` CDN as required by Amazon Associates terms
- **Getting Amazon Images**: Use the Amazon Associates SiteStripe or Product Advertising API to get official image URLs
- Ensure you comply with Amazon Associates terms of service
- Test all affiliate links before going live
- Set `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` in a `.env.local` file to enable Google Analytics tracking for page views and affiliate link clicks
- Regular content updates improve SEO performance

## 🖼️ Getting Official Amazon Product Data

**✅ RECOMMENDED: Use Amazon SiteStripe** (see `SITESTRIPE_GUIDE.md`)

SiteStripe is Amazon's official tool that provides:
- Compliant affiliate links with your Associates tag
- Official product images from Amazon's CDN
- Correct ASINs and product information
- Guaranteed compliance with Amazon's terms

**Other Methods:**
- **Product Advertising API** (Advanced): Programmatic access to Amazon product data
- **Manual Copy**: Right-click Amazon product images (must be from `m.media-amazon.com`)

**❌ Never Use**: Third-party images, re-hosted Amazon images, stock photos, or fake product data

---

Built with ❤️ for content creators who want to monetize their expertise. 