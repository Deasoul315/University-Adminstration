import datetime

def get_datetime(date):
    year, day, month = [int(x) for x in date.split("-")]
    return datetime.date(year, month, day)

def get_gender(gender):
    return 'Male' if gender == 'on' else 'Female'

def get_status(status):
    return True if status == 'on' else False