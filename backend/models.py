from .database import Base
from sqlalchemy import Column,Integer,String,Float
from sqlalchemy import DateTime
from datetime import datetime,timezone
from zoneinfo import ZoneInfo


class Details(Base):
    __tablename__="Logs"
    id=Column(Integer,primary_key=True,index=True)
    Name=Column(String)
    CPU=Column(Float)
    GPU=Column(Float)
    RAM=Column(Float)
    Connected_To=Column(String)
    Changes_made=Column(String)

class Live_Details(Base):
    __tablename__='Live'
    id=Column(Integer,primary_key=True,index=True)
    CPU=Column(Float)
    GPU=Column(Float)
    RAM=Column(Float)
    timestamps=Column(DateTime(timezone=True),default=lambda:datetime.now(ZoneInfo("Asia/Kolkata")))


