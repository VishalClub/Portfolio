import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'Git', 'REST APIs', 'GraphQL', 'Next.js'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience building scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-card-gradient backdrop-blur-glass border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Started my coding journey in 2018 with a passion for problem-solving. 
                  I specialize in creating efficient, scalable solutions that bridge the gap 
                  between design and functionality. I love working with modern technologies 
                  and am always eager to learn new ones.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient backdrop-blur-glass border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Frontend Development with React & TypeScript</li>
                  <li>• Backend Development with Node.js & Python</li>
                  <li>• Database Design & Optimization</li>
                  <li>• Cloud Infrastructure & DevOps</li>
                  <li>• Mobile-First Responsive Design</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card-gradient backdrop-blur-glass border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card-gradient backdrop-blur-glass border-border shadow-card">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Beyond Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge through 
                  technical writing. I believe in continuous learning and staying 
                  updated with industry trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;