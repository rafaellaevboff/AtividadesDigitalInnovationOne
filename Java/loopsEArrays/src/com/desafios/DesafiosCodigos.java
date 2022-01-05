package com.desafios;

import java.util.Locale;
import java.util.Scanner;
import static java.lang.Math.pow;
//Atividades feitas nos desafios de código da DIO

public class DesafiosCodigos {

    public static void main(String[] args) {
        System.out.println("ATIVIDADE XADREZ:");
        xadrez();
        System.out.println("\nATIVIDADE TRIGO NO TABULEIRO:");
        trigoTabuleiro();
        System.out.println("\nATIVIDADE COMPRAS:");
        compras();
        System.out.println("\nATIVIDADE FUSO-HORÁRIO:");
        fusoHorario();
        System.out.println("\nATIVIDADE PAR/IMPAR E POSITIVO/NEGATIVO:");
        parImpar();
        System.out.println("\nATIVIDADE DAMA:");
        dama();
    }

    public static void xadrez() {
        /*https://web.dio.me/coding/desafios-java-developer/algorithm/dama?back=/track/spread-java-developer*/
        System.out.println("Verificar se o quadrado do tabuleiro é preto ou branco.");
        Scanner sc = new Scanner(System.in);
        System.out.println("Digite o número da linha:");
        int L = sc.nextInt();
        System.out.println("Digite o número da coluna:");
        int C = sc.nextInt();
        if ((L + C) % 2 == 0) System.out.println("1 - branco");//branco
        else System.out.println("0 - preto");//preto
    }

    public static void trigoTabuleiro(){
        /*https://web.dio.me/coding/desafios-java-developer/algorithm/trigo-no-tabuleiro?back=/track/spread-java-developer*/
        Scanner sc = new Scanner(System.in);

        System.out.println("Quantas vezes deseja verificar:");
        int n = sc.nextInt(); //vzs pra fzer o laço

        for(int i=0 ; i<n ; i++) {
            System.out.println("Digite quantas casas do tabuleiro serão consideradas:");
            int x = sc.nextInt(); //casas do tabuleiro que serão usadas
            double resultado = (pow(2,x)-1)/12000;
            System.out.println("O monge espera receber " + (long)resultado + " kg.\n");
        }
    }

    public static void compras(){
        /*https://web.dio.me/coding/desafios-java-developer/algorithm/macpronalts?back=/track/spread-java-developer*/
        Scanner sc = new Scanner(System.in);
        sc.useLocale(Locale.ENGLISH);
        Locale.setDefault(new Locale("en", "US"));

        int produtos=0, quantidade=0;
        double res=0, valor=0;
        System.out.println("Digite quantas vezes deseja verificar:");
        int N = Integer.parseInt(sc.nextLine());

        System.out.println("Códigos dos produtos: 1001, 1002, 1003, 1004, 1005");

        for (int x=0 ; x<N ; x++){
            System.out.println("Código do produto:");
            produtos = sc.nextInt();
            System.out.println("Quantidade:");
            quantidade  = sc.nextInt();

            if (produtos == 1001) valor = 1.50;
            else if (produtos == 1002) valor = 2.50;
            else if (produtos == 1003) valor = 3.50;
            else if (produtos == 1004) valor = 4.50;
            else if (produtos == 1005) valor = 5.50;

            res += valor * quantidade;
        }
        System.out.printf("Valor final: "+ "%.2f\n",res);
    }

    public static void fusoHorario() {
        /*https://web.dio.me/coding/desafios-java-developer/algorithm/fuso-horario?back=/track/spread-java-developer*/
        Scanner sc = new Scanner(System.in);
        System.out.println("Verificar horário de chegada na cidade.");
        System.out.println("Horário de saída:");
        int horasaida = sc.nextInt();
        System.out.println("Tempo da Viagem:");
        int tempoviagem = sc.nextInt();
        System.out.println("Fuso-horário:");
        int fuso = sc.nextInt();

        int ajuste = horasaida + tempoviagem + fuso;
        if (ajuste >= 24) {
            ajuste = ajuste - 24;
            System.out.println("Horário de chegada: " + ajuste);
        } else System.out.println("Horário de chegada: " + ajuste);
    }

    public static void parImpar(){
        /*https://web.dio.me/coding/desafios-java-developer/algorithm/par-ou-impar?back=/track/spread-java-developer*/
        Scanner leitor = new Scanner(System.in);
        System.out.println("Digite quantas vezes deseja verificar:");
        int N = leitor.nextInt();

        for (int i = 0; i < N; i++) {
            System.out.println("Digite o valor:");
            int valor = leitor.nextInt();
            if((valor%2==0) && (valor>0)){
                System.out.println("EVEN POSITIVE");
            } else if((valor%2==0) && (valor<0)){
                System.out.println("EVEN NEGATIVE");
            }
            else if((valor%2!=0) && (valor>0)){
                System.out.println("ODD POSITIVE");
            }else if((valor%2!=0) && (valor<0)){
                System.out.println("ODD NEGATIVE");
            }
            else if (valor==0){
                System.out.println("NULL");
            }
        }
    }

    public static void dama(){
        /*https://web.dio.me/coding/desafios-java-developer/algorithm/dama?back=/track/spread-java-developer*/
        Scanner sc = new Scanner(System.in);
        int x1,y1,x2,y2;
        //se estiver na mesma linha ou mesma coluna ou mesma diagonal, gasta 1 movimento
        //se estiver em qualquer outra posição, a rainha gastará 2 movimentos!

        while(true){
            System.out.println("Digite x1=0, x2=0, y1=0 e y2=0 para deseja encerrar.");

            System.out.println("Linha que dama está:");
            x1 = sc.nextInt();
            System.out.println("Coluna que dama está:");
            y1 = sc.nextInt();

            System.out.println("Linha que dama irá:");
            x2 = sc.nextInt();
            System.out.println("Linha que dama irá:");
            y2 = sc.nextInt();

            if(x1 == 0 && y1 == 0 && x2 == 0 && y2 == 0) break; //condição de parada
            System.out.println("Quantidade de movimentos que a dama precisará fazer:");
            if((x1==x2) && (y1==y2)){
                System.out.println("0");
            }
            else if((x1 == x2) || (y1 == y2) || ((Math.abs(x1-x2)) == (Math.abs(y1-y2)))){
                System.out.println("1");
            }
            else{
                System.out.println("2");
            }
        }
    }
}
