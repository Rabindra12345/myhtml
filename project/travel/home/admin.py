from django.contrib import admin
from .models import Article,Hero,Story,Tag

# Register your models here.


class ArticleModelAdmin(admin.ModelAdmin):
    list_display =["__str__","date","draft","image"]
    list_display_links =["__str__"]
    list_editable =["draft"]
    list_filter =["date","draft"]

    class Meta:
        model =Article

class HeroModelAdmin(admin.ModelAdmin):
    list_display =["__str__","caption","date"]
    list_display_links =["__str__"]
   
    list_filter =["date"]

    class Meta:
        model =Hero

class StoryModelAdmin(admin.ModelAdmin):
    list_display =["__str__","caption","date"]
    list_display_links =["__str__"]
   
    list_filter =["date"]

    class Meta:
        model =Story

class TagModelAdmin(admin.ModelAdmin):
    list_display =["name"]
    

    class Meta:
        model =Tag

    
admin.site.register(Article,ArticleModelAdmin)
admin.site.register(Hero,HeroModelAdmin)
admin.site.register(Story,StoryModelAdmin)
admin.site.register(Tag,TagModelAdmin)




