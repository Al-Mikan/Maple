from fastapi import FastAPI, Depends, File, UploadFile, Form
import uvicorn
from sqlalchemy.orm import Session
import crud
import models
from database import SessionLocal, engine
from fastapi.staticfiles import StaticFiles
from typing import List, Optional

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.mount("/static", StaticFiles(directory="uploads"), name="static")


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
async def posts(db: Session = Depends(get_db)):
    posts = crud.get_all_posts(db)
    return {"message": "get all posts here", "data": posts}


@app.post("/post")
async def post(
    garigari_name: str = Form(...),
    comment: Optional[str] = None,
    lat: float = Form(...),
    lng: float = Form(...),
    image: UploadFile = File(...),
    genre: str = Form(...),
    db: Session = Depends(get_db)
):
    await crud.create_post(db, garigari_name, comment, lat, lng, image, genre)
    # TODO: 画像の受け取り方を調べる
    return {"message": "post here"}


@app.post("/favorite")
async def favorite():
    return {"message": "this is favorite"}

# TODO: 画像保存の部分を関数として切り出す
# TODO: /post に画像のやつも組み込む
# schemas も更新


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...), title: str = Form(...)):
    image_path = crud.save_file(file)
    # TODO: DBに保存
    res = {"status": "OK", "filename": file.filename, "a": file.content_type}
    print(res)
    return res

if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)
