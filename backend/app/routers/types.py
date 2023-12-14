from fastapi import(
    APIRouter,
    HTTPException,
    status,
    Depends    
)

from ..config.db import get_db
from ..models import Types as TypesModel
from  ..schemas import BaseType, Type

from sqlalchemy.orm import Session

from typing import List

router = APIRouter(
    prefix="/api/types",
    tags=["Types"]
)

@router.get("/", response_description="List of all types", response_model=List[Type], status_code=status.HTTP_200_OK)
def get_all_types(db: Session=Depends(get_db)):
    types = db.query(TypesModel).all()

    if types == []:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Nothing found"
        )
    return types

@router.post("/", response_description="Add new work_type", response_model=Type, status_code=status.HTTP_201_CREATED)
def add_type(work_type: BaseType, db: Session=Depends(get_db)):
    new_type = TypesModel(**work_type.model_dump())

    db.add(new_type)
    db.commit()
    db.refresh(new_type)

    return new_type