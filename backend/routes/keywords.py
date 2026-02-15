from fastapi import APIRouter
from pydantic import BaseModel
from services.keywords_extraction import extract_keywords

router = APIRouter()

class TextRequest(BaseModel):
    text: str

@router.post("/")
def keywords(req: TextRequest):
    return {"keywords": extract_keywords(req.text)}
