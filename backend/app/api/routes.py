from fastapi import APIRouter
from pydantic import BaseModel
from app.services.pipeline_orchestrator import MockPipelineOrchestrator

router = APIRouter()

pipeline = MockPipelineOrchestrator()


class SearchRequest(BaseModel):
    abstract: str


@router.post("/search")
def run_search(req: SearchRequest):
    results = pipeline.run_search(req.abstract)
    return results


@router.post("/summary")
def generate_summary(paper: dict):
    return pipeline.generate_summary(paper)
