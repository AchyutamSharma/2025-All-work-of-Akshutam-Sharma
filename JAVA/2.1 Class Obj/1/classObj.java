class Calculator 
{

  public int add()
  {
  
    System.out.println("in add");
    return 2;
  }
}

public class classObj {
  public static void main(String[] args) {
    
  // creating a class object 
  Calculator calc = new Calculator();  
  
  int result = calc.add();
  System.out.println(result);


  }
}
