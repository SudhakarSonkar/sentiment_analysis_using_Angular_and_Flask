from typing import OrderedDict

def formatoutput(total,pos,neg,neu):
    output = OrderedDict({
            "total_review": total,
            "positive_review":pos,
            "negative_review":neg,
            "neutral_review":neu,
            })
    return output