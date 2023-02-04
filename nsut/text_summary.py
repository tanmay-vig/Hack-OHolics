import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
from heapq import nlargest

text= """ Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Her discography spans multiple genres, and her songwriting—often inspired by her personal life—has received critical praise and wide media coverage. Born in West Reading, Pennsylvania, Swift moved to Nashville at age 14 to become a country artist. She signed a songwriting deal with Sony/ATV Music Publishing in 2004 and a recording contract with Big Machine Records in 2005. Her 2006 self-titled debut album made her the first female country singer to write or co-write a U.S. platinum-certified album entirely.

Swift's next albums, Fearless (2008) and Speak Now (2010), explored country pop. The former's "Love Story" and "You Belong with Me" were the first country songs to top the U.S. pop and all-genre airplay charts, respectively. She experimented with rock and electronic styles on Red (2012), which featured her first Billboard Hot 100 number-one song, "We Are Never Ever Getting Back Together", and eschewed her country image in her synth-pop album, 1989 (2014), supported by chart-topping songs "Shake It Off", "Blank Space", and "Bad Blood". Media scrutiny inspired the urban-flavored Reputation (2017) and its number-one single "Look What You Made Me Do".

Exiting Big Machine, Swift signed with Republic Records in 2018 and released her seventh studio album, Lover (2019), followed by the autobiographical documentary Miss Americana (2020). She ventured into indie folk and alternative rock in her 2020 albums Folklore and Evermore, whose singles "Cardigan" and "Willow" topped the Hot 100. Swift began re-recording her first six albums after a dispute over their masters, re-releasing two in 2021—Fearless (Taylor's Version) and Red (Taylor's Version). The latter's "All Too Well (10 Minute Version)" became the longest song to top the Hot 100. Her tenth original album Midnights (2022) and its single "Anti-Hero" broke all-time streaming records. Swift has self-directed music videos and films, such as All Too Well: The Short Film (2021), and had supportive acting roles in others.

Having sold over 200 million records globally, Swift is one of the best-selling musicians in history. She is the most streamed woman on Spotify, and the only act to have five albums open with over one million copies sold in the US. Among her accolades are 11 Grammy Awards, including three Album of the Year wins; an Emmy Award; 40 American Music Awards; 29 Billboard Music Awards; and 92 Guinness World Records. Swift has been featured in rankings such as Rolling Stone's 100 Greatest Songwriters of All Time, Billboard's Greatest of All Time Artists, the Time 100 and Forbes Celebrity 100. Honored with titles such as Artist of the Decade and Woman of the Decade, Swift is an advocate for artists' rights and women's empowerment. Her music is credited with influencing a generation of singer-songwriters. """

def summarizer(rawdocs): 
    stopwords = list(STOP_WORDS)
    # print(stopwords)
    import en_core_web_sm
    nlp = spacy.load('en_core_web_sm')

    doc = nlp(rawdocs)
    # print(doc)

    tokens = [token.text for token in doc]
    # print(tokens)

    word_freq = {}
    for word in doc:
        if word.text.lower() not in stopwords and word.text.lower() not in punctuation:
            if word.text not in word_freq.keys():
                word_freq[word.text] = 1
            else:
                word_freq[word.text] += 1

    # print(word_freq)

    max_freq = max(word_freq.values())
    # print(max_freq)

    for word in word_freq.keys():
        word_freq[word] = word_freq[word]/max_freq

    # print(word_freq)

    sent_tokens = [sent for sent in doc.sents]
    # print(sent_tokens)

    sent_scores = {}
    for sent in sent_tokens:
        for word in sent:
            if word.text in word_freq.keys():
                if sent not in sent_scores.keys():
                    sent_scores[sent] = word_freq[word.text]
                else:
                    sent_scores[sent] += word_freq[word.text]

    # print(sent_scores)

    select_len = int(len(sent_tokens) * 0.3)
    # print(select_len)

    summary=nlargest(select_len,sent_scores, key= sent_scores.get)
    # print(summary)

    final_summary = [word.text for word in summary]
    summary = ' '.join(final_summary)
    # print(text)
    # print(summary)

    # print("length of original text ", len(text.split(' ')))
    # print("length of summary", len(summary.split(' ')))

    return summary, doc, len(rawdocs.split(' ')), len(summary.split(' '))
