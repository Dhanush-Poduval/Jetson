from fastapi import FastAPI,Depends
from . import models
from .database import engine
from . import schemas,database
from .database import SessionLocal
from sqlalchemy.orm import Session
import random
from typing import List




app=FastAPI()
def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

models.Base.metadata.create_all(bind=engine)




@app.get('/dashboard',response_model=List[schemas.Details])
def values(db:Session=Depends(get_db)):
    value=db.query(models.Details).all()

    return value

    

@app.post("/dashboard",status_code=201,response_model=schemas.Details)
def add_values(value:schemas.Show_Details,db:Session=Depends(get_db)):
    new_values=models.Details(Name=value.Name,Connected_To=value.Connected_To,Changes_made=value.Changes_made , CPU=round(random.uniform(0,100),2),GPU=round(random.uniform(0,100),2),RAM=round(random.uniform(0,100),2))
    db.add(new_values)
    db.commit()
    db.refresh(new_values)
    return new_values
