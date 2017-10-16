from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

Base = declarative_base()

class Instance(Base):
	__tablename__ = 'instances'
	id = Column(Integer, primary_key=True)
	PrivateIpAddress = Column(String(39), nullable=False)
	PublicIpAddress = Column(String(39), nullable=False)
	NetworkInterfaces = Column(String(2000), nullable=False)

engine = create_engine('sqlite:///awsinstances.db')
Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()
