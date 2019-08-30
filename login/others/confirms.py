import hashlib
import datetime
from login import models


def hash_code(s, salt='zirlo_user'):
    h = hashlib.sha256()
    s += salt
    h.update(s.encode())
    return h.hexdigest


def make_confirm_string(user):

    now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    code = hash_code(user.username, now)
    models.ConfirmString.objects.create(code=code, user=user)
    return code
