from pydantic import BaseModel
from typing import List
from datetime import date

class BaseWork(BaseModel):
    date: date
    title: str
    description: str
    image: str
    author:int
    type: List[int]

class Work(BaseWork):
    id: int

