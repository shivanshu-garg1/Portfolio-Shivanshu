import SkillCloud from "@/components/SkillCloud";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Material UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker", "Git", "Postman", "Vercel"],
  },
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Java", "C++"],
  },
];

const softSkills = {
  title: "Soft Skills",
  skills: ["Teamwork", "Adaptability", "Leadership"],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-r from-blue-900 via-black to-gray-900 overflow-hidden">


      <div className="absolute mt-20 inset-0 z-0 opacity-50">
        <SkillCloud />
      </div>


      <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-blue-400 mb-16 tracking-widest uppercase text-center">
        My Skills
      </h1>


      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full text-center">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-6"
            whileHover={{ scale: 1.05 }}
          >

            <h2 className="text-2xl font-semibold text-blue-300">
              {category.title}
            </h2>


            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Badge className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 text-sm font-medium rounded-full shadow-md hover:shadow-xl transition">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>


      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative z-10 flex flex-col items-center gap-6 mt-16"
      >
        <h2 className="text-2xl font-semibold text-blue-300">{softSkills.title}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.skills.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Badge className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 text-sm font-medium rounded-full shadow-md hover:shadow-xl transition">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
