from textblob import TextBlob

def get_sentiment_score(data):
    feedback=data
    blob=TextBlob(feedback)
    list=[]
    list.append(blob.sentiment)
    return list


def get_sentiment_score_text(data):
    feedback = data
    blob = TextBlob(feedback.get('text'))
    list = []
    list.append(blob.sentiment)
    return list