import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      description: "Specialized in Software Engineering and Data Structures. Graduated Magna Cum Laude with a focus on web technologies and algorithms.",
      achievements: ["Dean's List", "3.8 GPA", "Outstanding Student Award"],
      icon: GraduationCap
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Tech Academy",
      period: "2020",
      description: "Intensive 6-month program covering modern web development technologies including React, Node.js, and database management.",
      achievements: ["Top 5% of Class", "Capstone Project Award"],
      icon: BookOpen
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer Associate",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: Award
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      year: "2022",
      icon: Award
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2022",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="bg-hero-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic background and professional development journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-card-gradient backdrop-blur-glass border-border shadow-card hover:shadow-glow transition-smooth"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2">{item.degree}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                            <p className="text-primary font-medium">{item.institution}</p>
                            <Badge variant="outline" className="border-primary/20 text-primary w-fit">
                              {item.period}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.achievements.map((achievement) => (
                              <Badge 
                                key={achievement} 
                                variant="secondary"
                                className="bg-accent/10 text-accent border-accent/20"
                              >
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-card/50 backdrop-blur-glass border-border hover:bg-card transition-smooth"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-accent/10 border border-accent/20">
                          <IconComponent className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{cert.name}</h4>
                          <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                        </div>
                        <Badge variant="outline" className="border-accent/20 text-accent">
                          {cert.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Learning */}
            <Card className="mt-8 bg-card-gradient backdrop-blur-glass border-border shadow-card">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Continuous Learning</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I believe in lifelong learning and staying current with technology trends. 
                  I regularly participate in online courses, workshops, and tech conferences.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Coursera", "Udemy", "Pluralsight", "Tech Conferences", "Open Source"].map((platform) => (
                    <Badge 
                      key={platform} 
                      variant="outline"
                      className="border-primary/20 text-primary/80"
                    >
                      {platform}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;