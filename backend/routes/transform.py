from fastapi import APIRouter
from pydantic import BaseModel
from services.text_transform import to_lowercase

router = APIRouter()

class TextRequest(BaseModel):
    text: str

@router.post("/lowercase")
def lowercase(req: TextRequest):
    return {"result": to_lowercase(req.text)}
