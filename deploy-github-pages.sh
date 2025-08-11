#!/bin/bash

# GitHub Pages Deployment Script
# This script builds and deploys to GitHub Pages manually

echo "🚀 Deploying portfolio to GitHub Pages..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Please run this from your project root."
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Check if gh-pages branch exists
if git show-ref --verify --quiet refs/remotes/origin/gh-pages; then
    echo "📋 gh-pages branch exists, switching to it..."
    git checkout gh-pages
    git pull origin gh-pages
else
    echo "📋 Creating gh-pages branch..."
    git checkout -b gh-pages
fi

# Remove all files except .git
echo "🧹 Cleaning gh-pages branch..."
git rm -rf . || true

# Copy built files
echo "📁 Copying built files..."
cp -r out/* .

# Add all files
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy portfolio to GitHub Pages - $(date)"

# Push to gh-pages branch
echo "📤 Pushing to gh-pages branch..."
git push origin gh-pages

# Switch back to original branch
echo "🔄 Switching back to $CURRENT_BRANCH..."
git checkout $CURRENT_BRANCH

echo ""
echo "✅ Deployment completed!"
echo "🌐 Your portfolio should be available at:"
echo "   https://[your-username].github.io/[repository-name]"
echo ""
echo "📝 Don't forget to:"
echo "   1. Enable GitHub Pages in your repository settings"
echo "   2. Set the source to 'gh-pages' branch"
echo "   3. Wait a few minutes for the site to be available"
