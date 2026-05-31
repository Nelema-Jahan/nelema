import React from 'react';
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGithub, FaBootstrap, FaHtml5, FaCss3Alt, FaPython, FaGit, FaDocker } from "react-icons/fa";
import { DiJavascript1, DiJava } from "react-icons/di";
import { SiC, SiPhp, SiFlutter, SiPostgresql, SiMysql, SiTailwindcss, SiTypescript, SiVite, SiOpencv, SiFlask } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = ({ skill }) => {
  const icon = {
    'C': <SiC />,
    'C++': <CgCPlusPlus />,
    'Java': <DiJava />,
    'Python': <FaPython />,
    'PHP': <SiPhp />,
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
    'JavaScript': <DiJavascript1 />,
    'TypeScript': <SiTypescript />,
    'React': <FaReact />,
    'Flutter': <SiFlutter />,
    'Bootstrap': <FaBootstrap />,
    'Tailwind CSS': <SiTailwindcss />,
    'Docker': <FaDocker />,
    'PostgreSQL': <SiPostgresql />,
    'MySQL': <SiMysql />,
    'Supabase': <span style={{fontSize: '32px'}}>🚀</span>,
    'Git': <FaGit />,
    'Github': <FaGithub />,
    'VSCode': <VscCode />,
    'Vite': <SiVite />,
    'TanStack Router': <span style={{fontSize: '32px'}}>🛣️</span>,
    'TanStack Query': <span style={{fontSize: '32px'}}>⚡</span>,
    'React Hook Form': <span style={{fontSize: '32px'}}>📋</span>,
    'Zod': <span style={{fontSize: '32px'}}>✓</span>,
    'shadcn/ui': <span style={{fontSize: '32px'}}>✨</span>,
    'Lucide React': <span style={{fontSize: '32px'}}>🎨</span>,
    'Flask': <SiFlask />,
    'OpenCV': <SiOpencv />,
    'MediaPipe': <span style={{fontSize: '32px'}}>🤚</span>,
    'pyttsx3': <span style={{fontSize: '32px'}}>🔊</span>,
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
      <span className='SkillLabel'>{skill}</span>
    </div>
  );
};

export default Skills;
