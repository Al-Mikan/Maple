from sqlalchemy import Column, Float, Integer, String, DateTime
from database import Base


class Posts(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, autoincrement=True)
    garigariname = Column(String, nullable=False)
    imagePath = Column(String, nullable=False)
    comment = Column(String, nullable=True)
    lat = Column(Float, nullable=False)
    lng = Column(Float, nullable=False)
    genre = Column(String, nullable=False)
    favorites = Column(Integer, nullable=False)
    createdAt = Column(DateTime, nullable=False)
