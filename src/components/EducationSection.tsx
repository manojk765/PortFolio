
import { useState, useEffect } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Education {
  id: number;
  title: string;
  institution: string;
  period: string;
  score: string;
  details: string[];
}

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);

  const educationData: Education[] = [
    {
      id: 1,
      title: "B.Tech in Computer Science",
      institution: "Amrita School of Computing",
      period: "2022 - 2026 (Expected)",
      score: "CGPA 9.68",
      details: [
        "Specializing in full-stack development and data structures",
        "Consistent top performer in academices",
        "Active member of the coding club",
        "Participated in multiple  technical workshops"
      ],
    },
    {
      id: 2,
      title: "Class XII",
      institution: "Narayana Junior College",
      period: "2020 - 2022",
      score: "98%",
      details: [
        "Science stream with Mathematics Physics and Chemistry",
        "School topper in 11th and 12th board exams",
      ],
    },
    {
      id: 3,
      title: "Class X",
      institution: "Queen Mary's Central School",
      period: "2019 - 2020",
      score: "90.2%",
      details: [
        "Received academic excellence award",
        "Topped the school in 10th board exams.",
        "Active participant in extracurricular activities"
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("education");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="education" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center">My Education</h2>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-purple-dark via-portfolio-blue-dark to-portfolio-teal transform md:-translate-x-1/2" />

          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 bg-card rounded-full border-4 border-primary transform -translate-y-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center shadow-md">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>

                {/* Content */}
                <div className={`md:col-span-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  {index % 2 === 0 ? null : (
                    <Card className="card-hover">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {index % 2 === 0 ? null : <GraduationCap className="h-5 w-5 text-primary" />}
                          {edu.title}
                          {index % 2 === 0 ? <GraduationCap className="h-5 w-5 text-primary ml-auto" /> : null}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="text-lg font-semibold">{edu.institution}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2 mb-4">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-primary font-medium mb-4">
                          <Award className="h-4 w-4" />
                          <span>{edu.score}</span>
                        </div>
                        <ul className={`list-disc ${index % 2 === 0 ? "ml-4" : "ml-4"} space-y-1 text-sm text-muted-foreground`}>
                          {edu.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className={`md:col-span-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  {index % 2 === 1 ? null : (
                    <Card className="card-hover">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {index % 2 === 0 ? null : <GraduationCap className="h-5 w-5 text-primary" />}
                          {edu.title}
                          {index % 2 === 0 ? <GraduationCap className="h-5 w-5 text-primary ml-auto" /> : null}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="text-lg font-semibold">{edu.institution}</h4>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2 mb-4">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-primary font-medium mb-4">
                          <Award className="h-4 w-4" />
                          <span>{edu.score}</span>
                        </div>
                        <ul className={`list-disc ${index % 2 === 0 ? "ml-4" : "ml-4"} space-y-1 text-sm text-muted-foreground`}>
                          {edu.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
