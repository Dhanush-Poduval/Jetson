from .database import Base
from sqlalchemy import Column,Integer,String,Float


class Details(Base):
    __tablename__="Logs"
    id=Column(Integer,primary_key=True,index=True)
    Name=Column(String)
    CPU=Column(Float)
    GPU=Column(Float)
    RAM=Column(Float)
    Connected_To=Column(String)
    Changes_made=Column(String)

