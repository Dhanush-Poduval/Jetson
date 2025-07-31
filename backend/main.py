from fastapi import FastAPI,Depends,status
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

@app.get('/dashboard/live',response_model=List[schemas.Live_Details])
def live(db:Session=Depends(get_db)):
    value=db.query(models.Details).all()
    return value


@app.get('/dashboard',response_model=List[schemas.Details])
def values(db:Session=Depends(get_db)):
    value=db.query(models.Details).all()

    return value

@app.get('/dashboard/{id}',response_model=schemas.Details)
def values_id(id, db:Session=Depends(get_db)):
    values=db.query(models.Details).filter(models.Details.id==id).first()
    return values

    

@app.post("/dashboard",status_code=201,response_model=schemas.Details)
def add_values(value:schemas.Show_Details,db:Session=Depends(get_db)):
    new_values=models.Details(Name=value.Name,Connected_To=value.Connected_To,Changes_made=value.Changes_made , CPU=round(random.uniform(0,100),2),GPU=round(random.uniform(0,100),2),RAM=round(random.uniform(0,100),2))
    db.add(new_values)
    db.commit()
    db.refresh(new_values)
    return new_values


@app.put("/dashboard/{id}",status_code=status.HTTP_202_ACCEPTED,response_model=schemas.Show_Details)
def update(id,value:schemas.Show_Details,db:Session=Depends(get_db)):
    new=db.query(models.Details).filter(models.Details.id==id).first()
    if not new:
        raise status.HTTP_400_BAD_REQUEST
    new.Name=value.Name
    new.Changes_made=value.Changes_made
    new.Connected_To=value.Connected_To
    db.commit()
    db.refresh(new)
    return new

@app.delete("/dashboard/{id}")
def delete(id,db:Session=Depends(get_db)):
    db.query(models.Details).filter(models.Details.id==id).delete(synchronize_session=False)
    db.commit()
    
    return "Deletion successfull"


