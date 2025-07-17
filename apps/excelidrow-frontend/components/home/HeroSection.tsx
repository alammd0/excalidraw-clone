import { Star, ArrowRight, Users, Pencil, Play, Share } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="h-4 w-4 mr-2" />
            Trusted by 50,000+ creative teams
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Create & Collaborate
            <span className="block text-indigo-600">Visually</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The ultimate collaborative whiteboard for teams who think visually.
            Draw, design, and brainstorm together in real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl">
              Start Drawing Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 flex items-center justify-center">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="bg-gray-50 rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 opacity-50"></div>
                <div className="relative z-10 text-center">
                  <Pencil className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">
                    Interactive Canvas
                  </p>
                  <p className="text-sm text-gray-500">
                    Draw, sketch, and collaborate
                  </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
                  <Users className="h-4 w-4 text-indigo-500" />
                </div>
                <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
                  <Share className="h-4 w-4 text-purple-500" />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md">
                  <span className="text-xs text-gray-600">3 users online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
