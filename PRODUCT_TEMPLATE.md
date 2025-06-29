# 🛒 Quick Product Addition Template

## Step 1: Get SiteStripe Data
1. Go to any Amazon product page
2. Use SiteStripe to get:
   - Affiliate link (amzn.to/xxxxx)
   - Product image URL (right-click image → copy image address)
   - ASIN (from URL: /dp/ASIN_HERE/)

## Step 2: Copy & Fill This Template

```json
{
  "asin": "PASTE_ASIN_HERE",
  "slug": "create-url-friendly-name",
  "name": "PASTE_FULL_AMAZON_PRODUCT_TITLE",
  "description": "Write compelling description for SEO",
  "amazonUrl": "PASTE_SITESTRIPE_LINK_HERE",
  "imageUrl": "PASTE_SITESTRIPE_IMAGE_URL_HERE",
  "features": [
    "Feature 1 from Amazon listing",
    "Feature 2 from Amazon listing", 
    "Feature 3 from Amazon listing"
  ],
  "pros": [
    "Positive point 1",
    "Positive point 2",
    "Positive point 3"
  ],
  "cons": [
    "Limitation 1",
    "Limitation 2"
  ],
  "categories": ["Choose: Microphones, Webcams, Lighting, Audio, Accessories"],
  "priceNote": "Check current price on Amazon",
  "isAffiliate": true
}
```

## Step 3: Add to products.json
- Add comma after last product
- Paste your filled template
- Save file
- Your website automatically updates!

## 📋 Suggested Products to Add Next

**Creator Gear Categories:**
- 🎤 **More Microphones**: Shure SM7B, Rode PodMic, Audio-Technica AT2035
- 📷 **Webcams**: Elgato Facecam, Sony Alpha series, Canon EOS webcams
- 💡 **Lighting**: Ring lights, softbox lights, Elgato Key Light
- 🎧 **Audio**: Audio interfaces, headphones, boom arms
- 🖥️ **Streaming**: Stream decks, green screens, capture cards
- 📱 **Mobile**: Phone mounts, portable lights, mobile mics

## 🔄 Bulk Addition Process
Want to add 10+ products quickly? Just:
1. Create list of products you want
2. Get all SiteStripe data first  
3. Fill templates in batch
4. Add all to JSON at once
5. Test website

Your current system is already **production-ready** and **scalable**! 