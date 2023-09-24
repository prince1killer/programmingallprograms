using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        TextBox1.Text = DropDownList1.Text+"/"+DropDownList2.Text+"/"+DropDownList3.Text;
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        TextBox1.Text = "";
    }

    protected void RadioButton1_CheckedChanged(object sender, EventArgs e)
    {

    }

    protected void Button3_Click(object sender, EventArgs e)
    {
        if (RadioButton4.Checked == true)
        {
            Label2.Text = "your ans is correct";
        }
        else if(RadioButton1.Checked == true||RadioButton2.Checked == true || RadioButton3.Checked == true){
            Label2.Text = "your answer is wrong";
        }
        else
        {
            Label2.Text = "please Select any option";   
        }
        Response.Write("this is success");
    }

    protected void Button4_Click(object sender, EventArgs e)
    {
        
    }
}
