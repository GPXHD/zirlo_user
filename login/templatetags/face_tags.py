# -*- coding: utf-8 -*-
from django import template
from login.models import *
from zirlo_user.settings import *

register = template.Library()


@register.filter
def get_face_url(size, content):
    if content:
        return MEDIA_URL + 'face/%d/%s' % (size, content)
    else:
        return DEFAULT_FACE % size


def face16(content):
    return get_face_url(16, content)


def face24(content):
    return get_face_url(24, content)


def face32(content):
    return get_face_url(32, content)


def face(content):
    return get_face_url(75, content)


register.filter('face', face)
register.filter('face16', face16)
register.filter('face24', face24)
register.filter('face32', face32)

