import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = [
    "react",
    "javascript",
    "python",
    "kafka",
    "git",
    "flutter",
    "kubernetes",
    "docker",
    "spark",
    "tailwind_css",
    "node.js",
    "hadoop",
    "next",
    "flink",
  ];

  return (
    <section id='skills' className='relative h-dvh w-screen'>
      <div className='flex flex-wrap gap-2 mx-60'>
        {skills.map((skill) => (
          <SkillCard title={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
