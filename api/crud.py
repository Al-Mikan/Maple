import datetime
from sqlalchemy.orm import Session
import models, schemas


def get_all_posts(db: Session):
    return db.query(models.Posts).all()


def create_post(db: Session, post: schemas.CreatePost):
    # TODO: 画像を保存してパスを取得
    image_path = "todo"
    db_post = models.Posts(
        garigariname=post.garigariName,
        imagePath=image_path,
        comment=post.comment,
        lat=post.lat,
        lng=post.lng,
        genre=post.genre,
        favorites=0,
        createdAt=datetime.datetime.now(),
    )
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post
