#include <iostream>
#include <stack>
using namespace std;
int main()
{
    stack<char> st;
    string s = "({[)";
        int n = s.length();
        // for(int i=0;i<n;i++)
        // {
        //     // cout<<int(s[i])<<endl;
        //     char k;
        //     if(st.size() != 0)
        //     {
        //         k = st.top();
        //     }
        //     cout<<k;
        //     st.push(s[i]);
        // }
        for(int i=0;i<n;i++)
        {
            if(st.size() != 0)
            {
                if(st.top() == '(' && int(st.top())+1 == int(s[i]))
                {
                    // cout<<st.top();
                    st.pop();
                }
                else if (int(st.top())+2 == int(s[i]))
                {
                    // cout<<st.top();
                    st.pop();
                }
                else
                {
                    st.push(s[i]);
                    // cout<<st.top();
                }
            }
            else
            {
                st.push(s[i]);
                // cout<<st.top();
            }
        }
        if(st.size() == 0)
        {
            cout<<"True";
            return 0;
        }
        cout<<"False";
        return 0;
}