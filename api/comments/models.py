from django.db import models


class Comment(models.Model):
    authority = models.CharField(max_length=42)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_on']
