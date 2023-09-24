using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class newpassword : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        if (TextBox1.Text==TextBox2.Text)
        {

        registratinBal rbal = new registratinBal();
        rbal.email = Session["email"].ToString();
        rbal.password = TextBox2.Text;
        DAL rdal = new DAL();
        int res=rdal.updatevarifieduser(rbal);
            if (res==1)
            {
                Response.Write("<script>alert('Password Updated Now you can Login ...');window.location.href='Login.aspx';</script>");


            }
            else
            {

            }

        }
        else
        {
            Response.Write("<script>alert('Password isn't match Check Again..');</script>");

        }
    }
}