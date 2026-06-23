import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiAnsible,
  SiJenkins,
  SiHelm,
  SiApachekafka,
  SiNginx,
  SiLangchain,
  SiGithub,
  SiGit,
  SiPostman,
  SiSwagger,
  SiCplusplus,
  SiPython,
  SiGo,
  SiLanggraph ,
  SiClaude ,
  SiSocketdotio ,
  SiTrpc ,
  SiGrafana ,
    SiPrometheus ,
    SiTerraform ,
    SiElasticsearch ,
    SiKibana ,
    SiLogstash

} from "react-icons/si";

import { TbPrompt } from "react-icons/tb";
import { FaAws , FaJava, FaHtml5, FaCss3, FaShieldAlt , FaCubes} from "react-icons/fa";
import { VscAzure, VscMcp  } from "react-icons/vsc";
import { TiArrowLoop } from "react-icons/ti";
import { DiJavascript } from "react-icons/di";


export const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3 },
        { name: "JavaScript", icon: DiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },

  {
    title: "Backend Engineering",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "GraphQL", icon: SiGraphql },
      { name: "gRPC", icon: SiTrpc  },
      { name: "WebSockets", icon: SiSocketdotio  },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Azure", icon: VscAzure },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Ansible", icon: SiAnsible },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Helm", icon: SiHelm },
      { name: "Nginx", icon: SiNginx },
      { name: "Grafana" , icon: SiGrafana },
      { name: "Prometheus" , icon: SiPrometheus },
      { name: "Terraform" , icon: SiTerraform },    
      { name: "ElasticSearch" , icon: SiElasticsearch },
      { name : "Kibana" , icon: SiKibana },
      { name : "Logstash" , icon: SiLogstash }

    ],
  },

  {
    title: "Distributed Systems",
    skills: [
      { name: "Kafka", icon: SiApachekafka },
      { name: "Microservices", icon: FaCubes },
      { name: "Event Driven", icon: SiApachekafka },
      { name: "Nginx", icon: SiNginx },
    ],
  },

  {
    title: "AI Engineering",
    skills: [
      { name: "LangChain", icon: SiLangchain },
      { name: "LangGraph", icon: SiLanggraph },
      { name: "MCP", icon: VscMcp },
      { name: "Agentic RAG", icon: SiLanggraph },
      { name: "A2A", icon: SiLangchain },
      { name: "LLM Fine Tuning", icon: SiLangchain },
      { name: "Prompt Engineering", icon: TbPrompt },
      { name: "Context Engineering", icon: VscMcp },
      { name: "Loop Engineering", icon: TiArrowLoop },
      { name: "Claude Code", icon: SiClaude  },
      { name: "LangSmith", icon: SiLangchain },
      { name: "AI Security", icon: FaShieldAlt },
    ],
  },

  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Swagger", icon: SiSwagger },
    ],
  },

  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "Go", icon: SiGo },
    ],
  },
];