#include<stdio.h>

void prime(int n){

    for (int i = 1; i <= n; i++)
    {
        int count =0;
        for (int j = 1; j <= i; j++)
        {
            if (i%j==0)
            {
                count++;
            }
            

        }
        if (count<=2)
        {
            printf("%d\n",i);
        }
        
        
        
        
    }
    
    return ;
}
int main(){
    int n;
    printf("Enter the n:");
    scanf("%d",&n);
    prime(n);
}