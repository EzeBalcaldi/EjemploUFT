Browser("Google").Navigate "https://www.google.com.ar/?gws_rd=ssl"
Browser("Google").Page("Google").Image("Google").Check CheckPoint("Google")
Browser("Google").Page("Google").WebEdit("Buscar").Set "UFT"
Browser("Google").Page("Google").WebButton("Buscar con Google").Click


