import { Zap, Palette, Cloud, Share, Shield, Download } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to create amazing visuals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed for modern teams who value creativity and
            collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Real-time Collaboration
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Work together seamlessly with live cursors, instant updates, and
              synchronized editing across all devices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Palette className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Infinite Canvas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Never run out of space with our boundless canvas that scales with
              your creativity and ideas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Cloud className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Cloud Sync
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your work is automatically saved and synced across all devices.
              Access your projects anywhere, anytime.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Share className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Easy Sharing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Share your creations with a simple link, export to multiple
              formats, or embed directly into your workflow.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Enterprise Security
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bank-level security with end-to-end encryption, SSO integration,
              and compliance with industry standards.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Download className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Export Anywhere
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Export your work in multiple formats including PNG, SVG, PDF, and
              more. Perfect for any workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
