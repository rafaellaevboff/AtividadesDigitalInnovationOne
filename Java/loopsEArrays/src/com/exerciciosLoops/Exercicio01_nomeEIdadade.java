package com.exerciciosLoops;

/*
Faça um programa que leia conjuntos de dois valores,
o primeiro representando o nome do aluno e o segundo representando a sua idade.
(Pare o programa inserindo o valor 0 no campo nome)
*/

import java.util.Scanner;

public class Exercicio01_nomeEIdadade {

    public static void main(String[] args) {
        Scanner ler = new Scanner(System.in);

        String nome;
        int idade = 0;

        while(true){
            System.out.println("Digite seu primeiro nome: ");
            nome = ler.next();
            if (nome.equals("0")) break;

            System.out.println("Digite sua idade: ");
            idade = ler.nextInt();
            if (idade == 0) break;

            System.out.println("NOME: " + nome + "\nIDADE:" + idade);
        }
    }
}
