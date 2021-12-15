package com.exerciciosArray;

/*
Crie um vetor de 6 números inteiros
e mostre-os na ordem inversa.
*/

public class Exercicio01_ordemInversa {
    public static void main(String[] args) {
        int[] vetor={2,4,6,8,10,12};

        System.out.println("VETOR:");
        for(int i = 0; i < vetor.length; i++){
            System.out.print(vetor[i] + " ");
        }

        System.out.println("\nVETOR NA ORDEM INVERSA:");
        for(int i = (vetor.length - 1); i >= 0; i--){
            System.out.print(vetor[i] + " ");
        }
    }
}
