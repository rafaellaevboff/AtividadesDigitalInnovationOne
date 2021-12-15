package com.exerciciosArray;

/*
Faça um Programa que leia um vetor de 6 caracteres,
e diga quantas consoantes foram lidas.
Imprima as consoantes.
*/

import java.util.Scanner;

public class Exercicio02_Consoantes {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);

        final int TAMANHO = 6;
        String[] arrayConsoantes = new String[TAMANHO];

        int qtdeConsoantes = 0;
        int i = 0;

        do{
            System.out.println("Digite uma letra:");
            String letra = ler.next();

            if (!(letra.equals("a") || letra.equals("e") || letra.equals("i") || letra.equals("o") || letra.equals("u"))){
                arrayConsoantes[i] = letra;
                qtdeConsoantes++;
            }
            i++;
        }while(i < TAMANHO);

        System.out.println("\nQuantidade de consoantes: " + qtdeConsoantes);
        System.out.println("Consoantes digitadas:");
        for (i = 0; i < TAMANHO; i++){
            if(arrayConsoantes[i] != null) System.out.print(arrayConsoantes[i] + " ");
        }
    }
}
