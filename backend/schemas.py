from pydantic import BaseModel
class Details(BaseModel):
    Name:str
    Connected_To:str
    Changes_made:str

class Show_Details(Details):
    Name:str
    Connected_To:str
    Changes_made:str
    CPU:float
    GPU:float
    RAM:float
