# Generated by Django 2.2.4 on 2019-08-15 19:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0002_location_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='parent',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='locations.Location'),
        ),
    ]