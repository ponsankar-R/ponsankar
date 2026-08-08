'use client';

import React, { useState, useEffect } from 'react';

interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  isoDate: string;
  readTime: string;
  category: string;
  keywords: string[];
  content: {
    introduction: string;
    steps: {
      number: string;
      title: string;
      explanation: string;
      codeOrExample?: string;
    }[];
    conclusion: string;
  };
}

const articlesData: Article[] = [
  {
    id: 'vector-search-guide',
    title: 'Demystifying Vector Search: A Step-by-Step Technical Guide',
    summary:
      'Learn how vector search works under the hood—from dense embeddings and similarity math to approximate nearest neighbor (ANN) indexing like HNSW.',
    date: 'Aug 05, 2026',
    isoDate: '2026-08-05',
    readTime: '7 min read',
    category: 'AI Infrastructure',
    keywords: ['Vector Search', 'Embeddings', 'HNSW', 'Cosine Similarity', 'RAG', 'AI'],
    content: {
      introduction:
        'Traditional search engines look for exact words in a text (keyword matching). Vector search is fundamentally different: it converts data—such as text, images, or audio—into mathematical numbers called **embeddings**. This allows search engines to understand the **meaning and context** behind a query rather than just matching characters.',
      steps: [
        {
          number: '01',
          title: 'Converting Text into Embeddings (Dense Vectors)',
          explanation:
            'When a sentence is entered into an embedding model (like OpenAI text-embedding-3 or Sentence-BERT), the neural network converts words into a array of floating-point numbers—often with 768 to 1,536 dimensions.',
          codeOrExample:
            '// Example output from an embedding model\n"How do dogs communicate?" → [0.014, -0.832, 0.412, ..., 0.109]',
        },
        {
          number: '02',
          title: 'Mapping Vectors in High-Dimensional Space',
          explanation:
            'Every vector is a point in a multi-dimensional coordinate space. Words or concepts with similar meanings sit close together in this space, while unrelated concepts sit far apart.',
          codeOrExample:
            'Distance ("King" - "Man" + "Woman") ≈ Distance ("Queen")',
        },
        {
          number: '03',
          title: 'Measuring Similarity with Math',
          explanation:
            'To evaluate how close two vectors are, vector databases use geometric formulas:',
          codeOrExample:
            '• Cosine Similarity: Measures the angle between two vectors (best for text).\n• Euclidean Distance (L2): Measures the straight-line distance between two points.\n• Dot Product: Measures magnitude and direction (ideal for normalized vectors).',
        },
        {
          number: '04',
          title: 'Speeding Up Retrieval with ANN (HNSW Indexing)',
          explanation:
            'Comparing a query vector against millions of documents one-by-one (k-NN) is too slow. Instead, Vector Databases use Approximate Nearest Neighbor (ANN) indexing algorithms like HNSW (Hierarchical Navigable Small World graphs) to navigate high-dimensional space in millisecond logarithmic time.',
        },
        {
          number: '05',
          title: 'Executing the Vector Query Pipeline',
          explanation:
            'When a user submits a query: 1) The query is converted into a vector embedding. 2) The vector database traverses the HNSW index graph. 3) Top K nearest vectors are returned. 4) Corresponding documents are passed to the user or an LLM for Retrieval-Augmented Generation (RAG).',
        },
      ],
      conclusion:
        'By combining dense vector embeddings with efficient graph-based indexing (ANN), vector search enables powerful semantic search, recommendation systems, and modern RAG pipelines.',
    },
  },
  {
    id: 'hybrid-search-rag',
    title: 'Hybrid Search Architecture: Combining Keyword & Vector Retrieval',
    summary:
      'Why pure vector search fails on exact product SKUs and proper nouns—and how to build a hybrid BM25 + Dense Retrieval pipeline with Reciprocal Rank Fusion.',
    date: 'Jun 18, 2026',
    isoDate: '2026-06-18',
    readTime: '5 min read',
    category: 'Search Architecture',
    keywords: ['Hybrid Search', 'BM25', 'RAG', 'Reciprocal Rank Fusion'],
    content: {
      introduction:
        'While vector search excels at understanding intent and concepts, it often struggles with exact matches like serial numbers, domain terms, or specific names. Combining BM25 keyword search with Vector search yields the highest retrieval accuracy.',
      steps: [
        {
          number: '01',
          title: 'Dual Retrieval Strategy',
          explanation:
            'Run full-text lexical search (BM25) and dense semantic search (Vector) in parallel across the dataset.',
        },
        {
          number: '02',
          title: 'Score Normalization & RRF',
          explanation:
            'Merge result sets using Reciprocal Rank Fusion (RRF) to score documents based on their positional ranks across both keyword and vector outputs.',
        },
      ],
      conclusion:
        'Hybrid pipelines ensure high recall for generic questions while retaining pinpoint precision for exact terms.',
    },
  },
];

