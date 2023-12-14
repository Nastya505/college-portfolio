from pydantic import BaseModel

class BaseAuthor(BaseModel):
    name: str
    login: str
    password: str
    email: str
    photo: str

class Author(BaseAuthor):
    id: int

