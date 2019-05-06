from django.db import models

# Create your models here.

class Article(models.Model):
    title =models.CharField(max_length =100, unique=True)
    image =models.ImageField(upload_to='article/',default='default.jpg',blank=True,null =True)
    date =models.DateTimeField()
    content =models.TextField()
    draft = models.BooleanField(default=True)


    def __str__(self):
        return self.title

class Hero(models.Model):
    image =models.ImageField(upload_to='hero/',default='default.jpg')
    caption = models.CharField(max_length=250)
    sub_heading = models.CharField(max_length =100)
    date = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.caption


class Story(models.Model):
    image =models.ImageField(upload_to='story/',default='default.jpg')
    title = models.CharField(max_length=250)
    tag = models.CharField(max_length =100)
    date = models.DateTimeField(auto_now=True, auto_now_add=False)
    photographer = models.TextField()
    content = models.CharField(max_length=250)
    slug =models.SlugField(unique=True)


    def __str__(self):
        return self.title

class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name