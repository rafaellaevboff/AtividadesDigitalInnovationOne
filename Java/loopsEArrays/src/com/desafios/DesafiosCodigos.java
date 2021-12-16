package com.desafios;
import java.util.Locale;
import java.util.Scanner;

public class DesafiosCodigos {

    //Atividades feitas nos desafios de código da DIO

    public static void xadrez() {
        Scanner sc = new Scanner(System.in);
        int L = sc.nextInt();
        int C = sc.nextInt();
        if ((L + C) % 2 == 0) System.out.println("1");//branco
        else System.out.println("0");//preto
        sc.close();
    }

    public static void trigoTabuleiro(){
        System.out.println("Falta resolver");
    }

    public static void compras(){
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.ENGLISH);
        Locale.setDefault(new Locale("en", "US"));

        int produtos=0, quantidade=0;
        double res=0, valor=0;
        int N = Integer.parseInt(sc.nextLine());

        for (int x=0 ; x<N ; x++){
            produtos = sc.nextInt();
            quantidade  = sc.nextInt();

            if (produtos == 1001)
                valor = 1.50;
            else if (produtos == 1002)
                valor = 2.50;
            else if (produtos == 1003)
                valor = 3.50;
            else if (produtos == 1004)
                valor = 4.50;
            else if (produtos == 1005)
                valor = 5.50;

            res += valor * quantidade;
        }
        System.out.printf("%.2f\n",res);
        sc.close();
    }

    public static void fusoHorario() {
        Scanner sc = new Scanner(System.in);
        int horasaida = sc.nextInt();
        int tempoviagem = sc.nextInt();
        int fuso = sc.nextInt();

        int ajuste = horasaida + tempoviagem + fuso;
        if (ajuste >= 24) {
            ajuste = ajuste - 24;
            System.out.println(ajuste);
        } else System.out.println(ajuste);
        sc.close();
    }

    public static void parImpar(){
        System.out.println("Falta resolver");
    }

    public static void dama(){
        System.out.println("Falta resolver");
    }
}
