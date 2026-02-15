from spellchecker import SpellChecker

spell = SpellChecker()

def spell_check(text: str):
    words = text.split()
    misspelled = spell.unknown(words)

    corrections = {}
    for word in misspelled:
        corrections[word] = spell.correction(word)

    return corrections
