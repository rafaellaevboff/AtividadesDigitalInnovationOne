package com.exerciciosArray;

/*
Faça um Programa que leia 20 números inteiros aleatórios (entre 0 e 100) armazene-os num vetor.
Ao final mostre os números e seus sucessores.
*/

import java.util.Random;

public class Exercício03_NumerosAleatorios {
    public static void main(String[] args) {
        Random random = new Random();

        final int TAMANHO = 20;
        int[] numsAleatorios =new int [TAMANHO];
        int num;

        //criando o array com números aleatóios sorteados pelo random:
        for(int i = 0; i < TAMANHO; i++){
            num = random.nextInt(100);
            numsAleatorios[i] = num;
        }
        //mostrando array de números  com antecessores e sucessores:
        System.out.println("Array de números aleatórios:");
        for (int numero: numsAleatorios ) { /*antes do : é o tipo do elemento usado e depois do : é o array que vou percorrer*/
            System.out.println("Número: " + numero + ". Antecessor: "+ (numero-1) + ". Sucessor:" + (numero+1));
        }

        //mostrando nums aleatorios
        System.out.println("\nNúmeros aleatórios:");
        for (int numero: numsAleatorios ) { //antes do : é o tipo do elemento usado e depois do : é o array que vou percorrer
            System.out.print(numero + " ");
        }
        
        //mostrando antecessores dos nums aleatorios
        System.out.println("\nAntecessores de números aleatórios:");
        for (int numero: numsAleatorios ) { //antes do : é o tipo do elemento usado e depois do : é o array que vou percorrer
            System.out.print((numero-1) + " ");
        }

        System.out.println("\nSucessores de números aleatórios:");
        //mostrando sucessores dos nums aleatorios
        for (int numero: numsAleatorios ) { //antes do : é o tipo do elemento usado e depois do : é o array que vou percorrer
            System.out.print((numero+1) + " ");
        }

    }
}
