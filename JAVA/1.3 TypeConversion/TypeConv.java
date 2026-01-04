class TypeConv {
  public static void main(String[] args) {
    
    // This is the correct way to convert one datatype to another datatype.
    byte b = 127;
    int a = b;
    System.out.println(a);
    

    // but if you can change int into byte it will through the error.    
    /* 
    int c =128;
    byte d = c;
    System.out.println(d);
    */
    // If you need to correct Do this.... 
    
    int c =128;
    byte d = (byte)c;
    System.out.println(d);
    
    float f = 5.6f;
    int t = (int) f;
    System.out.println(t);
    
    

    // You can store the value of byte in Integer due to it above it capacity.
    byte x = 10;
    byte y = 30;
    int z = x * y;
    System.out.println(z);


  }  
}
