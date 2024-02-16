from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from django.template import Context, loader

# Create your views here.

def custom_404(request, exception):
    return render(request, 'page/404.html', status=404)

def home(request):
    print("def home(request)")
    context = {
        "username": "Sarbi"
    }
    return render(request, 'page/index.html', context)

def game(request, num):
    context = {
        "username": "alpi",
    }
    template = loader.get_template("page/game.html")
    if num == 2:
        template = loader.get_template("page/test.js")
    elif num == 3:
        template = loader.get_template("page/profile.html")
    elif num == 4:
        template = loader.get_template("page/home.html")
    elif num == 5:
        template = loader.get_template("page/404.html")
    return HttpResponse(template.render(context))

def empty(request):
    return render(request, 'page/index.html')