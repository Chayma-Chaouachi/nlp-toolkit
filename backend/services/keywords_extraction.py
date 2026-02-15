import nltk
from collections import Counter
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

nltk.download("punkt")
nltk.download("stopwords")

def extract_keywords(text: str, top_n=5):
    tokens = word_tokenize(text.lower())
    stops = set(stopwords.words("english"))
    words = [w for w in tokens if w.isalpha() and w not in stops]
    freq = Counter(words)
    return [word for word, _ in freq.most_common(top_n)]
