README
URLs:
https://us-central1-quiz-8-project.cloudfunctions.net/quiz-8-function?operation=div&data1=10&data2=2
https://storage.googleapis.com/quiz-8-bucket/index.html

Implemented:
Google Cloud Function
Front Facing Static Website stored in static cloud bucket on google cloud

Not Implemented:
Pub Sub

Stored the "index.html" file and the "quiz-8-scripts.js" file in the cloud storage bucket labeled "quiz-8-bucket"
The bucket is open to the public and is available. The "main.py" script is a python script saved as a cloud function.
The Cloud function works, and the HTML works, however whenever I contact the server, the script does not seem to be 
exported with the HTML from the cloud bucket. 