from fastapi import FastAPI, Depends, File, UploadFile, Form, HTTPException
import uvicorn
from sqlalchemy.orm import Session
import crud
import models
import schemas
from database import SessionLocal, engine
import os
import uuid
from fastapi.staticfiles import StaticFiles

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


app = FastAPI()

app.mount("/static", StaticFiles(directory="uploads"), name="static")

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
async def posts(db: Session = Depends(get_db)):
    posts = crud.get_all_posts(db)
    return {"message": "get all posts here", "data": posts}


@app.post("/post")
async def post(post: schemas.CreatePost, db: Session = Depends(get_db)):
    crud.create_post(db, post)
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
    if file.content_type == "image/png" or file.content_type == "image/jpeg":
        filename = str(uuid.uuid4())
        _, ext = os.path.splitext(file.filename)
        path = os.path.join("./uploads", f"{filename}{ext}")
        # TODO: print はしない
        print(path)
        fout = open(path, 'wb')
        while 1:
            chunk = await file.read(100000)
            if not chunk:
                break
            fout.write(chunk)
        fout.close()
        # TODO: DBに保存
    else:
        raise HTTPException(
            status_code=422, detail="\"image/png\" or \"image/jpeg\" のみ受け付けます")
    res = {"status": "OK", "filename": file.filename, "a": file.content_type}
    print(res)
    return res

if __name__ == '__main__':
    uvicorn.run("main:app", reload=True)
