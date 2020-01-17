package com.tabletennis;

import java.util.ArrayList;
import java.util.Scanner;

public class PasswordEncryption {
    public static String encryption(String a)
    {
        int n = 1;
        int k = 1000000007;
        int alen = a.length();
        // int[] pow1 = new int[30];
        ArrayList<Long> pow1 = new ArrayList<>();
        pow1.add((long) 1);

        int l=1;
        for(int j=1;j<alen+1;j++) {
            pow1.add((pow1.get(j-1) * 101) % k);
            System.out.println(pow1);
//            System.out.println(pow1[l]);
        }
        int co = 0;
        long sum = 0;
        int ha = 0;
        for(int j=0;j<alen;j++) {
            int a1=a.charAt(j);
            sum = (sum + (a1 * pow1.get(alen - j) % k) % k);
        }
        return Long.toString(sum);

    }
}
