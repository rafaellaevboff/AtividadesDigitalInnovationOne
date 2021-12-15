package com.exerciciosLoops;

import java.util.Scanner;

/*
Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário.
Ex.: 5!= 120 (5 X 4 X 3 X 2 X 1)
*/

public class Exercicio06_Fatorial {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int num;
        int mult = 1;

        System.out.println("Digite o número que deseja saber o fatorial:");
        num = ler.nextInt();

        System.out.print(num +"! = ");
        for(int i = num; i >= 1; i--){
            mult = mult * i;
        }
        System.out.println(mult);
    }
}
