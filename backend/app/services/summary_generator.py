import random
import time
import yaml
from pathlib import Path
from typing import Dict

BASE_DIR = Path(__file__).resolve().parents[2]
CONFIG_PATH = BASE_DIR / "config.yaml"


class MockSummaryGenerator:

    def __init__(self):

        self.config = self._load_config()

        self.include_limitations = True

        print("Summary Generator Ready")

    def _load_config(self):

        if CONFIG_PATH.exists():
            with open(CONFIG_PATH) as f:
                return yaml.safe_load(f)

        return {}

    # --------------------------

    def generate_summary(self, paper: Dict):

        time.sleep(1)

        return {
            "research_objective":
                "This paper studies semantic embeddings.",

            "methodology_summary":
                "Transformer encoder with contrastive loss.",

            "key_findings": [
                "Improves similarity accuracy",
                "Reduces latency",
                "Better generalization",
                "Scales efficiently"
            ],

            "innovation_and_contribution":
                "Introduces efficient embedding learning.",

            "technical_details":
                "BERT-based dual encoder.",

            "limitations_and_future_work":
                "Needs domain adaptation.",

            "paper_filename": paper.get("filename", "")
        }
