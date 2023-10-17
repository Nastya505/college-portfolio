from fastapi import FastAPI

from sqlalchemy.orm import Session
from config.db import engine, get_db
from . import models

app = FastAPI(
    title="College Portfolio API",
    docs_url="/documentation",
    redoc_url=None
)

models.Base