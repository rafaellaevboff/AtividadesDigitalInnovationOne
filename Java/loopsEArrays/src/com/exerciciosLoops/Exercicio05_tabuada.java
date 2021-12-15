package com.exerciciosLoops;

/*
Desenvolva um gerador de tabuada,
capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10.
O usuário deve informar de qual numero ele deseja ver a tabuada.
A saída deve ser conforme o exemplo abaixo:
Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50
*/

import java.util.Scanner;

public class Exercicio05_tabuada {
    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);
        int fator1;
        final int TAMANHO_TABUADA = 10;

        System.out.println("Digite o número que deseja ver a tabuada:");
        fator1 = ler.nextInt();

        for(int i=1; i <= TAMANHO_TABUADA; i++){
            System.out.println(fator1 + "X"+ i + "=" + (fator1*i));
        }
    }
}
