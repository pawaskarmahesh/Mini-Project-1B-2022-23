from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

# Create your models here.

#create meep modeles
class Meep(models.Model):
    user = models.ForeignKey(
        User, related_name="meeps",
        on_delete=models.DO_NOTHING
    )
    body=models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(User, related_name='liked_meeps', blank=True)
    def __str__(self):
        return(
            f"{self.user} "
            f"({self.created_at:%Y-%m-%d %H:%M}) :"
            f"{self.body}"
        )



#USER PROFILE MODELS
class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    follow = models.ManyToManyField("self",related_name="followed_by",symmetrical=False,blank=True)
    follows = models.ManyToManyField(User, related_name='followed_by', blank=True)
    date_modified = models.DateTimeField(User,auto_now=True)
    bio = models.CharField(max_length=500, blank=True)
    profile_image = models.ImageField(null=True, blank=True, upload_to='images/')

    def __str__(self):
        return f"{self.user.username}'s Profile"
    
    def get_followers_count(self):
        return self.followed_by.count()

    def get_following_count(self):
        return self.follow.exclude(user=self.user).count()
        return self.follows.count()
    

#create automated signup user
def create_profile(sender,instance,created,**kwargs):
    if created:
        user_profile = Profile(user=instance)
        user_profile.save()
        user_profile.follow.set([instance.profile.id]) #profile has to be created inorder to follow
        user_profile.save()

post_save.connect(create_profile,sender=User)


