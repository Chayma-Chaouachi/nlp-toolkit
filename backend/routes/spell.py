from fastapi import APIRouter
from pydantic import BaseModel
from services.spell_check import spell_check

router = APIRouter()

class TextRequest(BaseModel):
    text: str

@router.post("/")
def check(req: TextRequest):
    return {"result": spell_check(req.text)}
