from django.shortcuts import render
from .models import *
# Create your views here.
def home(request):
	projects=Project.objects.all()
	return render(request,'footer.html',locals())

def about(request):
	projects=Project.objects.all()
	return render(request,'home.html')	