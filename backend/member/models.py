from django.db import models


class MemberVO(models.Model):
    username = models.CharField(primary_key=True, max_length=10)
    password = models.CharField(max_length=10)
    name = models.TextField()
    email = models.EmailField()

    class Meta:
        managed = True
        db_table = 'members'

    def __str__(self):
        return f'[{self.pk} is username = {self.username},' \
               f' password = {self.password}' \
               f' name = {self.name} ' \
               f' email = {self.email} '