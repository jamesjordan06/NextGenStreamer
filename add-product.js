#!/usr/bin/env node

/**
 * Quick Product Addition Script
 * Usage: node add-product.js
 * 
 * This script helps you quickly add products to your Amazon affiliate site
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
}

async function addProduct() {
  console.log('\n🛒 NextGenStreamer - Quick Product Addition\n');
  
  try {
    // Get product data from user
    const asin = await question('📦 ASIN (from Amazon URL): ');
    const name = await question('📝 Product Name (full Amazon title): ');
    const description = await question('📄 Description (SEO-friendly): ');
    const amazonUrl = await question('🔗 SiteStripe Affiliate Link: ');
    const imageUrl = await question('🖼️  SiteStripe Image URL: ');
    
    console.log('\n📋 Features (press Enter after each, empty line to finish):');
    const features = [];
    let feature;
    while ((feature = await question('• ')) !== '') {
      features.push(feature);
    }
    
    console.log('\n✅ Pros (press Enter after each, empty line to finish):');
    const pros = [];
    let pro;
    while ((pro = await question('+ ')) !== '') {
      pros.push(pro);
    }
    
    console.log('\n❌ Cons (press Enter after each, empty line to finish):');
    const cons = [];
    let con;
    while ((con = await question('- ')) !== '') {
      cons.push(con);
    }
    
    const category = await question('\n📂 Category (Microphones/Webcams/Lighting/Audio/Accessories): ');
    
    // Create product object
    const product = {
      asin: asin.trim(),
      slug: createSlug(name),
      name: name.trim(),
      description: description.trim(),
      amazonUrl: amazonUrl.trim(),
      imageUrl: imageUrl.trim(),
      features: features.filter(f => f.trim()),
      pros: pros.filter(p => p.trim()),
      cons: cons.filter(c => c.trim()),
      categories: [category.trim()],
      priceNote: "Check current price on Amazon",
      isAffiliate: true
    };
    
    // Load existing products
    const productsPath = path.join(__dirname, 'data', 'products.json');
    const existingProducts = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    
    // Add new product
    existingProducts.push(product);
    
    // Save updated products
    fs.writeFileSync(productsPath, JSON.stringify(existingProducts, null, 2));
    
    console.log('\n🎉 Product added successfully!');
    console.log(`📄 Product page will be available at: /products/${product.slug}`);
    console.log(`🔄 Restart your dev server to see changes\n`);
    
  } catch (error) {
    console.error('❌ Error adding product:', error.message);
  }
  
  rl.close();
}

// Run the script
addProduct(); 