from fastapi import UploadFile, HTTPException
import os
import uuid
import datetime
from sqlalchemy.orm import Session
import models


async def save_file(file: UploadFile) -> str:
    """
    file を受け取って保存しにいってくれるくん
    pathを返す
    """
    if file.content_type == "image/png" or file.content_type == "image/jpeg":
        filename = str(uuid.uuid4())
        _, ext = os.path.splitext(file.filename)
        path = os.path.join("./uploads", f"{filename}{ext}")
        # TODO: print はしない
        print(path)
        fout = open(path, 'wb')
        while True:
            chunk = await file.read(100000)
            if not chunk:
                break
            fout.write(chunk)
        fout.close()
        return f"/static/{filename}{ext}"
    else:
        raise HTTPException(
            status_code=422, detail="\"image/png\" or \"image/jpeg\" のみ受け付けます")


def get_all_posts(db: Session):
    return db.query(models.Posts).all()


async def create_post(db: Session, garigari_name: str, comment: str, lat: float, lng: float, image: UploadFile, genre: str):
    image_path = await save_file(image)
    db_post = models.Posts(
        garigariname=garigari_name,
        imagePath=image_path,
        comment=comment,
        lat=lat,
        lng=lng,
        genre=genre,
        favorites=0,
        createdAt=datetime.datetime.now(),
    )
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post
