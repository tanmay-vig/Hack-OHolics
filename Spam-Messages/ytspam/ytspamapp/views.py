from django.shortcuts import render
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer

def classify_text(request):
    # Load the model and TfidfVectorizer from the file
    model = joblib.load('ytspam/models/model.pkl')
    vec = joblib.load('ytspam/models/vectorizer.pkl')

    # Get the text input from the request
    if request.method == 'POST':
        text = request.POST['text']

        # Preprocess and transform the input text
        X = vec.transform([text])
        X = X.toarray()

        # Use the model to classify the text
        classification = model.predict(X)
        if classification == 1:
            result = "Not Spam"
        else:
            result = "Spam"
        ...
        return render(request, 'ytspamapp/classify_text.html', {'classification': result})

    return render(request, 'ytspamapp/classify_text.html')



# Create your views here.