export default function ArticlesSection() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeArticle]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArticle(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Schema.org JSON-LD for Search Engine Optimization
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    headline: 'Technical Insights & Engineering Publications',
    description: 'In-depth engineering guides on Vector Search, AI Infrastructure, and System Architecture.',
    blogPost: articlesData.map((art) => ({
      '@type': 'TechArticle',
      headline: art.title,
      description: art.summary,
      datePublished: art.isoDate,
      keywords: art.keywords.join(', '),
      articleSection: art.category,
    })),
  };

  return (
    <section id="articles" className="py-28 max-w-6xl mx-auto px-6 relative bg-[#050505]">
      {/* Inject JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Section Header */}
      <div className="mb-16 border-b border-[#291A11] pb-8">
        <h2 className="text-3xl sm:text-5xl font-light text-[#F5EBE6] tracking-tight">
          Insights & <span className="font-serif italic text-[#E5A967]">Publications</span>
        </h2>
        <p className="text-[#C8B09E] text-sm mt-3 max-w-2xl font-light leading-relaxed">
          Deep-dive technical guides, algorithmic breakdowns, and architectural concepts written for clarity and depth.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articlesData.map((article) => (
          <article
            key={article.id}
            onClick={() => setActiveArticle(article)}
            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-b from-[#22160F] via-[#1B110B] to-[#120B07] border border-[#4D301E] hover:border-[#E5A967]/70 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.8)] cursor-pointer"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#2B1B11] pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5A967] px-3 py-1 rounded-full bg-[#140C07] border border-[#3D2516]">
                  {article.category}
                </span>
                <div className="text-[10px] font-mono text-[#9E8675] flex items-center gap-2">
                  <time dateTime={article.isoDate}>{article.date}</time>
                  <span className="w-1 h-1 rounded-full bg-[#4D301E]"></span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#F5EBE6] group-hover:text-[#E5A967] transition-colors leading-tight">
                  {article.title}
                </h3>
              </div>

              <p className="text-xs text-[#C8B09E] font-light leading-relaxed">
                {article.summary}
              </p>
            </div>

            <div className="pt-6 mt-4 flex items-center gap-2 text-xs font-serif italic text-[#E5A967] group-hover:translate-x-2 transition-transform">
              <span>Read Full Article</span>
              <span>→</span>
            </div>
          </article>
        ))}
      </div>

      {/* FULL ARTICLE MODAL / OVERLAY */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setActiveArticle(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-title"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0D0805] border border-[#5E3A24] p-6 sm:p-10 shadow-2xl text-[#F5EBE6]"
          >
            {/* Modal Header Controls */}
            <div className="flex justify-between items-center pb-6 border-b border-[#291A11] sticky top-0 bg-[#0D0805]/95 backdrop-blur z-10 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E5A967] px-3 py-1 rounded-full bg-[#140C07] border border-[#3D2516]">
                {activeArticle.category}
              </span>
              
              <button
                onClick={() => setActiveArticle(null)}
                aria-label="Close Article"
                className="flex items-center gap-2 text-xs font-mono text-[#C8B09E] hover:text-[#E5A967] bg-[#1C120B] border border-[#3D2516] px-4 py-2 rounded-full transition-colors"
              >
                <span>Close</span>
                <span>✕</span>
              </button>
            </div>

            {/* Article Content */}
            <header className="mt-8 space-y-4">
              <div className="text-xs font-mono text-[#9E8675] flex items-center gap-2">
                <time dateTime={activeArticle.isoDate}>{activeArticle.date}</time>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <h1 id="article-title" className="text-2xl sm:text-4xl font-light text-[#F5EBE6] leading-tight">
                {activeArticle.title}
              </h1>
              <p className="text-sm text-[#C8B09E] font-light italic leading-relaxed">
                {activeArticle.summary}
              </p>
            </header>

            <hr className="my-8 border-[#291A11]" />

            {/* Main Body */}
            <main className="space-y-8 text-sm leading-relaxed text-[#D8C0B0] font-light">
              <section className="bg-[#140C07] p-5 rounded-2xl border border-[#2B1B11]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5A967] mb-2">Overview</h4>
                <p className="text-xs leading-relaxed">{activeArticle.content.introduction}</p>
              </section>

              <div className="space-y-8">
                <h3 className="text-lg font-medium text-[#F5EBE6]">Step-by-Step Architecture & Execution</h3>
                
                {activeArticle.content.steps.map((step, idx) => (
                  <div key={idx} className="space-y-3 p-6 rounded-2xl bg-[#120B07] border border-[#2B1B11]">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#E5A967] bg-[#22160F] px-2.5 py-1 rounded-md border border-[#3D2516]">
                        {step.number}
                      </span>
                      <h4 className="text-base font-medium text-[#F5EBE6]">{step.title}</h4>
                    </div>

                    <p className="text-xs text-[#C8B09E] leading-relaxed">{step.explanation}</p>

                    {step.codeOrExample && (
                      <pre className="mt-3 p-4 rounded-xl bg-[#070403] border border-[#291A11] text-xs font-mono text-[#E5A967] whitespace-pre-wrap overflow-x-auto">
                        <code>{step.codeOrExample}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>

              <section className="pt-4">
                <h3 className="text-base font-medium text-[#F5EBE6] mb-2">Key Takeaways</h3>
                <p className="text-xs text-[#C8B09E] leading-relaxed bg-[#19100B] p-5 rounded-2xl border border-[#3D2516]">
                  {activeArticle.content.conclusion}
                </p>
              </section>
            </main>

            {/* Footer Close Button */}
            <div className="mt-12 pt-6 border-t border-[#291A11] flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#1C120B] border border-[#5E3A24] text-[#E5A967] font-medium text-xs hover:border-[#E5A967] transition-all"
              >
                Done Reading ✦
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}