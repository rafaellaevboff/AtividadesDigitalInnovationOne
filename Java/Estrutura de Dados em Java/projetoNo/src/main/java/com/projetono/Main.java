package com.projetono;

public class Main {
    public static void main(String[] args) {

        //criando nós e apontando-os
        No no1 = new No("Conteúdo nó1");
        No no2 = new No("Conteudo nó2");
        no1.setProximoNo(no2); //no1 aponta para o no2

        No no3 = new No("Conteúdo nó3");
        no2.setProximoNo(no3); //no2 aponta para o no3

        No no4 = new No("Conteúdo nó4");
        no3.setProximoNo(no4); //no3 aponta para o no4

        //no1 -> no2 -> no3 -> no4 -> null

        System.out.println(no1);
        System.out.println("Próximo nó:\n" + no1.getProximoNo());

        System.out.println("---------------------------");

        System.out.println(no2);
        System.out.println("Próximo nó:\n" + no2.getProximoNo());

        System.out.println("---------------------------");

        System.out.println(no3);
        System.out.println("Próximo nó:\n" + no3.getProximoNo());

        System.out.println("---------------------------");

        System.out.println(no4);
        System.out.println("Próximo nó:\n" + no4.getProximoNo());
    }
}
