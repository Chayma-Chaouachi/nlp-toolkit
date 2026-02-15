from fastapi import APIRouter
from pydantic import BaseModel
from services.text_cleaning import kill_punctuation, clean_html

router = APIRouter()

class TextRequest(BaseModel):
    text: str

@router.post("/punctuation")
def remove_punctuation(req: TextRequest):
    return {"result": kill_punctuation(req.text)}

@router.post("/html")
def remove_html(req: TextRequest):
    return {"result": clean_html(req.text)}
