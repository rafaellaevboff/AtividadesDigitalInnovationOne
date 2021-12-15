package com.exerciciosLoops;

/*
Faça um programa que leia 5 números
e informe o maior número
e a média desses números.
*/

import java.util.Scanner;

public class Exercicio03_MaiorEMedia {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        final double QTDE_NUM = 5;
        double num;
        double maior = 0;
        double soma = 0;
        double media;

        for(int i = 0; i<QTDE_NUM; i++){
            System.out.println( i+1 + "º NUM:");
            num = ler.nextDouble();

            soma = soma + num;

            if(num > maior){
                maior = num;
            }
        }
        media = soma/QTDE_NUM;

        System.out.println("Maior número: " + maior);
        System.out.println("Média dos números: " + media);
    }
}
