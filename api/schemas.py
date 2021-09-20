from typing import List, Optional

from pydantic import BaseModel


class CreatePost(BaseModel):
    garigariName: str
    comment: Optional[str] = None
    lat: float
    lng: float
    image: str  # TODO: change to image
    genre: str
