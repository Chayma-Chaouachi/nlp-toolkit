from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.summarization import summarize_text

router = APIRouter()

class TextRequest(BaseModel):
    text: str

@router.post("/")
def summarize(req: TextRequest):
    try:
        return {
            "summary": summarize_text(req.text)
        }
    except Exception as e:
        print("🔥 SUMMARIZE ERROR:", e)
        raise HTTPException(status_code=500, detail=str(e))
