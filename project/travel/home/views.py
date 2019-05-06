from django.shortcuts import render
from django.http import HttpResponse
# create your views here
from .models import Article,Hero,Story,Tag
def index(request):
    article_list = Article.objects.all()
    hero_list =Hero.objects.all()
    story_list=Story.objects.all()
    tag_list=Tag.objects.all()

    print(article_list)
    context={
       "articles":article_list,
       "hero_list":hero_list,
       "stories":story_list,
       "tags":tag_list
    }
    return render(request,'home/index.html',context)
    # return HttpResponse("<h2>Hello, we have done it</h2>")

