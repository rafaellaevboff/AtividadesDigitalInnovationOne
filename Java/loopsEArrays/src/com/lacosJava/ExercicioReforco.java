package com.lacosJava;

public class ExercicioReforco {
    public static void main(String[] args) {
        /*Faça um for de 1 até 14, sendo que somente múltiplos de 2 sejam listados.
          Entretanto, quando o loop passar pelo 12, o mesmo deve ser abortado.
          Fazer com while.
        * */
        int i = 0;
        while(i < 14){
            i++;
            if(i % 2 == 0){
                if(i == 12){
                    continue;
                }
                System.out.println(i);
            }
        }
    }
}
