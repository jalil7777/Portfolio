import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Abdul Jalil Sait Mohammed',
  shortName: 'Abdul Jalil',
  title: 'Generative AI Engineer | Python & ML Developer',
  headline: 'Building Intelligent Systems with LLMs, RAG Pipelines & Modern Machine Learning',
  location: 'Chennai, Tamil Nadu, India',
  email: 'smabduljalil2001@gmail.com',
  phone: '+91 97878 28956',
  avatar: '/profile.jpg',
  github: 'https://github.com/jalil7777',
  linkedin: 'https://linkedin.com/in/abdul-jalil-sait-mohammed-020901254',
  tagline: 'Generative AI Engineer building production-grade LLM architectures, RAG pipelines, and intelligent Python applications.',
  summary:
    'Computer Science graduate specializing in Python, SQL, Machine Learning, and Generative AI. Currently building real-world GenAI systems, RAG pipelines, and intelligent copilots as an intern at TechPanda Academy, with strong expertise in LLM orchestration, prompt engineering, and context-aware applications.',
  availability: 'Open to full-time Generative AI & ML roles',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Generative AI & LLMs',
    iconName: 'Sparkles',
    description: 'Specialized in building context-aware AI applications, RAG pipelines, and agentic workflows.',
    skills: [
      { name: 'Large Language Models (LLMs)', highlight: true, description: 'Prompt optimization & context window management' },
      { name: 'Retrieval-Augmented Generation (RAG)', highlight: true, description: 'Document ingestion, chunking & semantic search' },
      { name: 'Prompt Engineering', highlight: true, description: 'Few-shot, chain-of-thought & structured outputs' },
      { name: 'Gemini API', highlight: true, description: 'Multimodal reasoning & fast embedding integration' },
      { name: 'OpenAI API', highlight: true, description: 'GPT-4o/mini, function calling & assistants' },
      { name: 'Vector Databases & Embeddings', highlight: true, description: 'Semantic vector representations & similarity search' },
      { name: 'Context-Aware AI Chatbots', description: 'Multi-turn conversational memory & guardrails' },
      { name: 'NLP & Text Processing', description: 'Tokenization, text extraction & sentiment heuristics' },
    ],
  },
  {
    title: 'Languages',
    iconName: 'Code',
    description: 'Core programming languages powering machine learning models, data manipulation, and automated pipelines.',
    skills: [
      { name: 'Python', highlight: true, description: 'Primary language for AI, LLM pipelines, data processing, and automation' },
      { name: 'SQL', highlight: true, description: 'Complex querying, data aggregation, schema design & relational joins' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    iconName: 'Layers',
    description: 'Rapid prototyping frameworks, IDEs, and deployment platforms.',
    skills: [
      { name: 'Streamlit', highlight: true, description: 'Interactive AI web apps and conversational UIs' },
      { name: 'Gradio', highlight: true, description: 'Rapid ML/AI interface deployment & demo sandboxes' },
      { name: 'Google Colab & Jupyter', highlight: true, description: 'Interactive Python experimentation & GPU execution' },
      { name: 'Git & GitHub', highlight: true, description: 'Version control, branch management & collaboration' },
      { name: 'VS Code', description: 'Development environment, linting & debugging' },
    ],
  },
  {
    title: 'Data & Databases',
    iconName: 'Database',
    description: 'Data manipulation, statistical analysis, and database storage engines.',
    skills: [
      { name: 'NumPy', highlight: true, description: 'Vectorized math operations & array manipulation' },
      { name: 'Pandas', highlight: true, description: 'DataFrames, data cleaning, aggregation & filtering' },
      { name: 'Exploratory Data Analysis (EDA)', highlight: true, description: 'Statistical profiling & anomaly detection' },
      { name: 'Data Cleaning & Transformation', description: 'Handling missing values, deduplication & normalization' },
      { name: 'MySQL & Relational Databases', highlight: true, description: 'Relational schema design, querying & optimization' },
      { name: 'Oracle & SQL Server', description: 'Enterprise database querying and schema management' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'enterprise-knowledge-copilot-project4',
    title: 'AI Enterprise Knowledge Copilot',
    subtitle: 'RAG-Based Enterprise Intelligence & Decision System',
    description:
      'Multi-document RAG system powered by Google Gemini API and FAISS vectorstore. Uploads enterprise policies, SOPs, and reports, retrieves context, and delivers cited answers, summaries, and action recommendations.',
    fullDescription:
      'A comprehensive Retrieval-Augmented Generation (RAG) intelligence platform built in Python. Users can ingest diverse corporate documents (PDF, DOCX, TXT), extract clean text, generate high-dimensional embeddings, and index them in a FAISS vector database. Equipped with conversational context memory, cross-document comparison, automated executive summarization, and strategic action item synthesis with exact source citations.',
    category: 'GenAI & LLMs',
    featured: true,
    tags: ['Python', 'Google Gemini API', 'FAISS', 'RAG Pipelines', 'PyPDF', 'python-docx', 'Google Colab'],
    keyHighlights: [
      'Multi-document ingestion (PDFs, DOCX, SOPs, HR guidelines) with semantic chunking in Python',
      'FAISS dense vectorstore indexing and top-k cosine similarity retrieval',
      'Context-grounded natural language Q&A with strict document page citations',
      'Multi-document cross-comparison, executive summaries, and action item generation',
    ],
    architecture: {
      inputs: 'Multi-Format Enterprise Documents (PDF, DOCX, Reports) & User Queries',
      processing: 'Document Text Extraction → Semantic Chunking → Gemini Embedding → FAISS Vector Store → Top-K Retrieval',
      outputs: 'Verified, Factual Answers with Direct Source Citations & Strategic Action Items',
      pipeline: [
        'Multi-Format Document Parsing (PyPDF / python-docx)',
        'Context-Preserving Semantic Text Chunking',
        'Gemini Vector Embeddings Generation',
        'FAISS Vector Indexing & Similarity Ranking',
        'Prompt Augmentation with Grounded Context',
        'Gemini LLM Response Synthesis with Exact Document Citations',
      ],
    },
    githubUrl: 'https://github.com/jalil7777/Enterprise-Knowledge-Copilot-project4',
  },
  {
    id: 'ai-data-quality-rootcause-copilot',
    title: 'AI Data Quality & Root-Cause Copilot',
    subtitle: 'Automated Anomaly Diagnostics & SQL Fix Synthesis',
    description:
      'Autonomous data diagnostics copilot analyzing dataset failures and ETL pipeline logs, detecting nulls, duplicates, and schema drift, and synthesizing plain-language root causes with executable SQL fixes.',
    fullDescription:
      'An intelligent diagnostic assistant built with Python, Gradio, Pandas, and Google Gemini API. Scans raw datasets and ETL pipeline execution logs, detects anomalies (Z-score outliers, null spikes, schema drift, duplicate keys), synthesizes root causes into clear business language for stakeholders, and automatically synthesizes executable SQL remediation queries and Python Pandas cleanup snippets.',
    category: 'GenAI & LLMs',
    featured: true,
    tags: ['Python', 'Google Gemini API', 'Gradio', 'Pandas', 'SQL Generation', 'Data Quality', 'Root-Cause Analysis'],
    keyHighlights: [
      'Interactive Gradio web interface for drag-and-drop CSV, dataset, and log inspection',
      'Statistical anomaly detection engine for null distributions, duplicate keys, and schema drift in Python',
      'Prompt-engineered root-cause investigation transforming cryptic errors into business insights',
      'One-click automated generation of executable SQL remediation and Python repair scripts',
    ],
    architecture: {
      inputs: 'Dataset CSVs, Broken ETL Pipeline Logs & Database Error Traces',
      processing: 'Pandas Statistical Profiler + Gemini LLM Root-Cause Analysis Agent',
      outputs: 'Interactive Diagnostic Report, Plain-Language Explanations, & Executable SQL Fixes',
      pipeline: [
        'Dataset & Pipeline Log Ingestion via Pandas',
        'Statistical Profiling (Null Ratios, Duplicate Keys, Schema Drift)',
        'LLM Prompt-Engineered Root Cause Diagnostics',
        'Automated SQL & Python Remediation Script Synthesis',
        'Interactive Review and Fix Execution via Gradio UI',
      ],
    },
    githubUrl: 'https://github.com/jalil7777/AI_Data_Quality_RootCause_Copilot',
  },
  {
    id: 'ai-business-decision-intelligence-platform',
    title: 'AI Business Decision Intelligence Platform',
    subtitle: 'Executive KPIs, Anomaly Alerts & What-If Strategy Copilot',
    description:
      'GenAI platform analyzing sales figures, customer feedback sentiment, and market reports to generate executive summaries, anomaly detection (>20% MoM swings), what-if forecasting, and interactive business Q&A.',
    fullDescription:
      'An end-to-end business strategy and executive decision intelligence copilot built in Python with Google Gemini API. Ingests raw sales data, customer feedback sentiment, and external market PDF reports. Computes essential business KPIs (revenue, profit, cost, orders, AOV, margins), trends over time, MoM anomaly detection, rule-based risks and opportunities, and features an interactive Gemini-powered conversational business advisor with what-if scenario forecasting.',
    category: 'GenAI & LLMs',
    featured: true,
    tags: ['Python', 'Google Gemini API', 'Pandas', 'PyPDF', 'Data Analysis', 'Interactive Dashboard', 'What-If Analysis'],
    keyHighlights: [
      'Automated sales KPI calculation (Revenue, Profit, Cost, Orders, AOV, Gross Margin)',
      'Month-over-month trend anomaly detection flagging >20% revenue and cost swings',
      'Customer sentiment extraction, feedback categorization, and market risk analysis',
      'Interactive AI business advisor for conversational executive queries and what-if simulations',
    ],
    architecture: {
      inputs: 'Sales Transactions CSV, Customer Feedback Logs & Market PDF Reports',
      processing: 'Pandas Aggregation Engine + NLP Sentiment Profiler + Gemini Executive Agent',
      outputs: 'Executive Summary Dashboard, Risk Matrix, Trend Projections & Conversational Advisor',
      pipeline: [
        'Multi-Source Data Ingestion & KPI Aggregation (Pandas)',
        'Time-Series Trend Profiling & >20% MoM Anomaly Detection',
        'Customer Sentiment & Unstructured Feedback Mining',
        'Gemini-Powered Executive Strategic Summary Synthesis',
        'Interactive Conversational Business Advisor & What-If Projections',
      ],
    },
    githubUrl: 'https://github.com/jalil7777/AI_Business_Decision_Intelligence_Platform',
  },
  {
    id: 'chatbot-project-genai-project2',
    title: 'Conversational RAG Chatbot System',
    subtitle: 'Sentence-Transformers, FAISS Indexing & Gradio Interface',
    description:
      'End-to-end conversational RAG system with sliding-window chunking, dense vector embeddings via SentenceTransformer (all-MiniLM-L6-v2), FAISS similarity retrieval, and Gemini context generation in Gradio.',
    fullDescription:
      'A production-grade Retrieval-Augmented Generation chatbot built with Python. Ingests documents with PyPDF, applies configurable sliding-window text chunking, encodes chunks into dense vector representations using SentenceTransformer ("all-MiniLM-L6-v2"), and performs sub-millisecond vector similarity search using FAISS. The retrieved context is dynamically injected into Google Gemini prompt pipelines to deliver factually grounded responses via an interactive Gradio UI.',
    category: 'GenAI & LLMs',
    featured: false,
    tags: ['Python', 'Google Gemini API', 'FAISS', 'Sentence-Transformers', 'PyPDF', 'Gradio', 'RAG'],
    keyHighlights: [
      'Document parsing and text chunking with configurable sliding window context in Python',
      'Dense vector embedding generation using SentenceTransformer (all-MiniLM-L6-v2)',
      'High-speed similarity search using FAISS (Facebook AI Similarity Search) L2 index',
      'Interactive conversational interface built with Gradio for real-time document querying',
    ],
    architecture: {
      inputs: 'PDF Knowledge Documents & Natural Language User Prompts',
      processing: 'PyPDF Parsing → Chunking → SentenceTransformer Encoding → FAISS Search → Gemini Synthesis',
      outputs: 'Context-Augmented, Grounded Conversational Answers',
      pipeline: [
        'Document Ingestion & Text Extraction (PyPDF)',
        'Context-Aware Token Chunking',
        'Dense Embedding Generation (all-MiniLM-L6-v2)',
        'FAISS Vector Indexing & Top-K Similarity Search',
        'Context-Enriched Prompt Construction',
        'Gemini Response Synthesis rendered in Gradio UI',
      ],
    },
    githubUrl: 'https://github.com/jalil7777/chatbot-project--GenAI-project2',
  },
  {
    id: 'genai-career-placement-advisor-project3',
    title: 'AI Career & Placement Intelligence Copilot',
    subtitle: 'Predictive ML Modeling + Gemini Structured Pydantic Outputs',
    description:
      'Hybrid predictive Machine Learning and Generative AI system. Benchmarks student readiness with Scikit-Learn models and generates personalized, structured career roadmaps using Gemini with Pydantic schemas in Streamlit & Gradio.',
    fullDescription:
      'An innovative fusion of classical machine learning and Generative AI. Evaluates student academic and profile parameters (CGPA, technical scores, internships, projects) using trained Scikit-Learn classification algorithms to determine placement probabilities, then feeds the structured predictions into Google Gemini (gemini-2.5-flash) with strict Pydantic JSON schemas (CareerAdvice) to synthesize customized readiness reports, skill gap analyses, and actionable interview preparation plans.',
    category: 'GenAI & LLMs',
    featured: false,
    tags: ['Python', 'Google Gemini API', 'Scikit-Learn', 'Pydantic', 'Streamlit', 'Gradio', 'Machine Learning'],
    keyHighlights: [
      'End-to-end supervised ML classification pipeline trained on student performance metrics',
      'Seamless integration with Google Gemini API leveraging strict Pydantic JSON schemas',
      'Automated personalized career readiness evaluations and skill development recommendations',
      'Interactive deployment across both Streamlit and Gradio web applications',
    ],
    architecture: {
      inputs: 'Student Academic Records, Internship History, & Technical Skill Scores',
      processing: 'Scikit-Learn Inference → Profile Serialization → Gemini Structured JSON Generation (Pydantic)',
      outputs: 'Placement Probability Score & Structured Career Roadmap (JSON validated)',
      pipeline: [
        'Student Profile Data Ingestion & Feature Normalization',
        'Scikit-Learn ML Model Prediction of Placement Readiness',
        'Structured Prompt Assembly with Student Feature Context',
        'Google Gemini API Generation with strict Pydantic JSON Schema',
        'Interactive Visual Dashboard & Action Plan in Streamlit / Gradio',
      ],
    },
    githubUrl: 'https://github.com/jalil7777/GenAI--project3',
  },
  {
    id: 'gen-ai-project1-dataprocessing',
    title: 'Python Data Processing & Automated ETL Pipeline',
    subtitle: 'High-Performance Data Engineering Foundation for GenAI',
    description:
      'Foundational data engineering pipeline in Python. Cleans and normalizes raw multi-source datasets, computes aggregations and financial metrics, and prepares tokenized, structured records for downstream LLM pipelines.',
    fullDescription:
      'A robust data processing and transformation pipeline engineered in Python using Pandas and NumPy. Ingests raw sales and transactional records, handles missing data and type coercion, computes complex gross amounts, discounts, and aggregated metrics, and establishes clean data schemas. Serves as the critical data preparation and ETL layer essential for priming raw enterprise records for vector embedding indexing and LLM context windows.',
    category: 'Machine Learning & Data',
    featured: false,
    tags: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'ETL Pipelines', 'Data Transformation', 'Google Colab'],
    keyHighlights: [
      'Comprehensive data cleaning: missing value resolution, deduplication, and data type coercion',
      'Vectorized calculation of gross amounts, progressive discount tiers, and net revenue',
      'Automated summary statistics, distribution analysis, and anomaly filtering',
      'Production-ready data preparation tailored for semantic search and LLM context inputs',
    ],
    architecture: {
      inputs: 'Raw Transactional Data, Sales Logs & Multi-Format CSVs',
      processing: 'Data Sanitization → Missing Value Imputation → Vectorized Financial Transforms → Schema Validation',
      outputs: 'Clean, Validated Datasets Primed for Vector Embedding & LLM Pipelines',
      pipeline: [
        'Raw Data Ingestion via Pandas DataFrames',
        'Data Cleaning, Type Casting & Deduplication',
        'Vectorized Metric Calculation (Gross Amount, Discount Tiers, Net Total)',
        'Data Quality & Consistency Verification',
        'Export of Normalized Datasets for Downstream AI Pipelines',
      ],
    },
    githubUrl: 'https://github.com/jalil7777/Gen-AI-Project1',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'techpanda',
    role: 'Generative AI Engineer Intern',
    company: 'TechPanda Academy',
    period: '2026 – Present',
    location: 'Chennai / Remote',
    type: 'Internship',
    isCurrent: true,
    description: [
      'Developing real-world Generative AI applications leveraging Large Language Models (LLMs), OpenAI API, and Gemini API.',
      'Designing and deploying Retrieval-Augmented Generation (RAG) architectures with semantic chunking, vector embeddings, and similarity-based retrieval.',
      'Crafting structured prompts with context-aware guardrails, reducing model hallucinations and elevating response groundedness.',
      'Building interactive demo interfaces using Streamlit and Gradio for rapid evaluation and stakeholder testing.',
      'Collaborating on end-to-end Python pipelines integrating data preprocessing, API communication, and response parsing.',
    ],
    technologies: ['Python', 'Gemini API', 'OpenAI API', 'RAG Pipelines', 'Vector Databases', 'Prompt Engineering', 'Streamlit', 'Gradio'],
  },
  {
    id: 'digitide',
    role: 'Customer Support Executive',
    company: 'Digitide',
    formerName: 'formerly Conneqt Business Solutions',
    period: 'July 2024 – October 2025',
    location: 'Bangalore, India',
    type: 'Full-Time',
    description: [
      'Delivered dedicated client support in Bangalore, managing complex customer inquiries, service troubleshooting, and incident resolution.',
      'Honed critical analytical thinking, root-cause diagnostics, and professional communication skills under tight SLAs.',
      'Collaborated with internal operations and cross-functional teams to resolve recurring workflow bottlenecks.',
      'Demonstrated high adaptability, empathy, and consistency, contributing to strong satisfaction metrics.',
    ],
    technologies: ['Customer Operations', 'Incident Troubleshooting', 'Root-Cause Analysis', 'Workflow Optimization', 'SLA Management'],
  },
  {
    id: 'kodnest',
    role: 'Java Full Stack Developer Trainee',
    company: 'Kodnest Technologies',
    period: 'August 2023 – March 2024',
    location: 'Bangalore, India',
    type: 'Professional Training',
    description: [
      'Completed intensive enterprise full-stack development curriculum in Bangalore covering Core Java, J2EE, Spring Boot, Hibernate, and SQL.',
      'Developed end-to-end web applications implementing RESTful APIs, MVC architectural patterns, and relational database schemas.',
      'Built a solid engineering foundation in Object-Oriented Programming (OOP), algorithms, data structures, and clean code practices.',
    ],
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'RESTful APIs', 'SQL', 'MySQL', 'OOP', 'MVC Architecture'],
  },
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Engineering (B.E.)',
  field: 'Computer Science & Engineering',
  institution: 'NPR College of Engineering & Technology',
  university: 'Anna University',
  period: '2019 – 2023',
  cgpa: '7.69 / 10.0',
  location: 'Tamil Nadu, India',
  highlights: [
    'Comprehensive foundation in Data Structures, Algorithms, Operating Systems, Database Management Systems (DBMS), and Computer Networks.',
    'Undertook engineering capstone projects involving mobile identity verification and full-stack software development.',
    'Graduated with 7.69 CGPA while actively building software projects and exploring machine learning fundamentals.',
  ],
};
