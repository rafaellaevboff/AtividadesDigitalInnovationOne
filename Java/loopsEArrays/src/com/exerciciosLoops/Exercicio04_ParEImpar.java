package com.exerciciosLoops;

/*
Faça um programa que peça N números inteiros,
calcule e mostre a quantidade de números pares
e a quantidade de números impares.
*/

import java.util.Scanner;

public class Exercicio04_ParEImpar {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int qtdeNums;
        int num;
        int pares = 0, impares = 0;
        int i = 0;

        System.out.println("Digite quantos números deseja digitar:");
        qtdeNums = ler.nextInt();

        do{
            System.out.println(i+1 + "º NÚMERO: ");
            num = ler.nextInt();

            if(num % 2 == 0) {pares++;}
            else impares++;

            i++;
        }while(i < qtdeNums);

        System.out.println("A quantidade de números pares digitados foi " + pares);
        System.out.println("A quantidade de números ímpares digitados foi " + impares);
    }
}
