# Generated by Django 2.1.3 on 2018-12-01 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_delete_target_1900'),
    ]

    operations = [
        migrations.CreateModel(
            name='Target_1900',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField(verbose_name='番号')),
                ('en_word', models.CharField(max_length=200, verbose_name='英単語')),
                ('jp_word', models.CharField(max_length=200, verbose_name='日本語訳')),
            ],
            options={
                'verbose_name': 'ターゲット1900',
                'verbose_name_plural': 'ターゲット1900',
            },
        ),
    ]
