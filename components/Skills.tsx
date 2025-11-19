export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "⚡",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL Databases", level: 88 },
        { name: "Node.JS", level: 70 },
        { name: "NoSQL Databases", level: 50 },
        { name: "Cloud Services", level: 80 },
      ],
      color: "blue"
    },
    {
      title: "Sound Engineering",
      icon: "🎵",
      skills: [
        { name: "Live Mixing", level: 92 },
        { name: "Digital Audio Workstations", level: 80 },
        { name: "Signal Processing", level: 78 },
        { name: "Acoustics", level: 75 },
      ],
      color: "green"
    },
    {
      title: "Lighting Engineering",
      icon: "💡",
      skills: [
        { name: "Lighting Design", level: 88 },
        { name: "DMX Programming", level: 90 },
        { name: "Visual Programming", level: 82 },
        { name: "Rigging", level: 75 },
        { name: "Show Control", level: 85 },
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-500', gradient: 'from-blue-500 to-blue-600' },
      green: { bg: 'bg-green-500', gradient: 'from-green-500 to-green-600' },
      purple: { bg: 'bg-purple-500', gradient: 'from-purple-500 to-purple-600' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse skill set that bridges digital innovation and sensory experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-6 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center text-white text-xl mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`h-3 rounded-full bg-gradient-to-r ${colorClasses.gradient} transition-all duration-1000 ease-out transform origin-left group-hover:scale-105`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}