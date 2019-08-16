from django.db import models


class Location(models.Model):

    SCOPE_TYPES = (
        ('Co', 'Country'),
        ('Re', 'Region'),
        ('Pr', 'Province'),
        ('Di', 'District')
    )
    name = models.CharField(max_length=500)
    authority = models.CharField(max_length=500)
    scope = models.CharField(max_length=2, choices=SCOPE_TYPES)
    url_base = models.TextField(
        default="https://infogob.jne.gob.pe/Localidad/")
    parent = models.ForeignKey(
        'self', on_delete=models.CASCADE, null=True, blank=True)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_on']
