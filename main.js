var images = ["family.jpg","santosh kesrale.jpeg","sunanda kesrale.jpeg","sadashiv.jpeg","shashwat.jpeg"];
var names = ["Family Book","santosh kesrale", "sunanda kesrale", "sadashiv kesrale", "shashwat kesrale"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    

     var updatedImage = images[i];
     var updatedName = names[i];
 
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName;
}
