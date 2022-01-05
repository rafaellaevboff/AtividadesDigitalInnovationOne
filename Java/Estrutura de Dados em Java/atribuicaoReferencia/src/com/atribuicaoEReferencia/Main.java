package com.atribuicaoEReferencia;

public class Main {

    public static void main(String[] args) {
        System.out.println("PRIMITIVOS:"); //valor em memória
	    int num1 = 1;
	    int num2 = num1;
        System.out.println("num1: "+ num1+ ". num2: " + num2);
        //mudando primitivo num1: num1 vai passar a ter um valor diferente do num2
        num1 = 2;
        System.out.println("num1: "+ num1+ ". num2: " + num2);

        System.out.println("\nOBJETOS:"); //copia o valor da referência - referência de memória
        meuObj objA = new meuObj(1);
        meuObj objB = objA;
        System.out.println("objA: "+ objA+ ". objB: " + objB);
        //mudando objeto A: valor de objA e objB vão ser os mesmos
        objA.setNum(2);
        System.out.println("objA: "+ objA+ ". objB: " + objB);
    }
}
