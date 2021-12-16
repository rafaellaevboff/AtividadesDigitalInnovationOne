package com.lacosJava;

import jdk.swing.interop.SwingInterOpUtils;

public class arrayUnidimensional {
    public static void main(String[] args) {

        //uma dimensão:
        final int TAMANHO = 5;
        String [] nomes = new String[TAMANHO];
        nomes[0] = "Rafaella";
        nomes[1] = "Pedro";
        nomes[2] = "Ana";
        nomes[3] = "Felipe";
        nomes[4] = "Márcia";
        System.out.println("ARRAY NOMES:");
        for (String nome : nomes) {
            System.out.print(nome + " ");
        }
        System.out.println();

        //duas dimensões:
        char[][] jogo = new char[3][3];
        jogo[0][0] = 'x';
        jogo[2][1] = 'o';
        System.out.println("\nARRAY JOGO:");
        for (char[] letras : jogo) {
            for (char charColuna : letras) {
                System.out.print(charColuna + " ");
            }
            System.out.println();
        }

        //três dimensões:
        int [][][] assinalar = new int[3][3][3];
        assinalar[0][0][0] = 10;
        assinalar[1][1][0] = 15;
        System.out.println("\nASSINALAR COM NÚMEROS:");
        for (int[][] papel : assinalar) {
            for (int[] linha : papel) {
                for (int numCol : linha) {
                    System.out.print(numCol + " ");
                }
                System.out.println();
            }
            System.out.println();
        }

        int[][][] t = new int[][][]{{{1,2},{3,4}},{{5,6},{7,8}},{{9,1}, {2,3}}};
        int[][][] t2 = {{{1,2},{3,4}},{{5,6},{7,8}}};
        System.out.println("\nARRAY TRÊS DIMENSÕES:");
        for (int[][] papel2 : t) {
            for (int[] linha2 : papel2) {
                for (int numCol2 : linha2) {
                    System.out.print(numCol2 + " ");
                }
                System.out.println();
            }
            System.out.println();
        }

        //criando arrays já populando:
        int [][] m = new int[][]{{1,2}, {3,4}};
        int[][] l = {{5,6}, {7,8}};

    }
}
