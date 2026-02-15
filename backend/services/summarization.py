from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer

def summarize_text(text: str, sentences_count=3):
    parser = PlaintextParser.from_string(text, Tokenizer("english"))
    total_sentences = len(parser.document.sentences)

    # Empêcher de retourner le texte complet
    sentences_count = min(sentences_count, max(1, total_sentences - 1))

    summarizer = LsaSummarizer()
    summary = summarizer(parser.document, sentences_count)

    return " ".join(str(sentence) for sentence in summary)

