import random

class MockPipelineOrchestrator:
    """
    Mock backend pipeline that simulates:
    - keyword extraction
    - arxiv paper search
    - comparative analysis
    """

    def run_search(self, abstract: str):
        keywords = self._extract_keywords(abstract)
        papers = self._mock_papers()
        analysis = self._mock_analysis(keywords, papers)

        return {
            "keywords": keywords,
            "papers": papers,
            "analysis": analysis
        }

    def _extract_keywords(self, text: str):
        words = [w.strip(".,") for w in text.split()]
        words = [w for w in words if len(w) > 5]
        return list(set(words[:5])) or ["NLP", "Similarity"]

    def _mock_papers(self):
        return [
            {
                "title": "Neural Document Similarity Models",
                "url": "https://arxiv.org/abs/2106.12345"
            },
            {
                "title": "Semantic Text Matching Using Transformers",
                "url": "https://arxiv.org/abs/2104.09876"
            },
            {
                "title": "Embedding Based Research Retrieval",
                "url": "https://arxiv.org/abs/2009.11111"
            },
            {
                "title": "Large Scale Paper Similarity Search",
                "url": "https://arxiv.org/abs/2201.22222"
            },
            {
                "title": "Deep Learning for Scientific Ranking",
                "url": "https://arxiv.org/abs/1908.33333"
            }
        ]

    def _mock_analysis(self, keywords, papers):
        return (
            f"Analysis based on keywords: {', '.join(keywords)}. "
            f"Most papers use transformer embeddings and contrastive learning. "
            f"Retrieval accuracy is high across models with varying ranking strategies."
        )
