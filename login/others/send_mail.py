import os
import smtplib
import email
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.base import MIMEBase
from email.mime.application import MIMEApplication
from email.header import Header
os.environ['DJANGO_SETTINGS_MODULE'] = 'zrilo_user.settings'


def send_mails(email_add, code):
    smtp_server = 'smtp.qq.com'
    smtp_user = '1433428978@qq.com'
    smtp_pwd = 'qnlikixzimuefiid'

    sender = smtp_user
    receive = email_add

    subject = '来自www.zr.com的注册确认邮件'

    text_content = '''
                    感谢注册www.zr.com，复仇者联盟！\
                    如果你看到这条消息，说明你的邮箱服务器不提供HTML链接功能，请联系管理员！
                   '''

    html_content = '''
                     <p>感谢注册<a href="http://{}/confirm/?code={}" target=blank>www.zr.com</a>，\
                     这里是复仇者联盟!</p>
                     <p>请点击站点链接完成注册确认！</p>
                     <p>此链接有效期为{}天！</p>
                   '''.format(settings.IP_ADDRESS, code, settings.CONFIRM_DAYS)

    msg = MIMEMultipart('alternative')
    msg['Subject'] = Header(subject).encode()
    msg['From'] = "Test <%s>" % sender
    msg['To'] = "User <%s>" % receive
    text_plain = MIMEText(text_content, _subtype='plain', _charset='UTF-8')
    msg.attach(text_plain)
    text_html = MIMEText(html_content, _subtype='html', _charset='UTF-8')
    msg.attach(text_html)

    try:
        server = smtplib.SMTP_SSL(smtp_server, 465)
        server.ehlo()
        server.login(smtp_user, smtp_pwd)
        server.sendmail(sender, receive, msg.as_string())
        server.quit()
        # server.close()
        print('邮件发送成功！')
    except smtplib.SMTPConnectError as e:
        print('邮件发送失败，连接失败:', e.smtp_code, e.smtp_error)
    except smtplib.SMTPAuthenticationError as e:
        print('邮件发送失败，认证错误:', e.smtp_code, e.smtp_error)
    except smtplib.SMTPSenderRefused as e:
        print('邮件发送失败，发件人被拒绝:', e.smtp_code, e.smtp_error)
    except smtplib.SMTPRecipientsRefused as e:
        print('邮件发送失败，收件人被拒绝:')
    except smtplib.SMTPDataError as e:
        print('邮件发送失败，数据接收拒绝:', e.smtp_code, e.smtp_error)
    except smtplib.SMTPException:
        print('邮件发送失败, ')
    except Exception as e:
        print('邮件发送异常, ', str(e))
