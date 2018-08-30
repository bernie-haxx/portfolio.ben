from django.db import models
# Create your models here.
class Category(models.Model):
	name = models.CharField(max_length=100, null=True, blank=True)

	def __str__(self):
		return self.name

class Project(models.Model):
	name = models.CharField(max_length=100, null=True, blank=True)
	description=models.CharField(max_length=300, null=True, blank=True)
	role=models.CharField(max_length=100, null=True, blank=True)
	Technologies=models.CharField(max_length=300, null=True, blank=True)
	picture = models.ImageField(upload_to='images/', blank=True,default="/black.png")
	url = models.CharField(max_length=100, null=True, blank=True)
	category = models.ForeignKey(Category, on_delete=models.CASCADE,related_name="category",null=True,blank=True)	

	def __str__(self):
		return self.name

