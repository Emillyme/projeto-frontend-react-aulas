from rest_framework import serializers
from .models import Filmes, Genero, Classificacao, Imagem

class FilmesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filmes
        fields = ['id', 'titulo', 'genre', 'ano', 'idioma', 'classif']


class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = ['id', 'genre']


class ClassifSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classificacao
        fields = ['id', 'classif'] 


class ImagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagem
        fields = ['id', 'imagem']        