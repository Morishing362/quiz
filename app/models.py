from django.db import models

class Test_book(models.Model):

    number = models.IntegerField(
        verbose_name='番号'
    )

    en_word = models.CharField(
        verbose_name='英単語',
        max_length=200,
    )

    jp_word = models.CharField(
        verbose_name='日本語訳',
        max_length=200,
    )

    def __str__(self):
        return self.en_word

    class Meta:
        verbose_name = 'テスト単語帳'
        verbose_name_plural = 'テスト単語帳'