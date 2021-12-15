package com.exerciciosLoops;

/*
Faça um programa que peça uma nota, entre zero e dez.
Mostre uma mensagem caso o valor seja inválido
e continue pedindo
até que o usuário informe um valor válido.
*/

import java.util.Scanner;

public class Exercicio02_Nota {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        double nota;

        System.out.println("NOTA:");
        nota = ler.nextDouble();

        while(nota < 0 || nota > 10){
            System.out.println("Valor inválido. Digite uma nota entre 0 e 10:");
            nota = ler.nextDouble();
        }

        System.out.println("NOTA: " + nota);
    }
}
