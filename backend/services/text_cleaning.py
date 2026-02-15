import re
import string

def kill_punctuation(text: str) -> str:
    return text.translate(str.maketrans("", "", string.punctuation))

def clean_html(text: str) -> str:
    return re.sub(r"<.*?>", "", text)
