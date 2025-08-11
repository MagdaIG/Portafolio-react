#!/bin/bash

# Test GitHub Actions Workflow Locally
# This script simulates the GitHub Actions workflow steps

echo "🧪 Testing GitHub Actions workflow locally..."

# Step 1: Checkout (simulated)
echo "✅ Step 1: Checkout - Already in repository"

# Step 2: Setup Node.js (simulated)
echo "✅ Step 2: Setup Node.js - Using local Node.js"

# Step 3: Install dependencies
echo "📦 Step 3: Installing dependencies..."
npm ci

if [ $? -ne 0 ]; then
    echo "❌ Step 3 failed: npm ci"
    exit 1
fi

# Step 4: Build project
echo "🔨 Step 4: Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Step 4 failed: npm run build"
    exit 1
fi

# Step 5: Verify build output
echo "🔍 Step 5: Verifying build output..."
if [ ! -d "out" ]; then
    echo "❌ Step 5 failed: 'out' directory not found"
    exit 1
fi

echo "✅ Step 5: Build output verified"
echo "📁 Contents of out/ directory:"
ls -la out/

# Step 6: Check for essential files
echo "🔍 Step 6: Checking for essential files..."
if [ ! -f "out/index.html" ]; then
    echo "❌ Step 6 failed: index.html not found"
    exit 1
fi

if [ ! -f "out/404.html" ]; then
    echo "❌ Step 6 failed: 404.html not found"
    exit 1
fi

echo "✅ Step 6: Essential files found"

echo ""
echo "🎉 All workflow steps passed!"
echo "📋 Ready for GitHub Actions deployment"
echo ""
echo "📝 Next steps:"
echo "   1. Push this code to GitHub"
echo "   2. Enable GitHub Pages in repository settings"
echo "   3. The workflow will automatically deploy"
