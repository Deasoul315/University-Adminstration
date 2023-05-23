from . import variable
import re

def is_number_in_range(number, minimmum, maximmum):
    try:
        return True if float(number) >= minimmum and float(number) <= maximmum  else False
    except:
        return False

def is_id(id):
    return is_number_in_range(id, 1, 99999999)

def is_name(name):

    if name == "" and name.isdigit():
        return False

    return True

def is_dob(dob):
    try:
        year, day, month = [int(x) for x in dob.split("-")]
        
        if year < 1900 or day not in range(1, 33) or month not in range(1, 13):
            return False

        return True

    except:
        return False

def is_gpa(gpa):
    return is_number_in_range(gpa, 0, 4)
    
def is_switch(value):

    if value == "on" or value == "off":
        return True
    
    else:
        return False
    
def is_gender(gender):

    return is_switch(gender)

def is_status(status):

    return is_switch(status)

def is_level(level):
    return is_number_in_range(level, 1, 4)

def is_dept(dept):
    return True if dept in variable.departments else False

def is_email(email):
    regex = re.compile(r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')
    if re.fullmatch(regex, email):
        return True
    else:
        return False

def is_mobile(mobile):
    regex = re.compile(r'^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
    if re.fullmatch(regex, mobile):
        return True
    else:
        return False