package com.exerciciosArray;

/*
Gere e imprima uma matriz M 4x4 com valores aleatórios entre 0-9.
*/

import java.util.Random;

public class Exercicio04_ArrayMultidimensional {
    public static void main(String[] args) {
        Random random = new Random();

        //constantes pra definir tamanho do array:
        final int LINHAS = 4;
        final int COLUNAS = 4;

        //Declarando array:
        int[][] vetorMulti = new int[LINHAS][COLUNAS];

        //colocar elementos dentro do array:
        for(int i = 0; i < vetorMulti.length; i++) {//cada linha
            for (int j = 0; j < vetorMulti[i].length; j++) { //cada coluna da linha i
                vetorMulti[i][j] = random.nextInt(9);
            }
        }

        //mostrar a Matriz:
        System.out.println("MATRIZ:");
        for (int[] linha : vetorMulti) {
            for (int elementoDaColuna : linha) {
                System.out.print(elementoDaColuna + " ");
            }
            System.out.println();
        }
    }
}
