# Generated by Django 2.2.4 on 2019-08-13 19:58

from django.db import migrations

def create_data(apps, schema_editor):
    Comment = apps.get_model('comments', 'Comment')
    Comment(authority="Authority 001", content="Authority 001 coment").save()

class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]


