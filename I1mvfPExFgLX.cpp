#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main()
{
    string num1 = "asdasd";
    string num2 = "asdasd";
    int n = num1.length();
        int m = num2.length();
        int ans=0;
        for(int i=1;i<=n;i++)
        {
            int sum = stoi(num1[n-i]) + stoi(num2[m-i]);
            if(sum >= 10)
            {
                int x = sum;
                int rem = 0;
                while(x>0)
                {
                    rem=x%10;
                    x=x/10;
                }
                sum+=rem;
                ans+=rem;
            }
            else
            {
                ans+=sum;
            }
        }
}