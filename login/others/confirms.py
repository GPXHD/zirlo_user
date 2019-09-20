import hashlib
import datetime
from django.shortcuts import render, redirect
from login.models import ConfirmNumber, ConfirmString
import random


def hash_code(s, salt='zirlo_user'):
    h = hashlib.sha256()
    s += salt
    h.update(s.encode())
    return h.hexdigest


def random_number():
    str_number = ""
    for i in range(6):
        ch = chr(random.randrange(ord('0'), ord('9') + 1))
        str_number += ch
    return str_number


def make_confirm_string(user):

    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    code = hash_code(user.username, now)
    ConfirmString.objects.create(code=code, user=user)
    return code


def make_confirm_number(user):
    number = random_number()
    ConfirmNumber.objects.create(number=number, user=user)
    return number
