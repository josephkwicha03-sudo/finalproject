#!/bin/bash

echo "🌸 Starting markk's Portfolio Development Server..."
echo ""
echo "🏆 Status: PRODUCTION-READY!"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🚀 Starting Next.js development server..."
echo "📍 Visit http://localhost:3000 to see the portfolio"
echo ""
echo "✨ All Features Ready:"
echo "  ✅ Phase 1-3: Complete portfolio with all sections"
echo "  ✅ Phase 4-5: SEO optimized & performance enhanced"
echo "  ✅ Modern navbar with scroll behavior"
echo "  ✅  form with validation"
echo "  ✅ 3D animations and interactions"
echo "  ✅ Ready for deployment!"
echo ""
echo "📚 Guides available:"
echo "  - DEPLOYMENT_GUIDE.md for deployment instructions"
echo "  - DEVELOPMENT_GUIDE.md for feature details"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev