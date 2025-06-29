# 🔗 Using Amazon SiteStripe to Populate Your Affiliate Website

## What is SiteStripe?

SiteStripe is Amazon's official toolbar for Associates that provides compliant affiliate links and product images directly from Amazon product pages.

## 📋 Step-by-Step Guide

### 1. Enable SiteStripe
1. Log into your [Amazon Associates account](https://affiliate-program.amazon.com/)
2. Go to **Tools** → **SiteStripe**
3. Make sure SiteStripe is enabled (should show a toolbar on Amazon.com)

### 2. Find Products for Your Site
1. Go to Amazon.com (make sure you're logged into Associates)
2. Search for creator gear products like:
   - "Blue Yeti microphone"
   - "Logitech webcam"
   - "LED ring light"
   - "Audio-Technica microphone"
   - "Elgato Stream Deck"

### 3. Get SiteStripe Data for Each Product
For each product you want to add:

1. **Visit the product page** on Amazon
2. **Look for the SiteStripe toolbar** at the top of the page
3. **Get the Text Link**:
   - Click "Text" in SiteStripe
   - Copy the full affiliate URL
   - This goes in `amazonUrl` field

4. **Get the Image**:
   - Click "Image" in SiteStripe
   - Right-click the product image → "Copy image address"
   - This goes in `imageUrl` field

5. **Get the ASIN**:
   - Look in the URL or product details
   - Format: B00XXXXXXX (10 characters starting with B)
   - This goes in `asin` field

### 4. Update Your Product Data

Replace the placeholder values in `data/products.json`:

```json
{
  "asin": "B00N1YPXW2",  // ← From Amazon product page
  "slug": "blue-yeti",   // ← Create a URL-friendly version
  "name": "Blue Yeti USB Microphone",  // ← Copy from Amazon
  "description": "Professional USB microphone...",  // ← Write your own
  "amazonUrl": "https://www.amazon.com/dp/B00N1YPXW2?tag=yourtag-20",  // ← From SiteStripe
  "imageUrl": "https://m.media-amazon.com/images/I/...",  // ← From SiteStripe
  // ... rest of the fields
}
```

## 🎯 Product Research Tips

### Best Creator Gear Categories:
- **Microphones**: Blue Yeti, Audio-Technica AT2020, Rode PodMic
- **Webcams**: Logitech C920, Logitech Brio, Razer Kiyo
- **Lighting**: Elgato Key Light, Neewer LED panels, Ring lights
- **Audio Interfaces**: Focusrite Scarlett, PreSonus AudioBox
- **Accessories**: Boom arms, pop filters, webcam mounts

### How to Choose Products:
1. **High ratings** (4+ stars)
2. **Good number of reviews** (100+ reviews)
3. **Different price points** (budget, mid-range, premium)
4. **Popular brands** that creators recognize
5. **Currently available** (not out of stock)

## 🔍 Example: Adding a Blue Yeti Microphone

1. **Go to Amazon.com** and search "Blue Yeti microphone"
2. **Click on the official Blue Yeti product**
3. **Use SiteStripe to get**:
   - ASIN: `B00N1YPXW2`
   - Affiliate URL: `https://www.amazon.com/dp/B00N1YPXW2?tag=yourtag-20`
   - Image URL: `https://m.media-amazon.com/images/I/71abc123XYZ._AC_SL1500_.jpg`

4. **Update your JSON**:
```json
{
  "asin": "B00N1YPXW2",
  "slug": "blue-yeti-microphone",
  "name": "Blue Yeti USB Microphone",
  "description": "Professional-grade USB microphone perfect for podcasting, streaming, and content creation.",
  "amazonUrl": "https://www.amazon.com/dp/B00N1YPXW2?tag=yourtag-20",
  "imageUrl": "https://m.media-amazon.com/images/I/71abc123XYZ._AC_SL1500_.jpg",
  "features": [
    "Plug & play USB connection",
    "Four pickup patterns",
    "Built-in headphone monitoring",
    "Mute button and volume control"
  ],
  "pros": [
    "Excellent audio quality",
    "Easy setup for beginners", 
    "Industry standard for podcasting"
  ],
  "cons": [
    "Can pick up background noise",
    "Large size takes desk space"
  ],
  "categories": ["Microphones"],
  "priceNote": "Check price on Amazon",
  "isAffiliate": true
}
```

## ✅ Compliance Checklist

- [ ] All images from `m.media-amazon.com` or `images-na.ssl-images-amazon.com`
- [ ] All affiliate links from SiteStripe (include your tag)
- [ ] ASINs match the actual products
- [ ] Product names match Amazon exactly
- [ ] No price information displayed
- [ ] Affiliate disclaimers on every page

## 🚨 Common Mistakes to Avoid

❌ **Don't**:
- Use fake or placeholder ASINs
- Copy images from other websites
- Display prices (they change frequently)
- Modify Amazon's product images
- Use shortened URLs

✅ **Do**:
- Get everything from SiteStripe
- Test all affiliate links
- Use real product ASINs
- Write original descriptions
- Include proper disclaimers

## 🔄 Updating Products

As products change or go out of stock:
1. **Check links monthly** to ensure they still work
2. **Replace discontinued products** with newer models
3. **Update descriptions** if product features change
4. **Refresh images** if Amazon updates them

Remember: **SiteStripe is your best friend** for Amazon compliance! It ensures you're always using official, approved links and images. 