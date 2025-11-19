export default function About() {
  const stats = [
    { number: '30+', label: 'Projects Completed' },
    { number: '20+', label: 'Events Engineered' },
    { number: '3', label: 'Professional Fields' },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-96 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-center text-white relative z-10">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-xl font-semibold">Eason Sy</p>
                  <p className="text-blue-100">Multi-Disciplinary Engineer</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m a passionate multi-disciplinary engineer with expertise spanning across 
              <span className="font-semibold text-blue-600"> backend development</span>, 
              <span className="font-semibold text-green-600"> live event production</span>, and 
              <span className="font-semibold text-purple-600"> mechanical engineering</span>. 
              This unique combination allows me to approach problems from multiple perspectives and create innovative solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900 gradient-text">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-blue-600 text-xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Backend Development</h3>
                  <p className="text-gray-600 mt-1">
                    Building robust, scalable server-side applications and APIs with modern technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-green-600 text-xl">🎵</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Audio & Lighting Engineering</h3>
                  <p className="text-gray-600 mt-1">
                    Creating immersive auditory and visual experiences for live events and productions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}