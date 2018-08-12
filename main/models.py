from django.db import models

# Create your models here.
class Project(models.Model):
	name = models.CharField(max_length=100, null=True, blank=True)
	description=models.CharField(max_length=200, null=True, blank=True)
	picture = models.ImageField(upload_to='images/', blank=True,default="/black.png")
	url = models.CharField(max_length=100, null=True, blank=True)
	

	def __str__(self):
		return self.name

