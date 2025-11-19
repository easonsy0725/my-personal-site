export default function Projects() {
  const projects = [
    {
      title: "Real-time Audio Processing API",
      description: "A scalable backend system for real-time audio stream processing with WebSocket integration and machine learning capabilities",
      category: "Backend Development",
      technologies: ["Node.js", "WebSocket", "Docker", "AWS", "TensorFlow"],
      image: "/api-project.jpg",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Concert Lighting Control System",
      description: "Custom DMX lighting control software for live performances with real-time synchronization and visual programming interface",
      category: "Lighting Engineering",
      technologies: ["Python", "DMX", "Open Lighting", "WebGL"],
      image: "/lighting-project.jpg",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Live Event Audio Mixer",
      description: "Digital audio mixing console interface with preset management, automation, and AI-assisted sound optimization",
      category: "Sound Engineering",
      technologies: ["Python", "JUCE", "Audio Plugins", "Machine Learning"],
      image: "/audio-project.jpg",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my work across multiple disciplines - from code to concert stages
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-4 border-gray-100 hover:border-blue-200"
            >
              {/* Project image with gradient overlay */}
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl text-white opacity-80">
                    {project.category === 'Backend Development' && '⚡'}
                    {project.category === 'Lighting Engineering' && '💡'}
                    {project.category === 'Sound Engineering' && '🎵'}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 backdrop-blur-sm text-gray-800 px-5 py-3 rounded-full text-base font-semibold border-2 border-gray-300 shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300 border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}