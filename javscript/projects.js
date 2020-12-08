var titles_arr = ["Pattonville App Capstone Project", "Go Tournament Administrator", "Network Scanner", "Reliable Transport Streamer over UDP"]
var descriptions_arr = ["App description", "Go Project Description", "In my Introduction to Networking class we built a network scanner that given a list of domains would return information about the network. For this project I used Python 3, working within virtual environments and creating code that could be downloaded and ran on any machine through use of a pip requirements file. The scanner utilizes command line tools to do most of it’s lookups, and if the host machine is missing one of those command line tools the scanner still operates with graceful error handling.", "TCP description"]
var roles_arr = ["App Developer",  "Developer", "Lead Developer","Lead Developer TCP"]
var links_arr = ["app link", "Go Link", "https://github.com/MicahThompkins/class_project1", "TCP Link"]

function replace_text(index){
  document.getElementById("project_title").innerHTML = titles_arr[index]
  document.getElementById("description_text").innerHTML = descriptions_arr[index]
  document.getElementById("role_text").innerHTML = roles_arr[index]
  document.getElementById("project_link").innerHTML = titles_arr[index]
}
