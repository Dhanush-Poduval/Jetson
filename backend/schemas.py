from pydantic import BaseModel
from datetime import datetime
class Details(BaseModel):
    Name:str
    Connected_To:str
    Changes_made:str
    CPU:float
    GPU:float
    RAM:float
    class Config:
        orm_mode=True
class Live_Details(BaseModel):
    CPU:float
    GPU:float
    RAM:float
    timestamps:datetime
    class Config:
        orm_mode=True

class Show_Details(BaseModel):
    Name:str
    Connected_To:str
    Changes_made:str

    
