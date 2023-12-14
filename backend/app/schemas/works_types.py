from pydantic import BaseModel

class BaseWork_Type(BaseModel):
    work_id: int
    type_id: int