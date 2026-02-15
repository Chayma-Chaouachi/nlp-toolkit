from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import transform, clean, spell, summarize, keywords

app = FastAPI(title="NLP Toolkit API")

# CORS (Angular)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "NLP Toolkit Backend Running"}

app.include_router(transform.router, prefix="/api/transform", tags=["Transform"])
app.include_router(clean.router, prefix="/api/clean", tags=["Clean"])
app.include_router(spell.router, prefix="/api/spell", tags=["Spell"])
app.include_router(summarize.router, prefix="/api/summarize", tags=["Summarize"])
app.include_router(keywords.router, prefix="/api/keywords", tags=["Keywords"])
