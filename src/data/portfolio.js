export const profile = {
  name: 'Charan Reddy',
  role: 'AI Engineer — Generative AI',
  phone: '+91-9346852834',
  email: 'charankalicheti21@gmail.com',
  location: 'Hyderabad, India',
  headline: 'Building enterprise-grade AI agents, RAG systems, NLP-to-SQL workflows, and predictive analytics platforms.',
  summary:
    'AI Engineer with 3 years of experience in Generative AI and Machine Learning, focused on scalable enterprise AI solutions using LLMs, RAG, AI Agents, Knowledge Graphs, FastAPI, vector search, and secure API integrations.',
};

export const metrics = [
  { label: 'Experience', value: '3 Yrs' },
  { label: 'AI Product Deployments', value: '12+' },
  { label: 'Enterprise RAG Systems', value: '5' },
  { label: 'Secure API Integrations', value: '30+' },
];

export const skills = [
  { group: 'Generative AI', items: ['LLMs', 'OpenAI GPT Models', 'RAG', 'AI Agents', 'LangChain', 'LangGraph', 'Prompt Engineering', 'Embeddings', 'Semantic Search', 'Retrieval Workflows', 'Agent Orchestration'] },
  { group: 'Backend', items: ['Python', 'FastAPI', 'REST APIs', 'JWT', 'OAuth2', 'SQLAlchemy', 'Async Python', 'API Security'] },
  { group: 'Databases', items: ['PostgreSQL', 'Neo4j', 'Qdrant', 'Pinecone', 'MySQL', 'Knowledge Graph Modeling'] },
  { group: 'ML / DL', items: ['Anomaly Detection', 'Feature Engineering', 'Predictive Analytics', 'Model Evaluation', 'Scikit-learn', 'NumPy', 'Pandas', 'Transformers', 'Vector Search'] },
  { group: 'Cloud / Tools', items: ['AWS S3', 'Amazon Bedrock', 'Microsoft Entra ID', 'Git', 'GitHub', 'Docker', 'Jupyter', 'VS Code'] },
];

export const projects = [
  {
    title: 'AI-Driven SQL Generation using Knowledge Graphs',
    period: 'June 2025 – Present',
    badge: 'Agentic AI + Knowledge Graph',
    description:
      'Natural language to SQL platform that lets business users query enterprise databases without writing SQL. Neo4j models tables, columns, and relationships, while LangGraph coordinates schema retrieval, SQL generation, validation, retry, execution, and response formatting.',
    stack: ['Python', 'FastAPI', 'OpenAI GPT', 'LangGraph', 'Neo4j', 'MySQL / Oracle', 'JWT'],
    impact: ['50–60% query accuracy improvement', '100+ enterprise query patterns automated', 'Stateful retry and SQL validation workflow'],
    flow: ['User query', 'Intent extraction', 'Neo4j schema retrieval', 'SQL generation', 'SQL validation & retry', 'DB execution', 'Natural language answer'],
  },
  {
    title: 'Enterprise Retrieval-Augmented Generation System',
    period: 'Production RAG',
    badge: 'RAG + Re-ranking',
    description:
      'Enterprise knowledge retrieval platform for natural language Q&A over structured and unstructured sources. The system uses document ingestion, chunking, embeddings, Qdrant vector search, metadata filters, Cohere reranking, and LLM response generation.',
    stack: ['Python', 'FastAPI', 'LangChain', 'Qdrant', 'text-embedding-3-large', 'Cohere Rerank', 'OpenAI GPT'],
    impact: ['Hybrid retrieval with BM25 + vector search', 'Top-K retrieval and Top-N reranking', 'Context-aware enterprise answers'],
    flow: ['Document ingestion', 'Cleaning & chunking', 'Embedding generation', 'Qdrant storage', 'Query embedding', 'Semantic retrieval', 'Reranking', 'LLM response'],
  },
  {
    title: 'Asset Health Care — Real-Time Monitoring System',
    period: 'June 2024 – May 2025',
    badge: 'Predictive Maintenance',
    description:
      'Industrial predictive maintenance platform for compressors, pumps, turbines, and reactors using real-time IoT sensor data from AVEVA / OSI PI. The ML pipeline detects abnormal behavior using KMeans clustering, threshold scoring, and temporal validation.',
    stack: ['Python', 'FastAPI', 'KMeans', 'Pandas', 'NumPy', 'Scikit-learn', 'PostgreSQL', 'SMTP'],
    impact: ['Reduced false alerts with temporal lag logic', '8+ years historical sensor preprocessing', 'Automated email alerts for maintenance teams'],
    flow: ['Sensor data', 'PI historian', 'Python ingestion', 'Preprocessing', 'KMeans model', 'Distance scoring', 'Warning / alert logic', 'PostgreSQL + Email'],
  },
];

export const experience = [
  {
    company: 'IBM',
    role: 'AI Engineer — Generative AI',
    period: 'June 2024 – Present',
    location: 'Hyderabad, India',
    points: [
      'Designed scalable Generative AI and Machine Learning solutions using LLMs, vector search, MCP, and FastAPI.',
      'Implemented predictive analytics and anomaly detection models using Scikit-learn, NumPy, and Pandas.',
      'Built secure, high-performance RESTful APIs for enterprise-grade AI applications.',
    ],
  },
  {
    company: 'IBEAP Solutions Pvt. Ltd.',
    role: 'Data Analyst Intern',
    period: 'June 2023 – May 2024',
    location: 'India',
    points: [
      'Extracted, cleaned, and preprocessed large clinical datasets using Pandas and NumPy.',
      'Performed EDA to identify trends, patterns, and anomalies.',
      'Built visual dashboards using Matplotlib and Seaborn for stakeholder reporting.',
    ],
  },
];
