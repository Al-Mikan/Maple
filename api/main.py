from fastapi import FastAPI, Depends
import uvicorn
from sqlalchemy.orm import Session
import crud
import models
import schemas
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
async def root():
    return {"message": "this is root"}


@app.get("/posts")
async def posts():
    return {"message": "get all posts here."}


@app.post("/post")
async def post(post: schemas.CreatePost, db: Session = Depends(get_db)):
    print(post)
    return {"message": "post here"}


@app.post("/favorite")
async def favorite():
    return {"message": "this is favorite"}


if __name__ == '__main__':
    uvicorn.run(app=app)
